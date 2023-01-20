import { useCallback, useState } from 'react'

export const useTabBar = () => {

    const [tabBar, setTabBar] = useState(true)

    const show = useCallback(() => {
        setTabBar(true)
    }, [])

    const hide = useCallback(() => {
        setTabBar(false)
    }, [])

    return { tabBar, show, hide }
}