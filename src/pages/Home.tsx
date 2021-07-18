import { useContext } from 'react'
import { Google } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/button'
import { authContext } from '../App'
/* Load Images */
import lista from '../assets/lista.png'
import logo from '../assets/logo.jpg'
/* Load CSS */
import '../styles/auth.scss'

export function Home(){
    const history = useHistory()
    const { user, signInWithGoogle } = useContext(authContext)


    async function handleToNewList(){
        if(!user){
            await signInWithGoogle()
        }
            history.push('/list/new')
    }
 
    return(
        <div id="page-auth">
            <aside>
                <img src={ lista } alt="Lista" />
                <strong>get<strong className="me">4me</strong> </strong><br/>
                <p>Traz pra mim :)</p>
                <h1>{user?.name}</h1>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="Logotipo"/>
                    <button onClick={ handleToNewList } className="create-list"> <Google className="img-google" /> Crie sua lista com o Google </button>
                    <div className="separator">Ou entre numa lista</div>
                    <form>
                        <input
                        type= "text"
                        placeholder= "Digite o codigo da lista"
                        />
                        <Button type= "submit">
                            Abrir Lista
                        </Button>

                    </form>
                </div>
            </main>
        </div>
    )
}