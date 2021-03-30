import { useState, useEffect, useContext } from 'react'
import NavContext from '../contexts/NavContext'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'
import SideNavContainer from './SideNavContainer'
import SideNavDropDown from './SideNavDropDown'
import SideNavHeader from './SideNavHeader'
import SideNavItem from './SideNavItem'

const SideNav = ({ children, ...props }) => {
    // const [isOpen, setIsOpen] = useState(false)
    const { sideNavOpen, setSideNavOpen } = useContext(NavContext);
    const [width, setWidth] = useState(260)
    const colors = ThemeColors[useContext(ThemeContext).theme]

    // useEffect(() => {
    //     setIsOpen(props.isOpen)
    //     console.log('isopen',isOpen)
    //     if (isOpen) {
    //         setWidth(260)
    //         Array.from(
    //             document.getElementsByTagName(props.targetedClass)
    //         )[0].style.marginLeft = '324px'
    //     } else {
    //         setWidth(8)
    //         Array.from(
    //             document.getElementsByTagName(props.targetedClass)
    //         )[0].style.marginLeft = '84px'
    //     }
    // }, [colors])

    useEffect(() => {
        if (sideNavOpen) {
            setWidth(260)
            Array.from(
                document.getElementsByTagName(props.targetedClass)
            )[0].style.marginLeft = '324px'
        } else {
            setWidth(8)
            Array.from(
                document.getElementsByTagName(props.targetedClass)
            )[0].style.marginLeft = '84px'
        }
    }, [colors,sideNavOpen])

    const toggleOpen = () => {
        if (sideNavOpen) {
            setSideNavOpen(false)
            setWidth(8)
            Array.from(
                document.getElementsByTagName(props.targetedClass)
            )[0].style.marginLeft = '84px'
        }
        if (!sideNavOpen) {
            setSideNavOpen(true)
            setWidth(260)
            Array.from(
                document.getElementsByTagName(props.targetedClass)
            )[0].style.marginLeft = '324px'
        }
    }

    // const toggleOpen = () => {
    //     if (isOpen) {
    //         setIsOpen(false)
    //         setWidth(8)
    //         Array.from(
    //             document.getElementsByTagName(props.targetedClass)
    //         )[0].style.marginLeft = '84px'
    //     }
    //     if (!isOpen) {
    //         setIsOpen(true)
    //         setWidth(260)
    //         Array.from(
    //             document.getElementsByTagName(props.targetedClass)
    //         )[0].style.marginLeft = '324px'
    //     }
    // }

    return (
        <>
            <style jsx>{`
                .sideNavContainer {
                    width: ${width}px;
                    height: 100%;
                    position: absolute;
                    background-color: ${props.color
                        ? props.color
                        : colors
                        ? colors.main
                        : ThemeColors.light.main};
                    left: 100%;
                    padding: 0 10px;
                    z-index: 9998;
                }

                svg {
                    width: 50px;
                    height: 50px;
                }
                .buttonContainer {
                    position: absolute;
                    right: -12px;
                    top: 20px;
                }
                .contentContainer {
                    padding: 0 10px;
                }
                .button {
                    display: flex;
                    align-items: center;
                    position: relative;
                    width: 24px;
                    height: 24px;
                    background-color: ${colors
                        ? colors.contrastStrong
                        : ThemeColors.light.contrastStrong};
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    outline: none;
                    color: ${colors ? colors.main : ThemeColors.light.main};
                    overflow: hidden;
                    padding: 3px;
                }
            `}</style>
            <div className="sideNavContainer">
                <div className="buttonContainer">
                    {sideNavOpen ? (
                        <div className="container">
                            <button className="button" onClick={toggleOpen}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g data-name="Layer 2">
                                        <g data-name="chevron-left">
                                            <rect
                                                transform="rotate(90 12 12)"
                                                opacity="0"
                                            />
                                            <path
                                                fill={
                                                    colors
                                                        ? colors.main
                                                        : ThemeColors.light.main
                                                }
                                                d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <div className="container">
                            <button className="button" onClick={toggleOpen}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g data-name="Layer 2">
                                        <g data-name="chevron-right">
                                            <rect
                                                width="24"
                                                height="24"
                                                transform="rotate(-90 12 12)"
                                                opacity="0"
                                            />
                                            <path
                                                fill={
                                                    colors
                                                        ? colors.main
                                                        : ThemeColors.light.main
                                                }
                                                d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
                {sideNavOpen ? <>{children}</> : null}
            </div>
        </>
    )
}


SideNav.Container = SideNavContainer
SideNav.Dropdown = SideNavDropDown
SideNav.Header = SideNavHeader
SideNav.Item = SideNavItem

export default SideNav
