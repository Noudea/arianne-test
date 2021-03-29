import { useEffect, useState, useContext } from 'react'
import Button from '../buttons/Button'
import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'
import Container from '../container/Container'
import Flex from '../container/Flex'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
//-----props-----//
//show
//onClose
//custom
//width
//setSize
//okText
//closeText

const Modal = ({ children, ref, ...props }) => {
    const [show, setShow] = useState(props.show)
    const colors = ThemeColors[useContext(ThemeContext).theme]

    useEffect(() => {
        setShow(props.show)
    }, [props.show])

    const handleCloseClick = () => {
        const modal = document.getElementById('modal')
        modal.classList.add('bounce-out')
        console.log(modal)
        setTimeout(() => {
            setShow(false)
            props.onClose()
        }, 300)
    }

    return (
        <>
            <style jsx>{`
                .container {
                    width: ${props.width ? props.width : '600px'};
                    min-height: 200px;
                    max-height: 900px;
                    background-color: red;
                    position: relative;
                    margin: auto;
                    z-index: 100000;
                    background-color: ${colors
                        ? colors.main
                        : ThemeColors.light.main};
                    color: ${colors
                        ? colors.inverted
                        : ThemeColors.light.inverted};
                    border-radius: 8px;
                }
                .buttonContainer {
                    position: absolute;
                    bottom:20px;
                    right:20px;
                    display:flex;
                }
                .buttonContainer:nthChild(1) {
                    margin:5px;
                }
                .xs {
                    width: 400px;
                }
                .sm {
                    width: 600px;
                }
                .md {
                    width: 800px;
                }
                .lg {
                    width: 968px;
                }
                .bounce-in {
                    -webkit-animation-name: bounceIn;
                    animation-name: bounceIn;
                    -webkit-animation-duration: 0.3s;
                    animation-duration: 0.3s;
                    -webkit-animation-timing-function: cubic-bezier(
                        0.68,
                        -0.55,
                        0.27,
                        1.55
                    );
                    animation-timing-function: cubic-bezier(
                        0.68,
                        -0.55,
                        0.27,
                        1.55
                    );
                    -webkit-animation-fill-mode: forwards;
                    animation-fill-mode: forwards;
                }
                .bounce-out {
                    -webkit-animation-name: bounceOut;
                    animation-name: bounceOut;
                    -webkit-animation-duration: 0.3s;
                    animation-duration: 0.3s;
                    -webkit-animation-timing-function: cubic-bezier(
                        0.4,
                        0,
                        1,
                        1
                    );
                    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
                    -webkit-animation-fill-mode: forwards;
                    animation-fill-mode: forwards;
                }
                @-webkit-keyframes bounceIn {
                    0% {
                        opacity: 0;
                        -webkit-transform: scale(0.8);
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        -webkit-transform: scale(1);
                        transform: scale(1);
                    }
                }
                @keyframes bounceIn {
                    0% {
                        opacity: 0;
                        -webkit-transform: scale(0.8);
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        -webkit-transform: scale(1);
                        transform: scale(1);
                    }
                }

                @-webkit-keyframes bounceOut {
                    0% {
                        opacity: 1;
                        -webkit-transform: scale(1);
                        transform: scale(1);
                    }
                    to {
                        opacity: 0;
                        -webkit-transform: scale(0.8);
                        transform: scale(0.8);
                    }
                }
                @keyframes bounceOut {
                    0% {
                        opacity: 1;
                        -webkit-transform: scale(1);
                        transform: scale(1);
                    }
                    to {
                        opacity: 0;
                        -webkit-transform: scale(0.8);
                        transform: scale(0.8);
                    }
                }

                .customCss {
                    ${props.customCss}
                }
            `}</style>

            {show ? (
                <div
                    id="modal"
                    className={'container bounce-in customCss ' + props.size}
                >
                    <Container padding="20px">
                        <Flex
                            flexDirection="column"
                            justifyContent="space-between"
                        >
                            {children}
                        </Flex>
                    </Container>
                    <div className='buttonContainer'>
                        <Button accent onClick={handleCloseClick} >
                            {props.okText ? props.okText : 'Accepter'}
                        </Button>
                        <Button onClick={handleCloseClick}>
                            {props.closeText ? props.closeText : 'Fermer'}
                        </Button>
                    </div>
                </div>
            ) : null}
        </>
    )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody

export default Modal
