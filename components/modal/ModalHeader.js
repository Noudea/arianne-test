const ModalHeader = ({ children, ...props }) => {
    return (<>
        <style jsx>{`
        h2 {
            margin: 10px 0px 30px 0px;
        }
        `}</style>
        <h2>{children}</h2>
    </>)
}

export default ModalHeader