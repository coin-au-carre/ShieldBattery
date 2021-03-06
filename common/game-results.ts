import { AssignedRaceChar } from './races'

/**
 * The results of a game, as reported by the game client. These results have not yet been reconciled
 * across all players, so they may still contain "in-progress"-type results.
 */
export enum GameClientResult {
  Playing = 0,
  Disconnected = 1,
  Defeat = 2,
  Victory = 3,
}

/**
 * The results of a game for a particular player.
 */
export interface GameClientPlayerResult {
  result: GameClientResult
  race: AssignedRaceChar
  apm: number
}

/**
 * The final, reconciled results of a game, after all players' results have been combined.
 */
export type ReconciledResult = 'win' | 'loss' | 'draw' | 'unknown'
