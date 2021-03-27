import { useState , useEffect } from 'react'
import NavContext from '../contexts/NavContext';

const NavProvider = ({children}) => {

    const [sideNavOpen,setSideNavOpen] = useState(false)
    const value = { 
        sideNavOpen,
        setSideNavOpen,
    };
        return(
            <>
                <style jsx>{`
                `}</style>
                <NavContext.Provider value = {value}>
                    {children}
                </NavContext.Provider>
            </>
        )
}

export default NavProvider