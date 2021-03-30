import { useState, useEffect, useContext } from 'react'
import gsap from 'gsap'
import ThemeColors from '../themes/ThemeColors'
import ThemeContext from '../contexts/ThemeContext'

const LightDarkSwitch = ({ children, ...props }) => {
    
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

    
    const [properties, setProperties] = useState(medium)
    const [border, setBorder] = useState('none')
    const [borderRadius, setBorderRadius] = useState('6px')
    const colors = ThemeColors[useContext(ThemeContext).theme]

    const { theme, setTheme } = useContext(ThemeContext)

    const changetheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            localStorage.setItem('Ariannetheme','dark')
        } else {
            setTheme('light')
            localStorage.setItem('Ariannetheme', 'light')
        }
    }

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

    const onClick = (event) => {
        let rect = event.target.getBoundingClientRect()
        let x = event.clientX - rect.left
        let y = event.clientY - rect.top
        createRipple(x, y, event)
        gsap.to('.ripple', { duration: 1, width: 500, height: 500, opacity: 0 })
        changetheme()
    }

    const createRipple = (x, y, event) => {
        let rippleElement = document.createElement('span')
        rippleElement.classList.add('ripple')
        rippleElement.style.position = 'absolute'
        rippleElement.style.left = x + 'px'
        rippleElement.style.top = y + 'px'
        if (colors) {
            rippleElement.style.background = colors.main
        }
        if (!colors) {
            rippleElement.style.background = ThemeColors.light.main
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
                    align-items: center;
                    position: relative;
                    width: ${properties.height}px;
                    height: ${properties.height}px;
                    background-color: ${props.outlined || props.transparent
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
                svg {
                    width: ${properties.iconWidth}px;
                    pointer-events: none;
                    cursor: default;
                }
            `}</style>
            <div>
                <div className="container">
                    <button className="button" onClick={onClick}>
                        {theme === 'light' ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={props.color ? props.color : colors.contrastStrong}
                            >
                                <g data-name="Layer 2">
                                    <g data-name="moon">
                                        <rect
                                            width="24"
                                            height="24"
                                            opacity="0"
                                        />
                                        <path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z" />
                                    </g>
                                </g>
                            </svg>
                        ) : null}
                        {theme === 'dark' ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={props.color ? props.color : colors.contrastStrong}
                            >
                                <g data-name="Layer 2">
                                    <g data-name="sun">
                                        <rect
                                            width="24"
                                            height="24"
                                            transform="rotate(180 12 12)"
                                            opacity="0"
                                        />
                                        <path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z" />
                                        <path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
                                        <path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z" />
                                        <path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z" />
                                        <path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z" />
                                        <path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z" />
                                        <path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z" />
                                        <path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z" />
                                        <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
                                    </g>
                                </g>
                            </svg>
                        ) : null}
                    </button>
                </div>
            </div>
        </>
    )
}

export default LightDarkSwitch
