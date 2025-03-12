import { useScreenSize } from '@/shared/hooks'
import type { DropdownOption, MatchStatus } from '@/shared/types'
import { Select } from '@/shared/ui'
import { useFilter } from '../../model/hooks'

export default function FilterButton() {
	const { status, setStatus } = useFilter()
	const options: DropdownOption<MatchStatus>[] = [
		'Finished',
		'Live',
		'Match preparing',
	]
	const { isSmallScreen } = useScreenSize()

	return (
		<Select
			options={options}
			value={status}
			setValue={setStatus}
			resetValue={'Все статусы'}
			style={
				isSmallScreen && {
					width: '100%',
				}
			}
		/>
	)
}
