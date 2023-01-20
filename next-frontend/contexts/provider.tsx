import { useMemo } from 'react'
import { Context } from './context'
import { useTabBar } from '../hooks'

export const AppProvider = ({ children }: any) => {
    const tab = useTabBar()
    const value = {'ops': 'sjdkajsd'}

    const contextValues = useMemo(
        () => ({ tab, value }), [tab])
    
    return <Context.Provider value={contextValues}>{ children }</Context.Provider>
}