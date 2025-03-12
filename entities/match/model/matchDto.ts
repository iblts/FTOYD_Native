import type { Match, MatchResponse } from '@/shared/types'

export const transformMatch = (match: MatchResponse): Match => {
	switch (match.status) {
		case 'Ongoing':
			return { ...match, status: 'Live' }
		case 'Scheduled':
			return { ...match, status: 'Match preparing' }
		default:
			return { ...match, status: 'Finished' }
	}
}
