import '../css/header.css'

function Header() {


    return (
        <header>
            <nav>
                <ul className='nav-links' >
                    <li >
                        <a href='#home' className="nav-link text-white" >Home</a>
                    </li>
                    <li >
                        <a href='#sobre-mi' className="nav-link text-white" >Sobre mí</a>
                    </li>
                    <li >
                        <a href='#skills' className="nav-link text-white" >Skills</a>
                    </li>
                    <li >
                        <a href='#experiencia' className="nav-link text-white " >Experiencia</a>
                    </li>
                    <li >
                        <a href='#proyecto' className="nav-link text-white ">Proyectos</a>
                    </li>
                    <li >
                        <a href='#contacto' className="nav-link text-white " >Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>

    )

}
export default Header;