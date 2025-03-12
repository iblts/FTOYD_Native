import type { IconProps } from '@/shared/types'

export default function IconArrowUp({
	size = 28,
	fill = '#FAFAFA',
	...props
}: IconProps) {
	return (
		<svg
			width={size}
			height={size * (29 / 28)}
			viewBox='0 0 28 29'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M7 18L14 11L21 18'
				stroke={fill}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
