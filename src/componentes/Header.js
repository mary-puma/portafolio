import '../css/header.css'
import { useState } from "react"

function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav>
                <ul className={`nav-links ${open && "open"}`} >

                    <li >
                        <a href='#home' className="text-white" rel="noreferrer noopener" onClick={() => setOpen(!open)} >Home</a>
                    </li>
                    <li >
                        <a href='#sobre-mi' className="text-white" rel="noreferrer noopener" onClick={() => setOpen(!open)} >Sobre mí</a>
                    </li>
                    <li >
                        <a href='#skills' className=" text-white" rel="noreferrer noopener" onClick={() => setOpen(!open)} >Skills</a>
                    </li>
                    <li >
                        <a href='#experiencia' className="text-white" rel="noreferrer noopener" onClick={() => setOpen(!open)} >Experiencia</a>
                    </li>
                    <li >
                        <a href='#proyecto' className="text-white" rel="noreferrer noopener" onClick={() => setOpen(!open)} >Proyectos</a>
                    </li>
                    <li >
                        <a href='#contacto' className="text-white" rel="noreferrer noopener" onClick={() => setOpen(!open)} >Contacto</a>
                    </li>

                </ul>


                <div className={`nav-toggle ${open && "open"}`} onClick={() => setOpen(!open)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>
        </header>

    )

}
export default Header;