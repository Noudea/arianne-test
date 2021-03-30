
import ThemeContext from "../contexts/ThemeContext"
import ThemeColors from '../themes/ThemeColors'
import { useContext, useState } from 'react'



// props
// icon
// title
// type : information/success/warning/error
// closable
const Message = ({ children, ...props }) => {

    const colors = ThemeColors[useContext(ThemeContext).theme]
    const [isOpen, setIsOpen] = useState(true)

    const close = () => {
        setIsOpen(false)
    }

    return (<>
        <style jsx>{`
            .messageContainer {
                align-items:center;
                border-radius:8px;
                padding:${props.icon ? '20px 20px 20px 70px' : '20px'};
                color : ${colors ? colors.contrastStrong : '#0f131a'};
                position:relative;
            }

            p{
                margin:0px;
            }
            .iconContainer {
                display:flex;
                align-items:center;
                position:absolute;
                left:20px;
                top:50%;
                transform:translateY(-50%)
            }
            .titleWrapper {
                font-weight:600;
                font-size : 18px;
            }
            .contentContainer {
            }

            .icon {
                width:30px;
            }

            .close {
                width:16px;
                cursor:pointer;
                position:absolute;
                top: 10px;
                right: 10px;
            }
            .information {
                background-color: ${colors ? colors.message.information : '#e9f5fe'};
            }

            .warning {
                background-color: ${colors ? colors.message.warning : '#fff9e6'};
            }

            .error {
                background-color: ${colors ? colors.message.error : '#fde9ef'};
            }

            .success {
                background-color: ${colors ? colors.message.success : '#edfae1'};
            }

            `}</style>

        {isOpen ? <div className={`messageContainer ${props.type ? props.type : null}`}>
            <div className='iconContainer'>
                {props.icon && props.type === 'information' ? <svg className='icon' fill={colors ? colors.messageContrast.information : '#1499ee'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="info"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm-1-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /></g></g></svg> : null}
                {props.icon && props.type === 'success' ? <svg className='icon' fill={colors ? colors.messageContrast.success : '#58b05b'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark-circle-2"><rect width="24" height="24" opacity="0" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></g></g></svg> : null}
                {props.icon && props.type === 'warning' ? <svg className='icon' fill={colors ? colors.messageContrast.warning : '#fec657'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="alert-triangle"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" /><path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zM12 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z" /></g></g></svg> : null}
                {props.icon && props.type === 'error' ? <svg className='icon' fill={colors ? colors.messageContrast.error : '#ef4f43'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="alert-circle"><rect width="24" height="24" opacity="0" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z" /></g></g></svg> : null}
            </div>
            {props.closable ? 
                <svg onClick={close} className='close' fill={colors ? colors.contrast : '#ef4f43'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
            : null}
            <div className='titleWrapper'>{props.title ? <p>{props.title}</p> : null}</div>
            <div className='contentContainer'>
                {children}
            </div>
        </div> : null}
    </>)
}

export default Message