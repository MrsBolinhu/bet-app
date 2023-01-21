import { useMemo } from 'react'
import { Context } from './context'
import { useAdmin, useTabBar } from '../hooks'

export const AppProvider = ({ children }: any) => {
    const tab = useTabBar()
    const admin = useAdmin()

    const contextValues = useMemo(
        () => ({ tab, admin }), [tab, admin])
    
    return <Context.Provider value={contextValues}>{ children }</Context.Provider>
}