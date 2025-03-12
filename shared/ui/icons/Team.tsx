import type { IconProps } from '@/shared/types'

export default function IconTeam({ size = 48, ...props }: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={(49 / 48) * size}
			viewBox='0 0 48 49'
			fill='none'
			{...props}
		>
			<path
				fill='url(#a)'
				d='M22 1.655a4 4 0 0 1 4 0l16.785 9.69a4 4 0 0 1 2 3.464v19.382a4 4 0 0 1-2 3.464L26 47.345a4 4 0 0 1-4 0l-16.785-9.69a4 4 0 0 1-2-3.464V14.809a4 4 0 0 1 2-3.464L22 1.655Z'
			/>
			<path
				stroke='url(#b)'
				strokeWidth='2'
				d='M22.5 6.52a3 3 0 0 1 3 0l13.32 7.691a3 3 0 0 1 1.5 2.598v15.382a3 3 0 0 1-1.5 2.598l-13.32 7.69a3 3 0 0 1-3 0L9.18 34.79a3 3 0 0 1-1.5-2.598V16.809a3 3 0 0 1 1.5-2.598l13.32-7.69Z'
			/>
			<rect width='20' height='2' x='14' y='30.5' fill='url(#c)' rx='.4' />
			<path
				fill='url(#d)'
				d='M33.6 28.5H14.4a.4.4 0 0 1-.4-.4V17.047a.4.4 0 0 1 .688-.278l4.924 5.106a.4.4 0 0 0 .644-.094l3.388-6.59a.4.4 0 0 1 .712 0l3.388 6.59a.4.4 0 0 0 .644.094l4.924-5.106a.4.4 0 0 1 .688.278V28.1a.4.4 0 0 1-.4.4Z'
			/>
			<defs>
				<linearGradient
					id='a'
					x1='24'
					x2='24'
					y1='.5'
					y2='48.5'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#CF1C51' />
					<stop offset='1' stopColor='#AF1947' />
				</linearGradient>
				<linearGradient
					id='b'
					x1='24'
					x2='24'
					y1='4.5'
					y2='44.5'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FEE3A2' />
					<stop offset='1' stopColor='#F2A768' />
				</linearGradient>
				<linearGradient
					id='c'
					x1='24'
					x2='24'
					y1='30.5'
					y2='32.5'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FEE3A2' />
					<stop offset='1' stopColor='#F2A768' />
				</linearGradient>
				<linearGradient
					id='d'
					x1='24'
					x2='24'
					y1='14.5'
					y2='28.5'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FEE3A2' />
					<stop offset='1' stopColor='#F2A768' />
				</linearGradient>
			</defs>
		</svg>
	)
}
