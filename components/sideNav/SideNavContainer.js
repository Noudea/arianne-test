const SideNavContainer = ({ children, ...props }) => {
    return (
        <nav className="navigationContainer">
            <style jsx>{`
                .navigationContainer {
                    height: 100%;
                    overflow: scroll;
                    scrollbar-width: none;
                }
                .navigationContainer::-webkit-scrollbar {
                    width: 0px;
                    height: 0px;
                    display: none;
                    width: 0px;
                    /* remove scrollbar space */
                    background: transparent;
                    /* optional: just make scrollbar invisible */
                }
            `}</style>
            {children}
        </nav>
    )
}

export default SideNavContainer
