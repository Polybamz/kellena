import { registerForNewsletter } from "../../firebase"
import { useState } from "react"

const useNewsLetterRegistration = () => {
    const [isRegistered, setIsRegistered] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const register = async (email: string) => {
        setLoading(true)
        setError(null)
        try {
            await registerForNewsletter(email)
            setIsRegistered(true)
        } catch (err: any) {
            setError(err.message || "Registration failed")
        } finally {
            setLoading(false)
        }
    }

    return { isRegistered, error, loading, register }

}
 
export default useNewsLetterRegistration