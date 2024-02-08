const NavBar = ({clearItems}) => {

    return (
        <>
        <nav className="desktop-nav">
            <button onClick={() => clearItems()}>Clear List</button>
            <div>
                <ul className="nav-links">
                <li><a href="https://www.linkedin.com/in/skandda-chandrasekar/" target ='_blank' rel='noreferrer'>LinkedIn</a></li>
                <li><a href="https://skandda.github.io" target='_blank' rel='noreferrer'>Home</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar;