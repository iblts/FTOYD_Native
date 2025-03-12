import { MATCH_STATUS } from '../constants'
import type { ValuesOf } from '../utilits'

export interface Match {
	time: string
	title: string
	homeTeam: Team
	awayTeam: Team
	homeScore: number
	awayScore: number
	status: MatchStatus
}

export interface MatchResponse extends Omit<Match, 'status'> {
	status: MatchResponseStatus
}

type MatchResponseStatus = 'Scheduled' | 'Ongoing' | 'Finished'
export type MatchStatus = ValuesOf<typeof MATCH_STATUS>

interface Team {
	name: string
	players: Player[]
	points: number
	place: number
	total_kills: number
}

interface Player {
	username: string
	kills: number
}

export interface Response<T> {
	data: T
	ok: boolean
}
