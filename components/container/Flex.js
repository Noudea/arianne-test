const Flex = ({children,...props}) => {
    return(<div className='flexContainer'>
        <style jsx>{`
            .flexContainer {
                width : ${props.width ? props.width : '100%'};
                height : ${props.height ? props.height : '100%'};
                display:flex;
                flex-direction:${props.flexDirection ? props.flexDirection : 'row'};
                justify-content:${props.justifyContent};
                align-items:${props.alignItems}
            }

            `}</style>
        {children}
    </div>)
}

export default Flex