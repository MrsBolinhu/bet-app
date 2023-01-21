import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TabBar } from '../components';
import { AppProvider } from '../contexts/provider';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <AppProvider>
        <TabBar/>
        <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
