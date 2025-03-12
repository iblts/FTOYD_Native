import type { MatchStatus } from '@/shared/types'
import { create } from 'zustand'

export const useFilter = create<{
	status: MatchStatus | null
	setStatus: (status: MatchStatus | null) => void
}>(set => ({
	status: null,
	setStatus: status => set({ status }),
}))

export const useMatchStatusFilter = () => useFilter(state => state.status)
