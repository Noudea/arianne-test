const Container = ({children, ...props}) => {
    return(<div className='container'>
        <style jsx>{`
            .container {
                width : ${props.width ? props.width : '100%'};
                background-color : ${props.backgroundColor ? props.backgroundColor : 'transparent'};
                margin : ${props.margin ? props.margin : '0px'};
                padding : ${props.padding ? props.padding : '0px'};
            }
            `}</style>
            {children}
    </div>)
}

export default Container;