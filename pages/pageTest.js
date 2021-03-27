// import Link from 'next/link'
// import Loader from '../components/loader'
// import { lightTheme, darkTheme, GlobalStyles } from '../themes/ThemeConfig'
// import AuthProvider from '../providers/AuthProviders'
// import { sanitize } from './../services/validatorHelper'
// import { Button, FormButton, LinkButton } from '../components/Buttons'
// import { AudioLoader } from '../components/loader/AudioLoader'
// import { CircleLoader } from '../components/loader/CircleLoader'
// import { SpinningCircles } from '../components/loader/SpinningCircles'
// import Divider from '../components/divider/Divider'
// import Avatar from '../components/avatar/Avatar'
// import Dropdown from '../components/dropdown/DropDown'
// import NewDropdown from '../components/dropdown/NewDropdown'
// import Tag from '../components/tag/Tag'
// import NavBar from '../components/navbar/NavBar'
// import IconButton from '../components/buttons/IconButton'
// import Tooltip from '../components/tooltip/Tooltip'
// import Flex from '../components/flex/Flex'
// import Table from '../components/table/Table'
// import List from '../components/list/List'

// const pageTest = (props) => {
//     console.log(sanitize('test'))

//     const test = () => {
//         console.log('jai bien cliquer')
//     }

//     return (
//         <div className="container">
//             <style jsx>{`
//                 .container {
//                     display: flex;
//                     flex-direction: column;
//                     padding: 80px;
//                 }
//                 .buttonContainer {
//                     display: flex;
//                     flex-direction: column;
//                     padding: 20px;
//                 }
//                 .buttonWrapper {
//                     display: flex;
//                     padding: 20px;
//                 }
//                 .dividerContainer {
//                     display: flex;
//                     flex-direction: column;
//                 }
//                 .avatarWrapper .avatar {
//                     margin-left: 10px;
//                 }

//                 .dark {
//                     background-color: #0f131a;
//                 }

