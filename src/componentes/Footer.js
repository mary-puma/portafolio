import { Link } from 'react-router-dom';
import '../css/footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div className="container-footer">
            <footer className="position-relative start-0 bottom-0 end-0 bg-dark bg-gradient pb-0 ">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 mx-5">
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-white">
                        <FaLinkedin className='icon' />
                    </Link></li>
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-white">
                        <FaGithub className='icon' />
                    </Link>

                    </li>

                </ul>
                <p className="text-center text-white">&copy; 2023 Mary Puma</p>
            </footer>
        </div>
    )

}
export default Footer;