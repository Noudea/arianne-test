import { useState , useEffect , useContext } from 'react'
import IconButton from '../components/buttons/IconButton';
import NavContext from '../components/contexts/NavContext';
import ThemeContext from '../components/contexts/ThemeContext';
import Divider from '../components/divider/Divider';
import NavBar from '../components/navbar/NavBar';
import SideNav from '../components/sideNav/SideNav';
import ThemeColors from '../components/themes/ThemeColors';
import Tooltip from '../components/tooltip/Tooltip';
import GlobalStyle from '../components/themes/GlobalStyle'
import LightDarkSwitch from '../components/switch/LightDarkSwitch';
import SideNavDropDown from '../components/sideNav/SideNavDropDown';

const SideLayout = ({ children, ...props }) => {
    const { sideNavOpen, setSideNavOpen } = useContext(NavContext);
    const [navExpand, setNavExpand] = useState(false)
    const [marginLeft, setMarginLeft] = useState(84)
    const [nav1, setNav1] = useState(true)
    const [nav2, setNav2] = useState(false)
    const [nav3, setNav3] = useState(false)
    const colors = ThemeColors[useContext(ThemeContext).theme]


    useEffect(() => {},[navExpand])

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
                }
                h4 {
                    padding: 0px 20px;
                    margin:10px 0px;
                }
                `}</style>
            <NavBar alignement="vertical">
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
                <LightDarkSwitch color='red' outlined medium ></LightDarkSwitch>
                <SideNav isOpen={navExpand}  targetedClass='main'>
                    {nav1 ?
                        <SideNav.Container>
                            <SideNav.Header >Guides</SideNav.Header>
                            <SideNav.Item href='/guides/intro'  width='100%'>
                                Introduction
                            </SideNav.Item>
                            <SideNav.Item href='/guides/installNextJs'  width='100%'>
                                Installation pour Next.JS
                            </SideNav.Item>
                            <SideNav.Item href='/guides/installReact'  width='100%'>
                                Installation pour React
                            </SideNav.Item>
                            <SideNav.Item href='/guides/theming'  width='100%'>
                                Theming
                            </SideNav.Item>
                        </SideNav.Container>
                        : null}
                    {nav2 ?
                    <SideNav.Container>
                            <SideNav.Header >Composants</SideNav.Header>
                            <h4># Général</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNav.Item href='/components/loader'  width='100%'>
                                Loader
                            </SideNav.Item>
                            <SideNav.Item href='/components/tooltip'  width='100%'>
                                ToolTip
                            </SideNav.Item>
                            <SideNavDropDown textContent='Button' width='100%'>
                                <SideNav.Item href='/components/button'  width='100%'>
                                    Button
                                </SideNav.Item>
                                <SideNav.Item href='/components/iconbutton'  width='100%'>
                                    IconButton
                                </SideNav.Item>
                            </SideNavDropDown>
                            <SideNav.Item href='/components/divider'  width='100%'>
                                Divider
                            </SideNav.Item>
                            <h4># Navigation</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNav.Item href='/components/navbar'  width='100%'>
                                NavBar
                            </SideNav.Item>
                            <SideNav.Item href='/components/sidenav'  width='100%'>
                                SideNav
                            </SideNav.Item>
                            <SideNav.Item href='/components/dropdown'  width='100%'>
                                DropDown
                            </SideNav.Item>
                            <h4># Données</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNav.Item href='/components/table'  width='100%'>
                                Table
                            </SideNav.Item>
                            <SideNav.Item href='/components/liste'  width='100%'>
                                Liste
                            </SideNav.Item>
                           <SideNav.Item href='/components/avatar'  width='100%'>
                                Avatar
                            </SideNav.Item>
                            <SideNav.Item href='/components/tag'  width='100%'>
                                Tag
                            </SideNav.Item>
                            <h4># Providers</h4>
                            <Divider margin='5' thin width='85%'></Divider>
                            <SideNav.Item href='/components/generalprovider'  width='100%'>
                                General Provider
                            </SideNav.Item>
                            <SideNav.Item href='/components/themeprovider'  width='100%'>
                                Theme Provider
                            </SideNav.Item>
                           <SideNav.Item href='/components/navprovider'  width='100%'>
                                Navigation Provider
                            </SideNav.Item>
                        </SideNav.Container>
                    : null}
                    {nav3 ? <p>Nav3</p> : null}
                </SideNav>
            </NavBar>
                <GlobalStyle colors = {colors}/>
                <main className='main'>{children}</main>
            {/* mettre le footer */}
        </>
    )
}

export default SideLayout
