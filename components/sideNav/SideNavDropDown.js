import { useEffect, useState, useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'

const SideNavDropDown = ({ children, ...props }) => {
    const colors = ThemeColors[useContext(ThemeContext).theme]
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {}, [colors])

    const onClick = () => {
        if (isOpen) {
            setIsOpen(false)
        }
        if (!isOpen) {
            setIsOpen(true)
        }
    }

    return (
        <div>
            <style jsx>{`
                .navDropDownContainer {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: ${props.width};
                    color: ${props.color
                        ? props.color
                        : colors
                        ? colors.contrast
                        : ThemeColors.light.contrast};
                    list-style: none;
                    box-sizing: border-box;
                    background-color: transparent;
                    padding: 8px 12px;
                    font-size: 14px;
                    line-height: 1.42857143;
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: 400;
                    transition: none;
                    padding-left: 20px;
                    outline: none;
                    text-decoration: none;
                    border-radius: 6px;
                }
                .children {
                    padding: 0px 10px;
                }
                .none {
                    display: none;
                }
                .navDropDownContainer:hover {
                    background-color: ${colors
                        ? colors.background
                        : ThemeColors.light.background};
                }
                svg {
                    width: 18px;
                }
            `}</style>
            <div onClick={onClick} className="navDropDownContainer">
                <div>{props.textContent}</div>
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={
                            props.color
                                ? props.color
                                : colors
                                ? colors.contrast
                                : ThemeColors.light.contrast
                        }
                    >
                        <g data-name="Layer 2">
                            <g data-name="chevron-down">
                                <rect width="24" height="24" opacity="0" />
                                <path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z" />
                            </g>
                        </g>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={
                            props.color
                                ? props.color
                                : colors
                                ? colors.contrast
                                : ThemeColors.light.contrast
                        }
                    >
                        <g data-name="Layer 2">
                            <g data-name="chevron-right">
                                <rect
                                    width="24"
                                    height="24"
                                    transform="rotate(-90 12 12)"
                                    opacity="0"
                                />
                                <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" />
                            </g>
                        </g>
                    </svg>
                )}
            </div>
            {isOpen ? <div className="children">{children}</div> : null}
        </div>
    )
}

export default SideNavDropDown
