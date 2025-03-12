import type { IconProps } from '@/shared/types'

export default function IconAlert({
	size = 28,
	fill = '#EB0237',
	...props
}: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='none'
			{...props}
		>
			<path
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.8'
				d='M14.012 11.685v2.333m0 4.667v.012m-8.166 4.655h16.333a2.333 2.333 0 0 0 2.147-3.209L16.042 5.852a2.334 2.334 0 0 0-4.083 0L3.676 20.143a2.334 2.334 0 0 0 2.041 3.209'
			/>
		</svg>
	)
}
