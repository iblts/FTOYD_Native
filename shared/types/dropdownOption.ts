interface FullOption<values> {
	value: values
	label: string
}

type ShortOption<values> = values

export type DropdownOption<values extends string = string> =
	| FullOption<values>
	| ShortOption<values>
