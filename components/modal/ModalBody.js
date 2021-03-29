import Container from "../container/Container"

const ModalBody = ({ children, ...props }) => {
    return (<>
        <style jsx>{`
            div {
                overflow:scroll;
                max-height: 600px;
                scrollbar-width: none;
            }
            div::-webkit-scrollbar {
                width: 0px;
                height: 0px;
                display: none;
                width: 0px;
                /* remove scrollbar space */
                background: transparent;
                /* optional: just make scrollbar invisible */
            }
        `}</style>
        <Container margin='0px 0px 60px 0px'>
            <div>{children}</div>
        </Container>
    </>)
}

export default ModalBody