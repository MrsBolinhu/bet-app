import { useContext } from 'react'
import { Context } from './context'

export const useContextValue = () => useContext(Context)

export const useTabBarContext = () => {
    const context = useContextValue()
    return context.tab
}

export const useValueContext = () => {
    const context = useContextValue()
    return context
}