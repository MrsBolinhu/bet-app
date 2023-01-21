import { useCallback, useState } from 'react'

export const useAdmin = () => {

    const [isAdmin, setIsAdmin] = useState(false)

    const setAdminMode = useCallback(() => {
        setIsAdmin(true)
    }, [])

    const unsetAdminMode = useCallback(() => {
        setIsAdmin(false)
    }, [])

    return { isAdmin, setAdminMode, unsetAdminMode }
}