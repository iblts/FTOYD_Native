import { QUERY_KEYS } from '@/shared/constants'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useRefresh = () => {
	const queryClient = useQueryClient()
	const [error, setError] = useState<string | null>(null)
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		const updateState = () => {
			const queryState = queryClient.getQueryState([QUERY_KEYS.MATCHES])
			setError(queryState?.error?.message || null)
			setIsFetching(queryState?.fetchStatus === 'fetching')
		}

		const unsubscribe = queryClient.getQueryCache().subscribe(event => {
			if (event.query.queryKey[0] === QUERY_KEYS.MATCHES) {
				updateState()
			}
		})

		updateState()
		return () => unsubscribe()
	}, [queryClient])

	const handleRefresh = async () => {
		await queryClient.refetchQueries({ queryKey: [QUERY_KEYS.MATCHES] })
	}

	return {
		isFetching,
		error,
		handleRefresh,
	}
}
