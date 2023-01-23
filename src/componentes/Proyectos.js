import '../css/proyectos.css'
import movies from '../img/peliculas.PNG'
function Proyectos() {
    return (
        <>
            <div className='proyect'>
                <h1 id='proyecto' className='titulo'>Proyectos</h1>
                <div className='card-container'>
                    <div className='card-item'>
                        <div className='cont-flex'>
                            <img src={movies} className='img-proy' alt=''></img>
                            <p className='desc'>
                                Listado de Peliculas: Podras buscar la pelicula que deseas y agregarla a la
                                sección de favoritos.

                            </p>
                            <ul className="box-color-flex">
                                <li className="box-color-1" name="item1">Demo</li>
                                <li className="box-color-2" name="item1">
                                <a href='https://github.com/mary-puma/proyecto-react' target='_blank' rel="noreferrer noopener">
                                        GitHub</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='card-item'>
                        <div className='detalle'>
                            <p className='desc'>
                                Es una API REST donde el usuario podra crear, actualizar, eliminar las peliculas y personajes. Tambien podran
                                filtrar los personajes y peliculas.
                                El usuario debera registrarse y autenticarse para acceder a los endpoints.
                                Las rutas fueron protegidas con Spring Security y JWT.
                            </p>

                            <ul className="box-color-flex">
                                <li className="box-color-1" name="item1">Demo</li>
                                <li className="box-color-2" name="item1" >
                                    <a href='https://github.com/mary-puma/pelicula-disney' target='_blank' rel="noreferrer noopener">
                                        GitHub</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card-item'>
                        <div className='detalle'>
                            <p className='desc'>
                                Es un sistema de Blog donde el usuario podra crear, actualizar, eliminar las publicaciones
                                y comentarios. La API fue creada con Spring Boot, Hibernate/JPA para la persistencia de datos y
                                las rutas fueron protegidas con Spring Security y JWT.

                            </p>

                            <ul className="box-color-flex">
                                <li className="box-color-1" name="item1">Demo</li>
                                <li className="box-color-2" name="item1">
                                    <a href='https://github.com/mary-puma/sistema-blog-spring-boot-api-rest' target='_blank' rel="noreferrer noopener">
                                        GitHub</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Proyectos;
