import { useState , useEffect , useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'


const NavBar = ({children,...props}) => {
    const [alignement, setAlignement] = useState(false)
    const colors = ThemeColors[useContext(ThemeContext).theme]

    useEffect(() => {

        if(props.alignement === 'vertical') {
            setAlignement('sideNavBarContainerVertical')
        } 

        if (props.alignement === 'horizontal') {
            setAlignement('sideNavBarContainerHorizontal')
        }

    }, [colors])

    return(<>
        <style jsx>{`
            .sideNavBarContainerVertical {
                background-color:${props.color ? props.color : colors ? colors.background : ThemeColors.light.background};
                display:flex;
                flex-direction: column;
                align-items:center;
                height: 100%;
                width:64px;
                position:fixed;
                left:0px;
                top:0px;
                z-index:99999;
            }
            .sideNavBarContainerHorizontal {
                background-color: ${props.color ? props.color : colors ? colors.background : ThemeColors.light.background};
                width: 100%;
                height:64px;
                position:fixed;
                left:0px;
                top:0px;
                z-index:99999;
                display:flex;
                align-items:center;
            }
            `}</style>
        <div className={alignement}>
            {children}
        </div>
    
    </>)
}

export default NavBar;