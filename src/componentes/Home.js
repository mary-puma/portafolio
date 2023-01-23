import foto from '../img/foto.png'
import Perfil from './Perfil';
import Skills from './Skills';
import Experiencia from './Experiencia';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import 'animate.css'
import { useEffect, useState } from "react"
import '../css/home.css'
function Home() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desarrolladora Backend Java"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 100);
    const period = 2000;
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(100)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);

        }

    }
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };

    }, [text]);




    return (
        <>
            <div className='background-hero' id='home'>
                <div className="d-flex justify-content-center align-items-center flex-wrap  home-container">
                    <div className="p-2 ">
                        <img src={foto} className='imgHero' alt=''/>
                    </div>
                    <div className="p-2  text-white ">
                        <h1 className='info-name'>Hola, Soy Mary Isabel Puma
                        </h1>
                        <br />
                        <div >
                            <h1><span>{text}</span></h1>
                        </div>

                        <a className='hover-icon' href='https://www.linkedin.com/in/mary-isabel-puma-aa899a20b/' target='_blank' rel="noreferrer noopener"><FaLinkedin className='icon' /></a>
                        <a className='hover-icon' href='https://github.com/mary-puma' target='_blank' rel="noreferrer noopener"><FaGithub className='icon' /></a>
                        <a href='#contacto' rel="noreferrer noopener"><FaEnvelope className='icon' /></a>
                        <a href='https://wa.me/541126654794' target='_blank' rel="noreferrer noopener"><FaWhatsapp className='icon' /></a>

                    </div>

                </div>
            </div>

            <Perfil />
            <Skills />
            <Experiencia />
            <Proyectos />
            <Contacto />

        </>

    )

}
export default Home;