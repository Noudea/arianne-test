import { useContext , useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import Divider from '../divider/Divider'
import ThemeColors from '../themes/ThemeColors'

const ListItem = ({children,...props}) => {
    const colors = ThemeColors[useContext(ThemeContext).theme]
    useEffect(() => {

    },[colors])



    return(<li key={props.key}>
        <style jsx>{`
            li {
                color:${colors ? colors.contrast : ThemeColors.light.contrast};
            }
            
            `}</style>
        {children}
        <Divider margin={props.margin}></Divider>
    </li>)
}

export default ListItem