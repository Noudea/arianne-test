import { useEffect , useState , useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'


const SideNavHeader = ({children,...props}) => {
    const colors = ThemeColors[useContext(ThemeContext).theme]

    useEffect(() => {

    },[colors])


    return (<div className='SideNavHeaderContainer'>
        <style jsx>{`
            .SideNavHeaderContainer {
                text-align: center; 
            }
            p {
                color:${colors ? colors.contrast : ThemeColors.light.contrast };
                font-size: 36px;
                font-weight:600;
            }
            `}</style>
        <p>{children}</p>
    </div>)
}

export default SideNavHeader;