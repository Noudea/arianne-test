import NavProvider from "./NavProvider"
import ArianneThemeProvider from "./ArianneThemeProvider"

const GeneralProvider = ({children}) => {
    return(
        <NavProvider>
            <ArianneThemeProvider>
                {children}
            </ArianneThemeProvider>
        </NavProvider>
    )
}

export default GeneralProvider