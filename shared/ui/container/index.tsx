import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

interface Props extends ViewProps {
	width?: number
	padding?: number
}

export default function Container({
	children,
	width = 1920,
	padding = 42,
	style,
	...props
}: Props) {
	return (
		<View
			style={[
				styles.container,
				{
					width: '100%',
					maxWidth: width,
					padding,
				},
				style,
			]}
			{...props}
		>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 'auto',
		marginRight: 'auto',
	},
})
