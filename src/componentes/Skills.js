import '../css/skills.css'
import javascript from '../img/javascript.png'
import bootstrap from '../img/bootstrap.png'
import css from '../img/css.png'
import git from '../img/git.png'
import html from '../img/html.png'
import react from '../img/react.png'
import java from '../img/java.png'
import postman from '../img/postman.png'
import github from '../img/github.png'
import mysql from '../img/mysql.png'
import springBoot from '../img/springBoot.png'
function Skills() {

    return (
        <>
            <div className='skills'>
                <h1 id='skills' className='titulo'>Skills</h1>
                <div className='grid-container'>
                    <div className='grid-item'>
                        <img src={javascript} alt='javascript' />
                        <h4>Javascript</h4>

                    </div>

                    <div className='grid-item'>
                        <img src={html}  alt='html' />
                        <h4>HTML</h4>
                    </div>
                    <div className='grid-item'>
                        <img src={css} alt='css' />
                        <h4>CSS</h4>
                    </div>
                    <div className='grid-item'>
                        <img src={bootstrap} alt='bootstrap' />
                        <h4>Bootstrap</h4>
                    </div>

                    <div className='grid-item'>
                        <img src={react} />
                        <h4>React</h4>
                    </div>

                    <div className='grid-item'>
                        <img src={java} />
                        <h4>Java</h4>
                    </div>
                    <div className='grid-item'>
                        <img src={springBoot} />
                        <h4>SpringBoot</h4>
                    </div>
                    <div className='grid-item'>
                        <img src={git} />
                        <h4>Git</h4>
                    </div>
                    <div className='grid-item'>
                        <img src={mysql} />
                        <h4>MySql</h4>
                    </div>
                    <div className='grid-item'>
                        <img src={postman} />
                        <h4>Postman</h4>
                    </div>
                    <div className='grid-item'>
                        <img src={github} />
                        <h4>GitHub</h4>
                    </div>

                </div>
            </div>

        </>
    )

}
export default Skills;