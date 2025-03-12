import { COLORS } from '@/shared/constants'
import { useScreenSize } from '@/shared/hooks'
import React from 'react'
import {
	Pressable,
	StyleSheet,
	Text,
	type TouchableOpacityProps,
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
	children: React.ReactNode
}

export default function Button({
	children,
	style,
	disabled,
	...props
}: ButtonProps) {
	const { isSmallScreen } = useScreenSize()

	return (
		<Pressable
			style={[
				styles.button,
				disabled ? styles.disabled : null,
				style,
				isSmallScreen && {
					width: '100%',
					alignSelf: 'stretch',
				},
			]}
			disabled={disabled}
			activeOpacity={0.8}
			{...props}
		>
			{typeof children === 'string' ? (
				<Text style={[styles.text, disabled ? styles.disabledText : null]}>
					{children}
				</Text>
			) : (
				children
			)}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: 204,
		height: 56,
		padding: 16,
		gap: 10,
		backgroundColor: COLORS.red,
		borderWidth: 0,
	},
	text: {
		color: COLORS.text,
		fontWeight: '600',
		fontSize: 18,
		lineHeight: 21.78,
	},
	disabled: {
		backgroundColor: COLORS.redDisabled,
	},
	disabledText: {
		color: COLORS.textDisabled,
	},
})
