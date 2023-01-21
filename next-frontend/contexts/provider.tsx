import { useMemo, useEffect } from 'react'
import { Context } from './context'
import { useAdmin, useTabBar } from '../hooks'

export const AppProvider = ({ children }: any) => {
	const tab = useTabBar()
	const admin = useAdmin()

	useEffect(() => {
		if (localStorage.getItem('is_admin') === '1'){
				admin.setAdminMode()
		}
	}, [admin.isAdmin]);

	const contextValues = useMemo(
		() => ({ tab, admin }), [tab, admin])

	return <Context.Provider value={contextValues}>{ children }</Context.Provider>
}