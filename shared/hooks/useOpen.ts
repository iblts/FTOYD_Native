import { useState } from 'react'

export const useOpen = (initial = false) => {
	const [isOpen, setOpen] = useState(initial)

	const openModal = () => setOpen(true)
	const closeModal = () => setOpen(false)
	const toggleModal = () => setOpen(prev => !prev)

	return { isOpen, openModal, closeModal, toggleModal }
}
