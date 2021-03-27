
const SideNavContainer = ({children,...props}) => {
    return (<div className='navigationContainer'>
        <style jsx>{`
            .navigationContainer {
                height:100%;
            }
            `}</style>
        {children}
    </div>)

}

export default SideNavContainer