//                 .darkDrop {
//                     height: 500px;
//                     background-color: #0f131a;
//                 }
//             `}</style>
//             <div>
//                 <h1>Loader</h1>
//                 <h2>Default</h2>
//                 <div className="buttonWrapper">
//                     <CircleLoader xsmall fast></CircleLoader>
//                     <CircleLoader small></CircleLoader>
//                     <CircleLoader medium></CircleLoader>
//                     <CircleLoader large></CircleLoader>
//                     <CircleLoader xlarge slow></CircleLoader>
//                     <CircleLoader xlarge thin></CircleLoader>
//                     <CircleLoader xlarge bold fast></CircleLoader>
//                 </div>
//                 <h2>Light Theme</h2>
//                 <div className="buttonWrapper">
//                     <CircleLoader
//                         theme="light"
//                         xsmall
//                         fast
//                         color="#fa3c5f"
//                     ></CircleLoader>
//                     <CircleLoader
//                         theme="light"
//                         small
//                         color="#617eff"
//                     ></CircleLoader>
//                     <CircleLoader
//                         theme="light"
//                         medium
//                         color="#617eff"
//                     ></CircleLoader>
//                     <CircleLoader theme="light" large></CircleLoader>
//                     <CircleLoader
//                         theme="light"
//                         xlarge
//                         color="#fa3c5f"
//                         slow
//                     ></CircleLoader>
//                     <CircleLoader
//                         theme="light"
//                         xlarge
//                         color="#617eff"
//                         thin
//                     ></CircleLoader>
//                     <CircleLoader
//                         theme="light"
//                         xlarge
//                         color="#617eff"
//                         bold
//                         fast
//                     ></CircleLoader>
//                 </div>
//                 <h2>Dark Theme</h2>
//                 <div className="buttonWrapper dark">
//                     <CircleLoader theme="dark" xsmall fast></CircleLoader>
//                     <CircleLoader theme="dark" small></CircleLoader>
//                     <CircleLoader theme="dark" medium></CircleLoader>
//                     <CircleLoader theme="dark" large></CircleLoader>
//                     <CircleLoader theme="dark" xlarge slow></CircleLoader>
//                     <CircleLoader theme="dark" xlarge thin></CircleLoader>
//                     <CircleLoader theme="dark" xlarge bold fast></CircleLoader>
//                 </div>
//                 <h2>Custom</h2>
//                 <div className="buttonWrapper">
//                     <CircleLoader xsmall fast color="#fa3c5f"></CircleLoader>
//                     <CircleLoader small color="#617eff"></CircleLoader>
//                     <CircleLoader medium color="#617eff"></CircleLoader>
//                     <CircleLoader large></CircleLoader>
//                     <CircleLoader xlarge color="#fa3c5f" slow></CircleLoader>
//                     <CircleLoader xlarge color="#617eff" thin></CircleLoader>
//                     <CircleLoader
//                         xlarge
//                         color="#617eff"
//                         bold
//                         fast
//                     ></CircleLoader>
//                 </div>
//             </div>
//             <div>
//                 <h1>ToolTip</h1>
//                 <div className="buttonWrapper">
//                     <Tooltip textContent="this is a toolTip">
//                         <Button medium>ToolTip</Button>
//                     </Tooltip>
//                 </div>
//                 <div className="buttonWrapper dark">
//                     <Tooltip theme="dark" textContent="this is a toolTip">
//                         <Button theme="dark" medium>
//                             ToolTip
//                         </Button>
//                     </Tooltip>
//                 </div>
//                 <div></div>
//             </div>
//             <div>
//                 <h1>Buttons</h1>
//                 <h2>Default Theme</h2>
//                 <div className="buttonContainer">
//                     <div className="buttonWrapper">
//                         <Button xsmall>XSmall</Button>
//                         <Button small>Small</Button>
//                         <Button medium>Medium</Button>
//                         <Button large>Large</Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button xsmall bold>
//                             XSmall bold
//                         </Button>
//                         <Button small bold>
//                             Small bold
//                         </Button>
//                         <Button medium bold>
//                             {' '}
//                             Medium bold
//                         </Button>
//                         <Button large bold>
//                             Large bold
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button xsmall outlined>
//                             XSmall outlined
//                         </Button>
//                         <Button small outlined bold>
//                             Small outlined
//                         </Button>
//                         <Button medium outlined>
//                             {' '}
//                             Medium outlined
//                         </Button>
//                         <Button large outlined submit>
//                             Large outlined
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button xsmall outlined transparent>
//                             XSmall outlined transparent
//                         </Button>
//                         <Button small outlined bold transparent>
//                             Small outlined transparent
//                         </Button>
//                         <Button medium outlined transparent>
//                             {' '}
//                             Medium outlined transparent
//                         </Button>
//                         <Button large outlined submit transparent>
//                             Large outlined transparent
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button
//                             xsmall
//                             bold
//                             iconRight
//                             iconSrc="/svg/bell-outline.svg"
//                         >
//                             XSmall bold IconRight
//                         </Button>
//                         <Button small bold iconRight iconSrc="/svg/bell.svg">
//                             Small bold IconRight
//                         </Button>
//                         <Button medium bold iconRight iconSrc="/svg/heart.svg">
//                             {' '}
//                             Medium bold IconRight
//                         </Button>
//                         <Button
//                             large
//                             bold
//                             iconRight
//                             iconSrc="/svg/sync-outline.svg"
//                             outlined="/svg/chevron-down-outline.svg"
//                         >
//                             Large bold IconRight
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button xsmall bold iconLeft iconSrc="/svg/heart.svg">
//                             XSmall bold IconLeft
//                         </Button>
//                         <Button small bold iconLeft iconSrc="/svg/bell.svg">
//                             Small bold IconLeft
//                         </Button>
//                         <Button
//                             medium
//                             bold
//                             iconLeft
//                             iconSrc="/svg/sync-outline.svg"
//                         >
//                             {' '}
//                             Medium bold IconLeft
//                         </Button>
//                         <Button large bold iconLeft iconSrc="/svg/bell.svg">
//                             Large bold IconLeft
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <h2>Dark Theme</h2>
//                 <div className="buttonContainer dark">
//                     <div className="buttonWrapper">
//                         <Button theme="dark" xsmall>
//                             XSmall
//                         </Button>
//                         <Button theme="dark" small>
//                             Small
//                         </Button>
//                         <Button theme="dark" medium>
//                             Medium
//                         </Button>
//                         <Button theme="dark" large>
//                             Large
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button theme="dark" xsmall bold>
//                             XSmall bold
//                         </Button>
//                         <Button theme="dark" small bold>
//                             Small bold
//                         </Button>
//                         <Button theme="dark" medium bold>
//                             {' '}
//                             Medium bold
//                         </Button>
//                         <Button theme="dark" large bold>
//                             Large bold
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button theme="dark" xsmall outlined>
//                             XSmall outlined
//                         </Button>
//                         <Button theme="dark" small outlined bold>
//                             Small outlined
//                         </Button>
//                         <Button theme="dark" medium outlined>
//                             {' '}
//                             Medium outlined
//                         </Button>
//                         <Button theme="dark" large outlined submit>
//                             Large outlined
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button theme="dark" xsmall outlined transparent>
//                             XSmall outlined transparent
//                         </Button>
//                         <Button theme="dark" small outlined bold transparent>
//                             Small outlined transparent
//                         </Button>
//                         <Button theme="dark" medium outlined transparent>
//                             {' '}
//                             Medium outlined transparent
//                         </Button>
//                         <Button theme="dark" large outlined submit transparent>
//                             Large outlined transparent
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button
//                             theme="dark"
//                             xsmall
//                             bold
//                             iconRight
//                             iconSrc="/svg/bell-outline.svg"
//                         >
//                             XSmall bold IconRight
//                         </Button>
//                         <Button
//                             theme="dark"
//                             small
//                             bold
//                             iconRight
//                             iconSrc="/svg/bell.svg"
//                         >
//                             Small bold IconRight
//                         </Button>
//                         <Button
//                             theme="dark"
//                             medium
//                             bold
//                             iconRight
//                             iconSrc="/svg/heart.svg"
//                         >
//                             {' '}
//                             Medium bold IconRight
//                         </Button>
//                         <Button
//                             theme="dark"
//                             large
//                             bold
//                             iconRight
//                             iconSrc="/svg/sync-outline.svg"
//                             outlined="/svg/chevron-down-outline.svg"
//                         >
//                             Large bold IconRight
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button
//                             theme="dark"
//                             xsmall
//                             bold
//                             iconLeft
//                             iconSrc="/svg/heart.svg"
//                         >
//                             XSmall bold IconLeft
//                         </Button>
//                         <Button
//                             theme="dark"
//                             small
//                             bold
//                             iconLeft
//                             iconSrc="/svg/bell.svg"
//                         >
//                             Small bold IconLeft
//                         </Button>
//                         <Button
//                             theme="dark"
//                             medium
//                             bold
//                             iconLeft
//                             iconSrc="/svg/sync-outline.svg"
//                         >
//                             {' '}
//                             Medium bold IconLeft
//                         </Button>
//                         <Button
//                             theme="dark"
//                             large
//                             bold
//                             iconLeft
//                             iconSrc="/svg/bell.svg"
//                         >
//                             Large bold IconLeft
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <h2>Light Theme</h2>
//                 <div className="buttonContainer">
//                     <div className="buttonWrapper">
//                         <Button theme="light" xsmall>
//                             XSmall
//                         </Button>
//                         <Button theme="light" small>
//                             Small
//                         </Button>
//                         <Button theme="light" medium>
//                             Medium
//                         </Button>
//                         <Button theme="light" large>
//                             Large
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button theme="light" xsmall bold>
//                             XSmall bold
//                         </Button>
//                         <Button theme="light" small bold>
//                             Small bold
//                         </Button>
//                         <Button theme="light" medium bold>
//                             {' '}
//                             Medium bold
//                         </Button>
//                         <Button theme="light" large bold>
//                             Large bold
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button theme="light" xsmall outlined>
//                             XSmall outlined
//                         </Button>
//                         <Button theme="light" small outlined bold>
//                             Small outlined
//                         </Button>
//                         <Button theme="light" medium outlined>
//                             {' '}
//                             Medium outlined
//                         </Button>
//                         <Button theme="light" large outlined submit>
//                             Large outlined
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button theme="light" xsmall outlined transparent>
//                             XSmall outlined transparent
//                         </Button>
//                         <Button theme="light" small outlined bold transparent>
//                             Small outlined transparent
//                         </Button>
//                         <Button theme="light" medium outlined transparent>
//                             {' '}
//                             Medium outlined transparent
//                         </Button>
//                         <Button theme="light" large outlined submit transparent>
//                             Large outlined transparent
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button
//                             theme="light"
//                             xsmall
//                             bold
//                             iconRight
//                             iconSrc="/svg/bell-outline.svg"
//                         >
//                             XSmall bold IconRight
//                         </Button>
//                         <Button
//                             theme="light"
//                             small
//                             bold
//                             iconRight
//                             iconSrc="/svg/bell.svg"
//                         >
//                             Small bold IconRight
//                         </Button>
//                         <Button
//                             theme="light"
//                             medium
//                             bold
//                             iconRight
//                             iconSrc="/svg/heart.svg"
//                         >
//                             {' '}
//                             Medium bold IconRight
//                         </Button>
//                         <Button
//                             theme="light"
//                             large
//                             bold
//                             iconRight
//                             iconSrc="/svg/sync-outline.svg"
//                             outlined="/svg/chevron-down-outline.svg"
//                         >
//                             Large bold IconRight
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button
//                             theme="light"
//                             xsmall
//                             bold
//                             iconLeft
//                             iconSrc="/svg/heart.svg"
//                         >
//                             XSmall bold IconLeft
//                         </Button>
//                         <Button
//                             theme="light"
//                             small
//                             bold
//                             iconLeft
//                             iconSrc="/svg/bell.svg"
//                         >
//                             Small bold IconLeft
//                         </Button>
//                         <Button
//                             theme="light"
//                             medium
//                             bold
//                             iconLeft
//                             iconSrc="/svg/sync-outline.svg"
//                         >
//                             {' '}
//                             Medium bold IconLeft
//                         </Button>
//                         <Button
//                             theme="light"
//                             large
//                             bold
//                             iconLeft
//                             iconSrc="/svg/bell.svg"
//                         >
//                             Large bold IconLeft
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <h2>Customized</h2>
//                 <div className="buttonContainer">
//                     <div className="buttonWrapper">
//                         <Button color="#f7f7fa" xsmall>
//                             XSmall
//                         </Button>
//                         <Button color="#617eff" small>
//                             Small
//                         </Button>
//                         <Button color="black" textColor="white" medium>
//                             Medium
//                         </Button>
//                         <Button color="green" large>
//                             Large
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button color="red" xsmall bold>
//                             XSmall bold
//                         </Button>
//                         <Button color="#f7f7fa" small bold>
//                             Small bold
//                         </Button>
//                         <Button color="blue" medium bold>
//                             {' '}
//                             Medium bold
//                         </Button>
//                         <Button color="#f7f7fa" textColor="#575757" large bold>
//                             Large bold
//                         </Button>
//                     </div>
//                     <div className="buttonWrapper">
//                         <Button color="red" xsmall outlined>
//                             XSmall outlined
//                         </Button>
//                         <Button color="black" small outlined bold>
//                             Small outlined
//                         </Button>
//                         <Button color="blue" medium outlined>
//                             {' '}
//                             Medium outlined
//                         </Button>
//                         <Button color="green" large outlined submit>
//                             Large outlined
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//             <div className="dividerContainer">
//                 <h1>Divider</h1>
//                 <p>Voici un divider a 50%</p>
//                 <Divider width="50%"></Divider>
//                 <p>Voici un divider a 80%</p>
//                 <Divider width="80%"></Divider>
//                 <p>Voici un divider a 100%</p>
//                 <Divider></Divider>
//                 <p>Voici un divider de couleur rouge</p>
//                 <Divider width="100%" color="red"></Divider>
//                 <p>Voici un divider avec une margin de 50px</p>
//                 <Divider margin="50px"></Divider>
//                 <p>Voici un divider rouge bold</p>
//                 <Divider color="red" bold></Divider>
//                 <p>Voici un divider bleue thin</p>
//                 <Divider color="blue" thin></Divider>
//                 <p>Voici un divider rouge avec une height custom</p>
//                 <Divider color="red" thickness="15"></Divider>
//                 <div></div>
//             </div>
//             <div>
//                 <h1>Dropdown</h1>
//                 <div className="buttonContainer">
//                     <h2>Default Theme</h2>
//                     <div className="buttonWrapper">
//                         <NewDropdown textContent="Dropdown" xsmall bold>
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown textContent="Dropdown" small bold>
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown textContent="Dropdown" medium bold>
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown textContent="Dropdown" large bold>
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                     </div>
//                     <div className="buttonWrapper">
//                         <NewDropdown
//                             outlined
//                             textContent="Dropdown"
//                             xsmall
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown outlined textContent="Dropdown" small bold>
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             outlined
//                             textContent="Dropdown"
//                             medium
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown outlined textContent="Dropdown" large bold>
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                     </div>
//                     <div className="buttonWrapper">
//                         <NewDropdown
//                             transparent
//                             textContent="Dropdown"
//                             xsmall
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             transparent
//                             textContent="Dropdown"
//                             small
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             transparent
//                             textContent="Dropdown"
//                             medium
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             transparent
//                             textContent="Dropdown"
//                             large
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                     </div>
//                     <div className="buttonWrapper">
//                         <NewDropdown
//                             hover
//                             textContent="Dropdown hover"
//                             xsmall
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             hover
//                             textContent="Dropdown hover"
//                             small
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             hover
//                             textContent="Dropdown hover"
//                             medium
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             hover
//                             textContent="Dropdown hover"
//                             large
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                     </div>
//                     <h2>Light Theme</h2>
//                     <div className="buttonWrapper">
//                         <NewDropdown
//                             textContent="Dropdown"
//                             theme="light"
//                             xsmall
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             textContent="Dropdown"
//                             theme="light"
//                             small
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             textContent="Dropdown"
//                             theme="light"
//                             medium
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             textContent="Dropdown"
//                             theme="light"
//                             large
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                     </div>
//                     <div className="buttonWrapper">
//                         <NewDropdown
//                             theme="light"
//                             transparent
//                             textContent="Dropdown"
//                             xsmall
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             theme="light"
//                             transparent
//                             textContent="Dropdown"
//                             small
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             theme="light"
//                             transparent
//                             textContent="Dropdown"
//                             medium
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             theme="light"
//                             transparent
//                             textContent="Dropdown"
//                             large
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                         </NewDropdown>
//                     </div>
//                     <h2>Dark Theme</h2>
//                     <div className="darkDrop">
//                         <div className="buttonWrapper">
//                             <NewDropdown
//                                 textContent="Dropdown"
//                                 theme="dark"
//                                 xsmall
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 textContent="Dropdown"
//                                 theme="dark"
//                                 small
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 textContent="Dropdown"
//                                 theme="dark"
//                                 medium
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 textContent="Dropdown"
//                                 theme="dark"
//                                 large
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations{' '}
//                                 </p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                             </NewDropdown>
//                         </div>
//                         <div className="buttonWrapper">
//                             <NewDropdown
//                                 textContent="Dropdown"
//                                 theme="dark"
//                                 outlined
//                                 xsmall
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 textContent="Dropdown"
//                                 theme="dark"
//                                 outlined
//                                 small
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 textContent="Dropdown"
//                                 theme="dark"
//                                 outlined
//                                 medium
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 textContent="Dropdown"
//                                 theme="dark"
//                                 outlined
//                                 large
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations{' '}
//                                 </p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                                 <p>Salutation</p>
//                                 <p>Hello</p>
//                             </NewDropdown>
//                         </div>
//                         <div className="buttonWrapper">
//                             <NewDropdown
//                                 theme="dark"
//                                 transparent
//                                 textContent="Dropdown"
//                                 xsmall
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 theme="dark"
//                                 transparent
//                                 textContent="Dropdown"
//                                 small
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 theme="dark"
//                                 transparent
//                                 textContent="Dropdown"
//                                 medium
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                             </NewDropdown>
//                             <NewDropdown
//                                 theme="dark"
//                                 transparent
//                                 textContent="Dropdown"
//                                 large
//                                 bold
//                             >
//                                 <p>Salutation Salutation</p>
//                                 <p>Hello</p>
//                                 <p>
//                                     Salutation Salutation Salutation Salutations
//                                 </p>
//                             </NewDropdown>
//                         </div>
//                     </div>
//                     <h2>Custom</h2>
//                     <div className="buttonWrapper">
//                         <NewDropdown
//                             textContent="Dropdown"
//                             textColor="white"
//                             color="blue"
//                             xsmall
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                             <p>Hello</p>
//                             <p>Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation</p>
//                             <p>Hello</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             textContent="Dropdown"
//                             textColor="blue"
//                             color="blue"
//                             outlined
//                             small
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                             <p>Hello</p>
//                             <p>Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation</p>
//                             <p>Hello</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             textContent="Dropdown"
//                             color="green"
//                             textColor="white"
//                             medium
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                             <p>Hello</p>
//                             <p>Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation</p>
//                             <p>Hello</p>
//                         </NewDropdown>
//                         <NewDropdown
//                             textContent="Dropdown"
//                             color="red"
//                             textColor="white"
//                             large
//                             bold
//                         >
//                             <p>Salutation Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation Salutation Salutation Salutations</p>
//                             <p>Hello</p>
//                             <p>Salutation</p>
//                             <p>Hello</p>
//                             <p>Salutation</p>
//                             <p>Hello</p>
//                         </NewDropdown>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <h1>Avatar</h1>
//                 <div className="avatarWrapper">
//                     <Avatar src="photo-nicolas.jpg" alt="NO" xsmall></Avatar>
//                     <Avatar src="photo-nicolas.jpg" alt="NO" small></Avatar>
//                     <Avatar src="photo-nicolas.jpg" alt="NO" medium></Avatar>
//                     <Avatar src="photo-nicolas.jpg" alt="NO" large></Avatar>
//                     <Avatar src="photo-nicolas.jpg" alt="NO" xlarge></Avatar>
//                     <Avatar
//                         src="photo-nicolas.jpg"
//                         alt="NO"
//                         square
//                         xsmall
//                     ></Avatar>
//                     <Avatar
//                         src="photo-nicolas.jpg"
//                         alt="NO"
//                         square
//                         small
//                     ></Avatar>
//                     <Avatar
//                         src="photo-nicolas.jpg"
//                         alt="NO"
//                         square
//                         medium
//                     ></Avatar>
//                     <Avatar
//                         src="photo-nicolas.jpg"
//                         alt="NO"
//                         square
//                         large
//                     ></Avatar>
//                     <Avatar
//                         src="photo-nicolas.jpg"
//                         alt="NO"
//                         square
//                         xlarge
//                     ></Avatar>
//                 </div>
//             </div>
//             <div>
//                 <h1>Tag</h1>
//                 <h2>Default and light theme</h2>
//                 <div className="buttonWrapper">
//                     <Tag small>small Tag</Tag>
//                     <Tag small outlined>
//                         small Tag
//                     </Tag>
//                     <Tag medium>Medium Tag</Tag>
//                     <Tag large>Large Tag</Tag>
//                     <Tag large bold>
//                         Large bold Tag
//                     </Tag>
//                     <Tag large bold outlined>
//                         outlined
//                     </Tag>
//                     <Tag large>
//                         <a href="#">Link</a>
//                     </Tag>
//                 </div>
//                 <h2>Closable</h2>
//                 <div className="buttonWrapper">
//                     <Tag closable small>
//                         small Tag
//                     </Tag>
//                     <Tag closable small outlined>
//                         small Tag
//                     </Tag>
//                     <Tag medium closable>
//                         Medium Tag
//                     </Tag>
//                     <Tag closable large>
//                         Large Tag
//                     </Tag>
//                 </div>
//                 <h2>With Icons</h2>
//                 <div className="buttonWrapper">
//                     <Tag iconSrc="/svg/heart.svg" iconLeft small>
//                         small Tag
//                     </Tag>
//                     <Tag iconSrc="/svg/bell.svg" iconRight small outlined>
//                         small Tag
//                     </Tag>
//                     <Tag iconSrc="/svg/heart.svg" closable iconRight medium>
//                         Medium Tag
//                     </Tag>
//                     <Tag iconSrc="/svg/bell.svg" iconLeft large>
//                         Large Tag
//                     </Tag>
//                 </div>
//                 <h2>dark theme</h2>
//                 <div className="buttonWrapper dark">
//                     <Tag theme="dark" small>
//                         small Tag
//                     </Tag>
//                     <Tag theme="dark" medium>
//                         Medium Tag
//                     </Tag>
//                     <Tag theme="dark" large>
//                         Large Tag
//                     </Tag>
//                     <Tag theme="dark" large bold>
//                         Large bold Tag
//                     </Tag>
//                     <Tag theme="dark" large bold outlined>
//                         Large bold Tag
//                     </Tag>
//                     <Tag theme="dark" large>
//                         <a href="#">Link</a>
//                     </Tag>
//                 </div>
//                 <h2>Closable</h2>
//                 <div className="buttonWrapper dark">
//                     <Tag theme="dark" closable small>
//                         small Tag
//                     </Tag>
//                     <Tag theme="dark" closable small outlined>
//                         small Tag
//                     </Tag>
//                     <Tag theme="dark" medium closable>
//                         Medium Tag
//                     </Tag>
//                     <Tag theme="dark" closable large>
//                         Large Tag
//                     </Tag>
//                 </div>
//                 <h2>With Icons</h2>
//                 <div className="buttonWrapper dark">
//                     <Tag theme="dark" iconSrc="/svg/bell.svg" iconLeft small>
//                         small Tag
//                     </Tag>
//                     <Tag
//                         theme="dark"
//                         iconSrc="/svg/sync-outline.svg"
//                         iconRight
//                         small
//                         outlined
//                     >
//                         small Tag
//                     </Tag>
//                     <Tag
//                         theme="dark"
//                         iconSrc="/svg/heart.svg"
//                         closable
//                         iconRight
//                         medium
//                     >
//                         Medium Tag
//                     </Tag>
//                     <Tag theme="dark" iconSrc="/svg/bell.svg" iconLeft large>
//                         Large Tag
//                     </Tag>
//                 </div>
//                 <h2>Custom</h2>
//                 <div className="buttonWrapper">
//                     <Tag small color="green" bold>
//                         small Tag
//                     </Tag>
//                     <Tag small color="red" outlined>
//                         small Tag
//                     </Tag>
//                     <Tag
//                         color="red"
//                         textColor="white"
//                         iconSrc="/svg/heart.svg"
//                         closable
//                         iconRight
//                         medium
//                     >
//                         Medium Tag
//                     </Tag>
//                     <Tag iconSrc="/svg/bell.svg" iconLeft large>
//                         Large Tag
//                     </Tag>
//                 </div>
//             </div>
//             <div>
//                 <h1>Icons</h1>
//                 <h2>Default and light theme</h2>
//                 <div className="buttonWrapper">
//                     <IconButton
//                         xsmall
//                         bold
//                         iconSrc="/svg/bell-outline.svg"
//                     ></IconButton>
//                     <IconButton small bold iconSrc="/svg/bell.svg"></IconButton>
//                     <IconButton
//                         medium
//                         bold
//                         iconSrc="/svg/heart.svg"
//                     ></IconButton>
//                     <IconButton
//                         large
//                         bold
//                         iconSrc="/svg/sync-outline.svg"
//                         outlined="/svg/chevron-down-outline.svg"
//                     >
//                         Large bold IconRight
//                     </IconButton>
//                 </div>
//                 <div className="buttonWrapper">
//                     <IconButton
//                         rounded
//                         xsmall
//                         bold
//                         iconSrc="/svg/bell-outline.svg"
//                     ></IconButton>
//                     <IconButton
//                         rounded
//                         small
//                         bold
//                         iconSrc="/svg/bell.svg"
//                     ></IconButton>
//                     <IconButton
//                         rounded
//                         medium
//                         bold
//                         iconSrc="/svg/heart.svg"
//                     ></IconButton>
//                     <IconButton
//                         rounded
//                         large
//                         bold
//                         iconSrc="/svg/sync-outline.svg"
//                         outlined="/svg/chevron-down-outline.svg"
//                     >
//                         Large bold IconRight
//                     </IconButton>
//                 </div>
//                 <h2>Dark theme</h2>
//                 <div className="buttonWrapper dark">
//                     <IconButton
//                         theme="dark"
//                         xsmall
//                         rounded
//                         iconSrc="/svg/heart.svg"
//                     ></IconButton>
//                     <IconButton
//                         theme="dark"
//                         small
//                         iconSrc="/svg/bell.svg"
//                     ></IconButton>
//                     <IconButton
//                         theme="dark"
//                         medium
//                         iconSrc="/svg/sync-outline.svg"
//                     ></IconButton>
//                     <IconButton
//                         theme="dark"
//                         large
//                         iconSrc="/svg/bell.svg"
//                     ></IconButton>
//                 </div>
//                 <div className="buttonWrapper dark">
//                     <IconButton
//                         rounded
//                         transparent
//                         theme="dark"
//                         xsmall
//                         bold
//                         rounded
//                         iconSrc="/svg/heart.svg"
//                     ></IconButton>
//                     <IconButton
//                         rounded
//                         transparent
//                         theme="dark"
//                         small
//                         bold
//                         iconSrc="/svg/bell.svg"
//                     ></IconButton>
//                     <IconButton
//                         rounded
//                         transparent
//                         theme="dark"
//                         medium
//                         bold
//                         iconSrc="/svg/sync-outline.svg"
//                     ></IconButton>
//                     <IconButton
//                         rounded
//                         transparent
//                         theme="dark"
//                         large
//                         bold
//                         iconSrc="/svg/bell.svg"
//                     ></IconButton>
//                 </div>
//             </div>
//             <Flex flexDirection="column" >
//                 <p>dalut</p>
//                 <p>sdqsdqsdqs</p>
//                 <p>dqsdqs</p>
//             </Flex>
//             <div>
//                 <Table></Table>
//             </div>
//             <div className='buttonWrapper'>
//                 <List title='My List' xsmall searchable data={ ['Jamessssss je mange', 'John', 'Paul', 'Ringo', 'George']}></List>
//             </div>
//             <div className='buttonWrapper'>
//                 <List title='My List' small searchable data={ ['James je mange', 'John', 'Paul', 'Ringo', 'George']}></List>
//             </div>
//             <div className='buttonWrapper'>
//                 <List title='My List' medium searchable data={ ['James je mange', 'John', 'Paul', 'Ringo', 'George']}></List>
//             </div>
//             <div className='buttonWrapper'>
//                 <List title='My List' large searchable data={ ['James je mange', 'John', 'Paul', 'Ringo', 'George']}></List>
//             </div>

//             <div className='buttonWrapper'>
//                 <List title='My List ordered' small ordered searchable data={ ['James je mange', 'John', 'Paul', 'Ringo', 'George']}></List>
//             </div>
//             <div className='buttonWrapper dark'>
//                 <List theme='dark' title='My List' medium searchable data={ ['James je mange', 'John', 'Paul', 'Ringo', 'George']}></List>
//             </div>
//             <div className='buttonWrapper dark'>
//                 <List theme='dark' title='My List ordered' large ordered searchable data={ ['James je mange', 'John', 'Paul', 'Ringo', 'George']}></List>
//             </div>
//         </div>
//     )
// }

// export default pageTest
