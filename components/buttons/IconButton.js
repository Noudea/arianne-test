import { useState, useEffect , useContext } from 'react'
import gsap from 'gsap'
import ThemeColors from '../themes/ThemeColors'
import ThemeContext from '../contexts/ThemeContext'


const IconButton = ({ children, ...props }) => {
    const [properties, setProperties] = useState(false)
    const [border, setBorder] = useState('none')
    const [borderRadius, setBorderRadius] = useState('6px')
    const colors = ThemeColors[useContext(ThemeContext).theme]

    useEffect(() => {
        if (props.size ===  'xs') {
            setProperties(xsmall)
        }
        if (props.size ===  'small') {
            setProperties(small)
        }
        if (props.size ===  'md') {
            setProperties(medium)
        }
        if (props.size ===  'lg') {
            setProperties(large)
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
        if (props.rounded) {
            setBorderRadius('50%')
        }

    }, [colors])

    const xsmall = {
        height: 24,
        padding: '4px 6px',
    }

    const small = {
        height: 32,
        padding: '6px 8px',
    }

    const medium = {
        height: 40,
        padding: '8px 10px',
    }

    const large = {
        height: 48,
        padding: '10px 12px',
    }

    const onClick = (event) => {
        let rect = event.target.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        createRipple(x, y, event)
        gsap.to('.ripple', { duration: 1, width: 500, height: 500, opacity: 0 })
        if (props.onClick) {
            props.onClick()
        }

    }

    const createRipple = (x, y, event) => {
        let rippleElement = document.createElement('span')
        rippleElement.classList.add('ripple')
        rippleElement.style.position = 'absolute'
        rippleElement.style.left = x + 'px'
        rippleElement.style.top = y + 'px'
        if(colors) {
            rippleElement.style.background = colors.inverted
        }
        if(!colors) {
            rippleElement.style.background = ThemeColors.light.inverted
        }
        if (props.outlined) {
            rippleElement.style.background = props.color
        }
        rippleElement.style.opacity = 0.5
        rippleElement.style.borderRadius = '50%'
        rippleElement.style.transform = 'translate(-50%, -50%)'
        rippleElement.style.width = '0px'
        rippleElement.style.height = '0px'
        event.target.appendChild(rippleElement)
        setTimeout(function () {
            rippleElement.remove()
        }, 400)
    }

    return (
        <>
            <style jsx>{`
                .button {
                    display:flex;
                    align-items: center;
                    position : relative;
                    width : ${properties.height}px;
                    height: ${properties.height}px;
                    background-color:${props.outlined || props.transparent
                        ? 'transparent'
                        : props.color
                        ? props.color
                        : colors
                        ? colors.main
                        : ThemeColors.light.main};
                    border: ${border};
                    border-radius: ${borderRadius};
                    padding: ${properties.padding};
                    cursor: pointer;
                    outline: none;
                    color: ${props.color
                        ? props.color
                        : colors
                        ? colors.contrast
                        : ThemeColors.light.contrast};
                    overflow:hidden;
                }
                .button:hover {
                    filter: saturate(150%);
                }
                .contentContainer {
                    display:flex;
                    flex-direction:row;
                    align-items: center;
                }
                 .icon {
                    width: ${properties.iconWidth}px;
                    filter : ${colors
                        ? colors.invertedFilter
                        : ThemeColors.light.invertedFilter};
                }
                img {
                    pointer-events: none;
                    cursor: default;
                }

            `}</style>
            <div>
                <div className='container'>
                    <button className='button' onClick={onClick}>
                        {props.iconSrc ? <img className='icon' src={props.iconSrc}></img>  : null}
                        {props.svg ? props.svg : null}
                    </button>
                </div>
            </div>
        </>
    )
}

export default IconButton