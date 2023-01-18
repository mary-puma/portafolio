import '../css/header.css'

function Header() {


    return (
        <header>
            <nav>
                <ul className='nav-links' >
                    <li >
                        <a href='#home' className="nav-link text-white" rel="noreferrer noopener">Home</a>
                    </li>
                    <li >
                        <a href='#sobre-mi' className="nav-link text-white" rel="noreferrer noopener" >Sobre mí</a>
                    </li>
                    <li >
                        <a href='#skills' className="nav-link text-white" rel="noreferrer noopener">Skills</a>
                    </li>
                    <li >
                        <a href='#experiencia' className="nav-link text-white" rel="noreferrer noopener" >Experiencia</a>
                    </li>
                    <li >
                        <a href='#proyecto' className="nav-link text-white" rel="noreferrer noopener">Proyectos</a>
                    </li>
                    <li >
                        <a href='#contacto' className="nav-link text-white" rel="noreferrer noopener" >Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>

    )

}
export default Header;