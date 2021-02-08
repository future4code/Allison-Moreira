import { useState } from "react"

export default function useModal() {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        console.log("chamando função modal")
        setShowModal(prev => !prev)
    }

    return [ showModal, openModal, setShowModal]
}
