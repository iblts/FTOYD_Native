import { COLORS } from '@/shared/constants'
import { useOpen, useScreenSize } from '@/shared/hooks'
import { DropdownOption } from '@/shared/types'
import { useEffect, useRef, useState } from 'react'
import {
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	type ViewProps,
} from 'react-native'
import { IconArrowDown } from '../icons'

interface Props<Value extends string> extends ViewProps {
	options: DropdownOption<Value>[]
	value: Value | null
	setValue: (value: Value | null) => void
	resetValue: DropdownOption<string>
}

export default function Select<Value extends string = string>({
	options = [],
	value,
	setValue,
	resetValue,
	style,
	...props
}: Props<Value>) {
	const { isSmallScreen } = useScreenSize()
	const { isOpen, toggleModal } = useOpen()
	const buttonRef = useRef<View>(null)
	const [optionsPosition, setOptionsPosition] = useState({
		top: 164,
		left: 336,
		width: 0,
	})

	const handleSelectOption = (value: Value) => {
		toggleModal()
		setValue(value)
	}

	const handleReset = () => {
		toggleModal()
		setValue(null)
	}

	const isObject = (value: DropdownOption) => {
		return typeof value === 'object'
	}

	const getLabel = (option: DropdownOption) => {
		return isObject(option) ? option.label : option
	}

	useEffect(() => {
		if (isOpen && buttonRef.current) {
			buttonRef.current.measure((_x, _y, width, height, pageX, pageY) => {
				setOptionsPosition({
					top: pageY + height + (isSmallScreen ? 0 : 4),
					left: pageX,
					width: width,
				})
			})
		}
	}, [isOpen])

	return (
		<View style={[styles.body, style]} {...props}>
			<TouchableOpacity
				style={[styles.button, isSmallScreen && { width: '100%' }]}
				onPress={toggleModal}
				ref={buttonRef}
			>
				<Text style={styles.buttonText}>
					{value ? getLabel(value) : getLabel(resetValue)}
				</Text>
				<IconArrowDown
					style={{
						transform: isOpen ? 'rotate(180deg)' : undefined,
					}}
				/>
			</TouchableOpacity>
			{isOpen && (
				<Modal visible={isOpen} transparent={true} animationType='none'>
					<TouchableWithoutFeedback onPress={toggleModal}>
						<View style={styles.modalOverlay}>
							<TouchableWithoutFeedback onPress={() => {}}>
								<View
									style={[
										styles.options,
										{
											top: optionsPosition.top,
											left: optionsPosition.left,
											width: optionsPosition.width,
										},
									]}
								>
									{options.map(option =>
										isObject(option) ? (
											<TouchableOpacity
												key={option.value}
												style={styles.optionButton}
												onPress={() => handleSelectOption(option.value)}
											>
												<Text style={styles.buttonText}>{option.label}</Text>
											</TouchableOpacity>
										) : (
											<TouchableOpacity
												key={option}
												style={styles.optionButton}
												onPress={() => handleSelectOption(option)}
											>
												<Text style={styles.buttonText}>{option}</Text>
											</TouchableOpacity>
										)
									)}
									<TouchableOpacity
										style={styles.optionButton}
										onPress={handleReset}
									>
										<Text style={styles.buttonText}>
											{getLabel(resetValue)}
										</Text>
									</TouchableOpacity>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</TouchableWithoutFeedback>
				</Modal>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		position: 'relative',
	},
	button: {
		width: '100%',
		height: 56,
		borderRadius: 4,
		paddingVertical: 10,
		paddingRight: 20,
		paddingLeft: 16,
		gap: 12,
		backgroundColor: COLORS.gray,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonText: {
		fontWeight: '500',
		fontSize: 16,
		letterSpacing: 0,
		color: COLORS.textLight,
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	options: {
		position: 'absolute',
		backgroundColor: COLORS.gray,
		padding: 10,
		borderRadius: 4,
		zIndex: 1000,
	},
	optionButton: {
		paddingVertical: 10,
		paddingHorizontal: 16,
	},
})
