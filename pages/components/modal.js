import Modal from "../../components/modal/Modal"
import Button from '../../components/buttons/Button'
import { useState } from 'react'

const modal = () => {
    const [show, setShow] = useState(false)


    const showModal = () => {
        console.log('showModal')
        setShow(true)
    }

    const onClose = () => {
        console.log('onClose')
        setShow(false)
    }

    return (<>
        <style jsx>{`


        `}</style>
        <Button onClick={showModal} onClose={showModal} medium>Open Modal</Button>
        <Modal size='sm' show={show} onClose={onClose}>
            <Modal.Header>Header</Modal.Header>
            <Modal.Body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis tortor nibh, sodales ultrices nibh vehicula nec. In nulla sapien, mattis a hendrerit non, finibus sit amet orci. Proin at faucibus ex. Quisque semper vel dui eu efficitur. Praesent lacinia sem eu semper rhoncus. Maecenas molestie nisl sit amet mauris interdum sollicitudin. Integer condimentum ut erat ut fermentum. Phasellus id porttitor arcu. Phasellus aliquet nunc eget sapien pulvinar, nec euismod lectus laoreet. Nam hendrerit molestie egestas. Nunc congue ipsum nulla, ac porta purus aliquam in. Integer non turpis eu lectus molestie facilisis nec laoreet nisi. Sed urna lorem, vehicula sit amet lacus non, aliquam vulputate arcu. Vestibulum ultrices pellentesque diam sit amet venenatis.Curabitur at volutpat dolor, vel imperdiet sem. Curabitur ac malesuada libero. Curabitur vel feugiat ligula. Nulla dolor lacus, viverra vitae convallis eu, lobortis a est. Pellentesque condimentum auctor orci at facilisis. Aenean libero quam, suscipit vel nibh efficitur, mattis dapibus ante. Sed at ultrices libero. Nullam sem ipsum, pulvinar et semper et, mattis at ipsum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis tortor nibh, sodales ultrices nibh vehicula nec. In nulla sapien, mattis a hendrerit non, finibus sit amet orci. Proin at faucibus ex. Quisque semper vel dui eu efficitur. Praesent lacinia sem eu semper rhoncus. Maecenas molestie nisl sit amet mauris interdum sollicitudin. Integer condimentum ut erat ut fermentum. Phasellus id porttitor arcu. Phasellus aliquet nunc eget sapien pulvinar, nec euismod lectus laoreet. Nam hendrerit molestie egestas. Nunc congue ipsum nulla, ac porta purus aliquam in. Integer non turpis eu lectus molestie facilisis nec laoreet nisi. Sed urna lorem, vehicula sit amet lacus non, aliquam vulputate arcu. Vestibulum ultrices pellentesque diam sit amet venenatis.Curabitur at volutpat dolor, vel imperdiet sem. Curabitur ac malesuada libero. Curabitur vel feugiat ligula. Nulla dolor lacus, viverra vitae convallis eu, lobortis a est. Pellentesque condimentum auctor orci at facilisis. Aenean libero quam, suscipit vel nibh efficitur, mattis dapibus ante. Sed at ultrices libero. Nullam sem ipsum, pulvinar et semper et, mattis at ipsum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis tortor nibh, sodales ultrices nibh vehicula nec. In nulla sapien, mattis a hendrerit non, finibus sit amet orci. Proin at faucibus ex. Quisque semper vel dui eu efficitur. Praesent lacinia sem eu semper rhoncus. Maecenas molestie nisl sit amet mauris interdum sollicitudin. Integer condimentum ut erat ut fermentum. Phasellus id porttitor arcu. Phasellus aliquet nunc eget sapien pulvinar, nec euismod lectus laoreet. Nam hendrerit molestie egestas. Nunc congue ipsum nulla, ac porta purus aliquam in. Integer non turpis eu lectus molestie facilisis nec laoreet nisi. Sed urna lorem, vehicula sit amet lacus non, aliquam vulputate arcu. Vestibulum ultrices pellentesque diam sit amet venenatis.Curabitur at volutpat dolor, vel imperdiet sem. Curabitur ac malesuada libero. Curabitur vel feugiat ligula. Nulla dolor lacus, viverra vitae convallis eu, lobortis a est. Pellentesque condimentum auctor orci at facilisis. Aenean libero quam, suscipit vel nibh efficitur, mattis dapibus ante. Sed at ultrices libero. Nullam sem ipsum, pulvinar et semper et, mattis at ipsum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis tortor nibh, sodales ultrices nibh vehicula nec. In nulla sapien, mattis a hendrerit non, finibus sit amet orci. Proin at faucibus ex. Quisque semper vel dui eu efficitur. Praesent lacinia sem eu semper rhoncus. Maecenas molestie nisl sit amet mauris interdum sollicitudin. Integer condimentum ut erat ut fermentum. Phasellus id porttitor arcu. Phasellus aliquet nunc eget sapien pulvinar, nec euismod lectus laoreet. Nam hendrerit molestie egestas. Nunc congue ipsum nulla, ac porta purus aliquam in. Integer non turpis eu lectus molestie facilisis nec laoreet nisi. Sed urna lorem, vehicula sit amet lacus non, aliquam vulputate arcu. Vestibulum ultrices pellentesque diam sit amet venenatis.Curabitur at volutpat dolor, vel imperdiet sem. Curabitur ac malesuada libero. Curabitur vel feugiat ligula. Nulla dolor lacus, viverra vitae convallis eu, lobortis a est. Pellentesque condimentum auctor orci at facilisis. Aenean libero quam, suscipit vel nibh efficitur, mattis dapibus ante. Sed at ultrices libero. Nullam sem ipsum, pulvinar et semper et, mattis at ipsum.</p>
</Modal.Body>
        </Modal>
    </>)
}

export default modal