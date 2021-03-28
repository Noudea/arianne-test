import { useState , useEffect , useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'

const Divider = (props) => {

    const [width,setWidth] = useState('100%')
    const [margin,setMargin] = useState(24)
    const [strokeWidth,setStrokeWidth] = useState(1)
    const colors = ThemeColors[useContext(ThemeContext).theme]

    useEffect(() => {
        if (props.width) {
            setWidth(props.width)
        }

        if(props.margin) {
            setMargin(props.margin)
        }
        
        if(props.thin) {
            setStrokeWidth(0.5)
        }
        if(props.bold) {
            setStrokeWidth(2)
        }
        if (props.thickness) {
            setStrokeWidth(props.thickness)
        }
    },[colors])

    return(<div className='divider'>
        <style jsx>{`
            .divider {
                margin:${margin}px auto;
                width:${width};
                height:${strokeWidth}px;
                background-color:${colors ? colors.contrast : ThemeColors.light.contrast};
            }
            `}</style>
    </div>)
}

export default Divider;