import '../css/footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div className="container-footer">
            <footer className="position-relative start-0 bottom-0 end-0 bg-dark pb-0 ">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 mx-5">
                    <li className="nav-item">
                        <a className="nav-link px-2 text-white" href='https://www.linkedin.com/in/mary-isabel-puma-aa899a20b/' target='_blank' rel="noreferrer noopener">
                            <FaLinkedin className='icon' />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2 text-white" href='https://github.com/mary-puma' target='_blank' rel="noreferrer noopener">
                            <FaGithub className='icon' />
                        </a>
                    </li>

                </ul>
                <p className="text-center text-white">&copy; 2023 Mary Puma</p>
            </footer>
        </div>
    )

}
export default Footer;