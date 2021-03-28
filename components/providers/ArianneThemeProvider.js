import { useState , useEffect ,useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'


const ArianneThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");
    const value = { 
        theme,
        setTheme,
    };
    
    useEffect(() => {
        const localStorage = window.localStorage
        
        if(!localStorage.getItem('Ariannetheme')) {
            localStorage.setItem('Ariannetheme',theme)
        } else {
            setTheme(localStorage.getItem('Ariannetheme'))
        }
    }, [])

        return(
            <>
                <style jsx>{`
                `}</style>

                <ThemeContext.Provider value = {value}>
                    {children}
                </ThemeContext.Provider>
            </>
        )
}

export default ArianneThemeProvider