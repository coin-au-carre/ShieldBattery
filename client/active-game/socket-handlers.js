import fetch from '../network/fetch'
import { dispatch } from '../dispatch-registry'

import { ACTIVE_GAME_STATUS } from '../actions'
import { stringToStatus } from '../../common/game-status'
import { FetchError } from '../network/fetch-action-types'
import logger from '../logging/logger'
import { setGameConfig } from './active-game-manager-ipc'

export default function ({ ipcRenderer }) {
  ipcRenderer.on(ACTIVE_GAME_STATUS, (event, status) => {
    dispatch({
      type: ACTIVE_GAME_STATUS,
      payload: status,
    })

    if (status.isReplay) {
      // Don't report replay status to the server (because it will error out and result in us
      // quitting the game immediately). We may want to change this at some point, but we'll have
      // to make the server assign replay IDs in that case.
      return
    }

    if (status.state === 'playing' || status.state === 'error') {
      fetch('/api/1/games/' + encodeURIComponent(status.id), {
        method: 'put',
        body: JSON.stringify({ status: stringToStatus(status.state), extra: status.extra }),
      }).catch(err => {
        if (err instanceof FetchError) {
          if (err.res.status === 409 || err.res.status === 404) {
            logger.error(
              'Quitting current game due to error reporting game status to server: ' + err.message,
            )
            // TODO(tec27): This feels kinda dangerous because this request might not have been
            // for the current game even... We should probably rework this API a bit.
            setGameConfig({})
          }
        }
      })
    }
  })
}
