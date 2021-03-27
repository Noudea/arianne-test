import { useEffect, useState, useContext } from 'react'
import gsap from 'gsap'
import ThemeColors from '../themes/ThemeColors'
import ThemeContext from '../contexts/ThemeContext'

const Button = ({ children, ...props }) => {
    const [properties, setProperties] = useState(false)
    const [fontWeight, setFontWeight] = useState(400)
    const [border, setBorder] = useState('none')
    const colors = ThemeColors[useContext(ThemeContext).theme]

    useEffect(() => {
        if (props.xsmall) {
            setProperties(xsmall)
        }
        if (props.small) {
            setProperties(small)
        }
        if (props.medium) {
            setProperties(medium)
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
    }, [colors])

    const xsmall = {
        height: 24,
        padding: '2px 8px',
        fontSize: 12,
        lineHeight: 20,
        iconWidth: 15,
    }

    const small = {
        height: 32,
        padding: '6px 8px',
        fontSize: 14,
        lineHeight: 20,
        iconWidth: 18,
    }

    const medium = {
        height: 40,
        padding: '8px 12px',
        fontSize: 14,
        lineHeight: 20,
        iconWidth: 20,
    }

    const large = {
        height: 48,
        padding: '13px 16px',
        fontSize: 16,
        lineHeight: 22,
        iconWidth: 20,
    }

    const onClick = (event) => {
        let rect = event.target.getBoundingClientRect()
        let x = event.clientX - rect.left
        let y = event.clientY - rect.top
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
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    position: relative;
                    height: ${properties.height}px;
                    background-color: ${props.outlined || props.transparent
                        ? 'transparent'
                        : props.color
                        ? props.color
                        : colors
                        ? colors.main
                        : ThemeColors.light.main};
                    border: ${border};
                    border-radius: 6px;
                    padding: ${properties.padding};
                    font-weight: ${fontWeight};
                    font-size: ${properties.fontSize}px;
                    line-height: ${properties.lineHeight}px;
                    cursor: pointer;
                    outline: none;
                    color: ${props.textColor
                        ? props.textColor
                        : props.color
                        ? props.color
                        : colors
                        ? colors.contrast
                        : ThemeColors.light.contrast};
                    overflow: hidden;
                }
                .button:hover {
                    filter: saturate(150%);
                }
                .contentContainer {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .iconLeft,
                .iconRight {
                    width: ${properties.iconWidth}px;
                    filter: ${colors
                        ? colors.invertedFilter
                        : ThemeColors.light.invertedFilter};
                }
                .iconLeft {
                    margin-right: 8px;
                }
                .iconRight {
                    margin-left: 8px;
                }
            `}</style>
            <div>
                <div className="container">
                    <button
                        className="button"
                        onClick={onClick}
                        type={props.submit ? 'submit' : 'button'}
                    >
                        {props.iconLeft ? (
                            <img className="iconLeft" src={props.iconSrc}></img>
                        ) : null}
                        {children}
                        {props.iconRight ? (
                            <img
                                className="iconRight"
                                src={props.iconSrc}
                            ></img>
                        ) : null}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Button