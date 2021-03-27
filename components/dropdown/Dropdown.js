import { useState, useEffect, useContext } from 'react'
import gsap from 'gsap'
import ThemeColors from '../themes/ThemeColors'
import ThemeContext from '../contexts/ThemeContext'

const Dropdown = ({ children, ...props }) => {
    const colors = ThemeColors[useContext(ThemeContext).theme]
    const [properties, setProperties] = useState(false)
    const [fontWeight, setFontWeight] = useState(400)
    const [border, setBorder] = useState('none')
    const [isOpen, setIsOpen] = useState(false)
    const [boxShadow, setBoxShadow] = useState(
        '0 0 10px rgb(0 0 0 / 6%), 0 4px 4px rgb(0 0 0 / 12%)'
    )

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
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }

        if (props.onClick) {
            props.onClick()
        }
    }

    const onMouseEnter = () => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }

    const onMouseLeave = () => {
        if (isOpen) {
            setIsOpen(false)
        }
    }

    const createRipple = (x, y, event) => {
        let rippleElement = document.createElement('span')
        rippleElement.classList.add('ripple')
        rippleElement.style.position = 'absolute'
        rippleElement.style.left = x + 'px'
        rippleElement.style.top = y + 'px'
        if (colors) {
            rippleElement.style.background = colors.inverted
        }
        if (!colors) {
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
                button {
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
                button:hover {
                    filter: saturate(150%);
                }

                .contentContainer {
                    position: absolute;
                    box-shadow: ${boxShadow};
                    border-radius: 6px;
                    z-index: 1;
                    margin: 0;
                    list-style: none;
                    font-size: 14px;
                    text-align: left;
                    background-color: #fff;
                    padding: 6px 6px;
                }
                svg {
                    width: ${properties.iconWidth}px;
                    margin-left: 8px;
                }
            `}</style>
            <div>
                {props.hover ? (
                    <div
                        className="container"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <button>
                            {props.textContent}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g data-name="Layer 2">
                                    <g data-name="chevron-down">
                                        <path
                                            fill={
                                                props.textColor
                                                    ? props.textColor
                                                    : props.color
                                                    ? props.color
                                                    : colors
                                                    ? colors.contrast
                                                    : ThemeColors.light.contrast
                                            }
                                            d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <div className="contentWrapper">
                            {isOpen ? (
                                <div className="contentContainer">
                                    {children}
                                </div>
                            ) : null}
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <button onClick={onClick}>
                            {props.textContent}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g data-name="Layer 2">
                                    <g data-name="chevron-down">
                                        <path
                                            fill={
                                                props.textColor
                                                    ? props.textColor
                                                    : props.color
                                                    ? props.color
                                                    : colors
                                                    ? colors.contrast
                                                    : ThemeColors.light.contrast
                                            }
                                            d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <div className="contentWrapper">
                            {isOpen ? (
                                <div className="contentContainer">
                                    {children}
                                </div>
                            ) : null}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default Dropdown
