import { useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { requestService } from '../service'
import { Context } from './context'
import { useAdmin, useTabBar, useUser } from '../hooks'

export const AppProvider = ({ children }: any) => {
	const router = useRouter()
	const tab = useTabBar()
	const admin = useAdmin()
	const user = useUser()

	useEffect(() => {
		if (localStorage.getItem('is_admin') === '1'){
				admin.setAdminMode()
		}
	}, [admin.isAdmin])

	useEffect(() => {
    async function loadUserData() {
        const response: any = await requestService.getUserData()
        user.setUser(response.data[0])
    }
    loadUserData();
  }, [])  

  useEffect(() => {
    if (localStorage.getItem("user") === null){
      const temp = localStorage.getItem('user')
      user.setUser(temp)
      router.push('/signin')
    } else {
      const temp2 = localStorage.getItem('image')
      user.setUserImage(temp2)
   	}
  }, [])

	const contextValues = useMemo(
		() => ({ tab, admin, user }), [tab, admin, user])

	return <Context.Provider value={contextValues}>{ children }</Context.Provider>
}