import { API_ROUTES } from '@/shared/constants'
import type { MatchResponse, Response } from '@/shared/types'
import { transformMatch } from './matchDto'

export const getMatches = async () => {
	const res = await fetch(API_ROUTES.MATCHES)
	const data: Response<{ matches: MatchResponse[] }> = await res.json()

	if (!data.ok) {
		throw new Error('Ошибка: не удалось загрузить информацию')
	}

	return data.data.matches.map(transformMatch)
}
