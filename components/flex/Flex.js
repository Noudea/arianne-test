const Flex = ({children,...props}) => {

    return(<div className='flexContainer'>
        <style jsx>{`
            .flexContainer {
                display:flex;
                flex-direction:${props.flexDirection};
                justify-content:${props.justifyContent};
                align-items:${props.alignItems}
            }

            `}</style>
        {children}
    </div>)
}

export default Flex