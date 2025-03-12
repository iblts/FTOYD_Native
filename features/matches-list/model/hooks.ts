import { getMatches, transformMatch } from '@/entities/match'
import { useMatchStatusFilter } from '@/features/filter-matches'
import { API_ROUTES, QUERY_KEYS } from '@/shared/constants'
import { queryClient } from '@/shared/lib/queryClient'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useMatches = () => {
	// получение матчей

	const {
		data: matches,
		error,
		isLoading,
	} = useQuery({
		queryKey: [QUERY_KEYS.MATCHES],
		queryFn: getMatches,
		staleTime: 5 * 60 * 1000,
		retry: false,
		placeholderData: prev => prev,
	})

	useEffect(() => {
		const wsUrl = API_ROUTES.WS_MATCHES
		const ws = new WebSocket(wsUrl)

		ws.onmessage = event => {
			try {
				const message = JSON.parse(event.data)
				if (message.type === 'update_matches') {
					const transformedMatches = message.data.map(transformMatch)
					queryClient.setQueryData([QUERY_KEYS.MATCHES], transformedMatches)
				}
			} catch (err) {
				console.error('Ошибка обработки данных:', err)
			}
		}

		return () => {
			ws.close()
		}
	}, [])

	// фильтрация

	const status = useMatchStatusFilter()
	const filterMatches = () => {
		if (status) {
			return matches?.filter(match => match.status === status)
		}
		return matches
	}
	const filteredMatches = filterMatches()

	return {
		matches: filteredMatches,
		isLoading,
		error,
	}
}
