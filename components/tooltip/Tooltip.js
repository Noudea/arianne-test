import { useState, useEffect , useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'

const Tooltip = ({ children, ...props }) => {
    const [display, setDisplay] = useState('none')
    const colors = ThemeColors[useContext(ThemeContext).theme]

    useEffect(() => {

    }, [colors])

    const onMouseEnter = () => {
        setDisplay('')
    }

    const onMouseLeave = () => {
        setDisplay('none')
    }

    return (
        <>
            <style jsx>{`
                .container {
                    position: relative;
                }
                .tooltipContainer {
                    display: flex;
                    align-items: center;
                    max-width: 250px;
                    position: absolute;
                    left: 110%;
                    top: 25%;
                    height: 20px;
                    background-color: ${colors ? colors.contrastStrong : ThemeColors.dark.contrastStrong};
                    white-space: nowrap;
                    overflow-wrap: break-word;
                    padding: 5px;
                    border-radius: 3px;
                    color:${colors ? colors.main : ThemeColors.dark.main};
                    font-size:12px;
                    z-index:9999;
                }
                .tooltiparrow {
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    -webkit-font-smoothing: antialiased;
                    pointer-events: unset;
                    box-sizing: border-box;
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-color: transparent;
                    border-style: solid;
                    left: -6px;
                    margin-top: -6px;
                    border-width: 6px 6px 6px 0;
                    border-right-color: ${colors ? colors.contrastStrong : ThemeColors.dark.contrastStrong};
                    top: 50%;
                    z-index:9999;
                }
                .tool {
                    display:flex;
                }
                .none {
                    display: none;
                }
            `}</style>
            <div className='tool'>
            <div onMouseEnter={onMouseEnter}   onMouseLeave={onMouseLeave} className="container">
                <div>{children}</div>
                <div className={"tooltipContainer "+display}>
                    <div className="tooltiparrow"></div>
                    <div className="tooltip">{props.textContent}</div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Tooltip
