import emailjs from '@emailjs/browser'
import '../css/contacto.css'


function Contacto() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_z6oaslo', 'template_74mwiq8', e.target, '8xxDKB0axxMC4UM7E')
            .then(response => console.log(response))
            .catch(error => console.error(error));

        e.target.reset();
    }

    return (
        <>

            <div className='div-form' id='contacto' >
                <h1 className='title-form'>Contacto</h1>
                <form className='form-email' onSubmit={sendEmail}>
                    <input type='text' name='user_name' placeholder='Nombre'></input>
                    <input type='email' name='user_email' placeholder='Email'></input>
                    <textarea className='box-text' name='user_message' id='' cols='45' rows='8' required placeholder='Mensaje' />
                    <button type='submit'>Enviar</button>
                </form>

            </div>

        </>

    )

}
export default Contacto;