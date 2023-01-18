import emailjs from '@emailjs/browser'
import sweetalert2 from 'sweetalert2';
import '../css/contacto.css'


function Contacto() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_z6oaslo', 'template_74mwiq8', e.target, '8xxDKB0axxMC4UM7E')
            .then(response => console.log(response))
            .catch(error => console.error(error));


        sweetalert2.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Enviado',
            showConfirmButton: false,
            timer: 2000
        })


        e.target.reset();
    }

    return (
        <>

            <div className='div-form' id='contacto' >
                <h1 className='title-form'>Contacto</h1>
                <form className='form-email' onSubmit={sendEmail}>
                    <input type='text' name='user_name' required placeholder='Nombre'></input>
                    <input type='email' name='user_email' required placeholder='Email'></input>
                    <textarea className='box-text' name='user_message' id='' cols='45' rows='8' required placeholder='Mensaje' />
                    <button type='submit'>Enviar</button>
                </form>

            </div>

        </>

    )

}
export default Contacto;