import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TabBar } from '../components';
import { createContext, useState } from 'react'
import { AppProvider } from '../contexts/provider';


export const AdminContext = createContext<any>(undefined)

function MyApp({ Component, pageProps }: AppProps) {

  const [isAdmin, setIsAdmin] = useState(false)
  const Adm = { isAdmin, setIsAdmin }
  
  return (
    <AdminContext.Provider value={Adm}>
      <AppProvider>
          <TabBar/>
          <Component {...pageProps} />
      </AppProvider>
    </AdminContext.Provider>

  )
}

export default MyApp
