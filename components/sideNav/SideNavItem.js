import Link from 'next/link'
import { useEffect, useState , useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'

const SideNavItem = ({ children, ...props }) => {
    const colors = ThemeColors[useContext(ThemeContext).theme]

    useEffect(() => {

        if(props.color) {
            setColor(props.color)
        }
        
    }, [colors])


    return (<div>
        <style jsx>{`
            .navItemContainer {
                width:${props.width};
                color:${props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast};
                list-style: none;
                box-sizing: border-box;
                background-color: transparent;
                padding: 8px 12px;
                font-size: 14px;
                line-height: 1.42857143;
                display: block;
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
            .navItemContainer:hover  {
                background-color:${colors ? colors.background : ThemeColors.light.background};
            }
            
            `}</style>                           
        <Link href={props.href}>
            <div className='navItemContainer'><a>{children}</a></div>
        </Link>
    </div>)
}

export default SideNavItem