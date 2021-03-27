import GeneralProvider from '../components/providers/GeneralProvider'
import SideLayout from '../layout/SideLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<GeneralProvider>
  <SideLayout>
      <Component {...pageProps} />
  </SideLayout>
  </GeneralProvider>
  ) 
  
  
  
}

export default MyApp
