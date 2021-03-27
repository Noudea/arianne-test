import { useState , useEffect , useContext } from 'react'
import IconButton from '../components/buttons/IconButton';
import NavContext from '../components/contexts/NavContext';
import ThemeContext from '../components/contexts/ThemeContext';
import Divider from '../components/divider/Divider';
import NavBar from '../components/navbar/NavBar';
import SideNav from '../components/sideNav/SideNav';
import SideNavContainer from '../components/sideNav/SideNavContainer';
import SideNavHeader from '../components/sideNav/SideNavHeader';
import SideNavItem from '../components/sideNav/SideNavItem';
import ThemeColors from '../components/themes/ThemeColors';
import Tooltip from '../components/tooltip/Tooltip';


const SideLayout = ({ children, ...props }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { sideNavOpen, setSideNavOpen } = useContext(NavContext);
    const [navExpand, setNavExpand] = useState(false)
    const [marginLeft, setMarginLeft] = useState(84)
    const [nav1, setNav1] = useState(true)
    const [nav2, setNav2] = useState(false)
    const [nav3, setNav3] = useState(false)
    const colors = ThemeColors[useContext(ThemeContext).theme]


    useEffect(() => {},[navExpand])

    const changetheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const expandNav = () => {
        setSideNavOpen(true)
    }

    const openNav1 = () => {
        expandNav()
        setNav2(false)
        setNav3(false)
        setNav1(true)
    }
    const openNav2 = () => {
        expandNav()
        setNav1(false)
        setNav3(false)
        setNav2(true)
    }
    const openNav3 = () => {
        expandNav()
        setNav1(false)
        setNav2(false)
        setNav3(true)
    }

    return (
        <>
            <style jsx>{`
                .main {
                    margin-left : ${marginLeft}px;
                    background-color : ${colors.background};
                }
                h4 {
                    padding: 0px 20px;
                    margin:10px 0px;
                }
                `}</style>
            <NavBar alignement="vertical">
                <button onClick={changetheme}>CHANGETHEME</button>
                <Tooltip textContent="this is a toolTip">
                    <IconButton
                        transparent
                        medium
                        iconSrc="/svg/book-open.svg"
                        onClick={openNav1}
                    ></IconButton>
                </Tooltip>
                <IconButton
                    transparent
                    medium
                    iconSrc="/svg/cube.svg"
                    onClick={openNav2}
                ></IconButton>
                <IconButton
                    transparent
                    medium
                    iconSrc="/svg/bell.svg"
                    onClick={openNav3}
                ></IconButton>
                <SideNav isOpen={navExpand}  targetedClass='main'>
                    {nav1 ?
                        <SideNavContainer>
                            <SideNavHeader >Guides</SideNavHeader>
                            <SideNavItem href='/guides/intro'  width='100%'>
                                Introduction
                            </SideNavItem>
                            <SideNavItem href='/guides/installNextJs'  width='100%'>
                                Installation pour Next.JS
                            </SideNavItem>
                            <SideNavItem href='/guides/installReact'  width='100%'>
                                Installation pour React
                            </SideNavItem>
                            <SideNavItem href='/guides/theming'  width='100%'>
                                Theming
                            </SideNavItem>
                        </SideNavContainer>
                        : null}
                    {nav2 ?
                    <SideNavContainer>
                            <SideNavHeader >Composants</SideNavHeader>
                            <h4># Général</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNavItem href='/components/loader'  width='100%'>
                                Loader
                            </SideNavItem>
                            <SideNavItem href='/components/tooltip'  width='100%'>
                                ToolTip
                            </SideNavItem>
                            <SideNavItem href='/components/button'  width='100%'>
                                Button
                            </SideNavItem>
                            <SideNavItem href='/components/iconbutton'  width='100%'>
                                IconButton
                            </SideNavItem>
                            <SideNavItem href='/components/divider'  width='100%'>
                                Divider
                            </SideNavItem>
                            <h4># Navigation</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNavItem href='/components/navbar'  width='100%'>
                                NavBar
                            </SideNavItem>
                            <SideNavItem href='/components/sidenav'  width='100%'>
                                SideNav
                            </SideNavItem>
                            <SideNavItem href='/components/dropdown'  width='100%'>
                                DropDown
                            </SideNavItem>
                            <h4># Données</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNavItem href='/components/table'  width='100%'>
                                Table
                            </SideNavItem>
                            <SideNavItem href='/components/liste'  width='100%'>
                                Liste
                            </SideNavItem>
                           <SideNavItem href='/components/avatar'  width='100%'>
                                Avatar
                            </SideNavItem>
                            <SideNavItem href='/components/tag'  width='100%'>
                                Tag
                            </SideNavItem>
                            <h4># Providers</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNavItem href='/components/generalprovider'  width='100%'>
                                General Provider
                            </SideNavItem>
                            <SideNavItem href='/components/themeprovider'  width='100%'>
                                Theme Provider
                            </SideNavItem>
                           <SideNavItem href='/components/navprovider'  width='100%'>
                                Navigation Provider
                            </SideNavItem>
                        </SideNavContainer>
                    : null}
                    {nav3 ? <p>Nav3</p> : null}
                </SideNav>
            </NavBar>
                <main className='main'>{children}</main>
            {/* mettre le footer */}
        </>
    )
}

export default SideLayout
