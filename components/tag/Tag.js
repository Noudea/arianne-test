import { useState, useEffect } from 'react'

const Tag = ({ children, ...props }) => {

    const colors = ThemeColors[useContext(ThemeContext).theme]

    const small = {
        height: 18,
        fontSize: 12,
        iconWidth: 12
    }

    const medium = {
        height: 24,
        fontSize: 12,
        iconWidth: 16
    }

    const large = {
        height: 30,
        fontSize: 14,
        iconWidth: 18
    }

    const [properties, setProperties] = useState(medium)
    const [fontWeight, setFontWeight] = useState(400)
    const [border, setBorder] = useState('none')
    const [display, setDisplay] = useState('flex')

    useEffect(() => {
        if (props.small) {
            setProperties(small)
        }
        if (props.medium) {
            setProperties(medium);
        }
        if (props.large) {
            setProperties(large)
        }
        if (props.bold) {
            setFontWeight(600)
        }

        if (props.outlined) {
            if (colors) {
                setBorder('solid 1px ' + colors.contrast)
            }
            if (!colors) {
                setBorder('solid 1px ' + ThemeColors.light.contrast)
            }
            if (props.color) {
                setBorder('solid 1px ' + props.color)
            }
        }
        if (props.transparent) {
            setBorder('none')
        }

    }, [props.theme])

    const close = () => {
        setDisplay('none')

        if (props.onClick) {
            props.onClick()
        }
    }

    return (<>
        <style jsx>{`
        .container {
            height:${properties.height}px;
            background-color: ${props.outlined || props.transparent
                        ? 'transparent'
                        : props.color
                        ? props.color
                        : colors
                        ? colors.main
                        : ThemeColors.light.main};;
            color:${props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast};
            font-weight:${fontWeight};
            font-size:${properties.fontSize}px;
            border: ${border};
            padding:0px 8px;
            border-radius:6px;
            display: ${display};
            align-items: center;
        }

        svg {
            width:${properties.iconWidth}px;
            cursor:pointer;
        }
        .iconLeft, .iconRight {
            width:${properties.iconWidth}px;
            filter : ${colors
                        ? colors.invertedFilter
                        : ThemeColors.light.invertedFilter};
        }
        .iconLeft {
            margin-right:8px;
        }
        .iconRight {
            margin-left:8px;
        }

        `}</style>
        <div className='container'>
            {props.iconLeft ? <img className='iconLeft' src={props.iconSrc}></img> : null}
            {children}
            {props.iconRight ? <img className='iconRight' src={props.iconSrc}></img> : null}
            {props.closable ? <svg onClick={close} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path fill={color} d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" /></g></g></svg> : null}
        </div>

    </>)
}

export default Tag