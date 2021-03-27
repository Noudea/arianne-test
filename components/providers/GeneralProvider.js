import NavProvider from "./NavProvider"
import ThemeProvider from "./ThemeProvider"

const GeneralProvider = ({children}) => {
    return(
        <NavProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </NavProvider>
    )
}

export default GeneralProvider