import type { IconProps } from '@/shared/types'

export default function IconArrowDown({
	size = 20,
	fill = '#B4B5B6',
	...props
}: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M14.932 6.81563H5.06536C4.26536 6.81563 3.86536 7.78229 4.43203 8.34896L8.74869 12.6656C9.44036 13.3573 10.5654 13.3573 11.257 12.6656L12.8987 11.024L15.5737 8.34896C16.132 7.78229 15.732 6.81563 14.932 6.81563Z'
				fill={fill}
			/>
		</svg>
	)
}
