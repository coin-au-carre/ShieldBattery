import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { batchedSubscribe } from 'redux-batched-subscribe'
/*eslint-disable camelcase*/
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'
/* eslint-enable camelcase */
import rootReducer from './root-reducer'

const isDev = (process.env.NODE_ENV || 'development') === 'development'
const createMiddlewaredStore = compose(
    applyMiddleware(thunk, promise),
    batchedSubscribe(batchedUpdates),
    // Support for https://github.com/zalmoxisus/redux-devtools-extension
    isDev && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function create(initialState) {
  const store = createMiddlewaredStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}