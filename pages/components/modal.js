import Modal from "../../components/modal/Modal"
import Button from '../../components/buttons/Button'
import { useState } from 'react'
import List from "../../components/list/List"
import Message from "../../components/message/Message"
import Notification from "../../components/notifications/Notification"

const modal = () => {
    const [show, setShow] = useState(false)
    const [notification,setNotification] = useState(false)


    const showNotification = () => {
        setNotification(true)
    }


    const showModal = () => {
        setShow(true)
    }

    const onClose = () => {
        setShow(false)
    }
    const onAccept = () => {
        setShow(false)
    }

    return (<>
        <style jsx>{`
        p {margin:0px;}

        `}</style>
        {/* <Notification isOpen={notification}></Notification>
        <Notification isOpen={true}></Notification> */}
        <Button onClick={showNotification} onClose={showNotification} medium>Open Notification</Button>
        <Button  onClick={showModal} onClose={showModal} medium>Open Modal</Button>
        <Modal backdrop size='sm' show={show} onAccept={onAccept} onClose={onClose}>
            <Modal.Header>Header</Modal.Header>
            <Modal.Body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis tortor nibh, sodales ultrices nibh vehicula nec. In nulla sapien, mattis a hendrerit non, finibus sit amet orci. Proin at faucibus ex. Quisque semper vel dui eu efficitur. Praesent lacinia sem eu semper rhoncus. Maecenas molestie nisl sit amet mauris interdum sollicitudin. Integer condimentum ut erat ut fermentum. Phasellus id porttitor arcu. Phasellus aliquet nunc eget sapien pulvinar, nec euismod lectus laoreet. Nam hendrerit molestie egestas. Nunc congue ipsum nulla, ac porta purus aliquam in. Integer non turpis eu lectus molestie facilisis nec laoreet nisi. Sed urna lorem, vehicula sit amet lacus non, aliquam vulputate arcu. Vestibulum ultrices pellentesque diam sit amet venenatis.Curabitur at volutpat dolor, vel imperdiet sem. Curabitur ac malesuada libero. Curabitur vel feugiat ligula. Nulla dolor lacus, viverra vitae convallis eu, lobortis a est. Pellentesque condimentum auctor orci at facilisis. Aenean libero quam, suscipit vel nibh efficitur, mattis dapibus ante. Sed at ultrices libero. Nullam sem ipsum, pulvinar et semper et, mattis at ipsum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis tortor nibh, sodales ultrices nibh vehicula nec. In nulla sapien, mattis a hendrerit non, finibus sit amet orci. Proin at faucibus ex. Quisque semper vel dui eu efficitur. Praesent lacinia sem eu semper rhoncus. Maecenas molestie nisl sit amet mauris interdum sollicitudin. Integer condimentum ut erat ut fermentum. Phasellus id porttitor arcu. Phasellus aliquet nunc eget sapien pulvinar, nec euismod lectus laoreet. Nam hendrerit molestie egestas. Nunc congue ipsum nulla, ac porta purus aliquam in. Integer non turpis eu lectus molestie facilisis nec laoreet nisi. Sed urna lorem, vehicula sit amet lacus non, aliquam vulputate arcu. Vestibulum ultrices pellentesque diam sit amet venenatis.Curabitur at volutpat dolor, vel imperdiet sem. Curabitur ac malesuada libero. Curabitur vel feugiat ligula. Nulla dolor lacus, viverra vitae convallis eu, lobortis a est. Pellentesque condimentum auctor orci at facilisis. Aenean libero quam, suscipit vel nibh efficitur, mattis dapibus ante. Sed at ultrices libero. Nullam sem ipsum, pulvinar et semper et, mattis at ipsum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis tortor nibh, sodales ultrices nibh vehicula nec. In nulla sapien, mattis a hendrerit non, finibus sit amet orci. Proin at faucibus ex. Quisque semper vel dui eu efficitur. Praesent lacinia sem eu semper rhoncus. Maecenas molestie nisl sit amet mauris interdum sollicitudin. Integer condimentum ut erat ut fermentum. Phasellus id porttitor arcu. Phasellus aliquet nunc eget sapien pulvinar, nec euismod lectus laoreet. Nam hendrerit molestie egestas. Nunc congue ipsum nulla, ac porta purus aliquam in. Integer non turpis eu lectus molestie facilisis nec laoreet nisi. Sed urna lorem, vehicula sit amet lacus non, aliquam vulputate arcu. Vestibulum ultrices pellentesque diam sit amet venenatis.Curabitur at volutpat dolor, vel imperdiet sem. Curabitur ac malesuada libero. Curabitur vel feugiat ligula. Nulla dolor lacus, viverra vitae convallis eu, lobortis a est. Pellentesque condimentum auctor orci at facilisis. Aenean libero quam, suscipit vel nibh efficitur, mattis dapibus ante. Sed at ultrices libero. Nullam sem ipsum, pulvinar et semper et, mattis at ipsum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis tortor nibh, sodales ultrices nibh vehicula nec. In nulla sapien, mattis a hendrerit non, finibus sit amet orci. Proin at faucibus ex. Quisque semper vel dui eu efficitur. Praesent lacinia sem eu semper rhoncus. Maecenas molestie nisl sit amet mauris interdum sollicitudin. Integer condimentum ut erat ut fermentum. Phasellus id porttitor arcu. Phasellus aliquet nunc eget sapien pulvinar, nec euismod lectus laoreet. Nam hendrerit molestie egestas. Nunc congue ipsum nulla, ac porta purus aliquam in. Integer non turpis eu lectus molestie facilisis nec laoreet nisi. Sed urna lorem, vehicula sit amet lacus non, aliquam vulputate arcu. Vestibulum ultrices pellentesque diam sit amet venenatis.Curabitur at volutpat dolor, vel imperdiet sem. Curabitur ac malesuada libero. Curabitur vel feugiat ligula. Nulla dolor lacus, viverra vitae convallis eu, lobortis a est. Pellentesque condimentum auctor orci at facilisis. Aenean libero quam, suscipit vel nibh efficitur, mattis dapibus ante. Sed at ultrices libero. Nullam sem ipsum, pulvinar et semper et, mattis at ipsum.</p>
            </Modal.Body>
        </Modal>
        <Message closable  icon title='information' type='information'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et pellentesque velit, a volutpat ligula. Praesent id turpis scelerisque, aliquet lacus at, mollis elit. Suspendisse eu consectetur leo. Donec vel nisi et urna accumsan iaculis. Vestibulum massa enim, aliquam in ligula eget, hendrerit auctor lorem. Vestibulum ultrices mi vel sagittis vehicula. Morbi malesuada non diam sed dictum. Nullam elementum neque eu vulputate lacinia.

Quisque purus nulla, malesuada in condimentum bibendum, convallis in lacus. Cras sed blandit erat, dapibus viverra enim. Donec eu justo eu ante dignissim varius sed vel felis. Donec vehicula est dui, ac tempor odio fermentum a. Duis aliquet velit ac orci tempus tempus. Duis facilisis, nibh eget pharetra fringilla, justo turpis lobortis magna, ac feugiat arcu metus quis erat. Nam urna elit, eleifend at enim non, semper suscipit ex. Mauris at viverra dui, quis mollis lorem. Phasellus nisi metus, ultrices id turpis at, molestie congue sapien. Aliquam dictum scelerisque risus. Nullam bibendum a elit non ultricies. Nam rhoncus dignissim dapibus.</p>  </Message>
        <Message icon title='success' type='success'> <p>dqsd qd qsdsqd</p> </Message>
        <Message icon type='warning'> <p>dqsd qd qsdsqd</p> </Message>
        <Message closable  icon type='error'> <p>dqsd qd qsdsqd</p> </Message>
    </>)
}

export default modal