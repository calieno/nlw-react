import lista from '../assets/lista.png'
import logo from '../assets/logo.jpg'
import '../styles/auth.scss'
import { Button } from '../components/button'
import { Link } from 'react-router-dom'

export function NewList(){
    return(
        <div id="page-auth">
            <aside>
                <img src={ lista } alt="Lista" />
                <strong>get<strong className="me">4me</strong> </strong><br/>
                <p>Traz pra mim :)</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="Logotipo"/>
                    <h2>Crie uma nova lista</h2>
                    <form>
                        <input
                        type= "text"
                        placeholder= "Nome da Lista"
                        />
                        <Button type= "submit">
                            Criar Lista
                        </Button>

                    </form>
                    <p>Abrir uma lista existente. <Link to="/">Clique Aqui.</Link></p>
                </div>
            </main>
        </div>
    )
}