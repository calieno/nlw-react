import { useContext } from 'react'
import lista from '../assets/lista.png'
import logo from '../assets/logo.jpg'
import '../styles/auth.scss'
import { Google } from 'react-bootstrap-icons'
import { Button } from '../components/button'
import { useHistory } from 'react-router-dom'
import { auth, firebase } from '../services/firebase'
import { globalContext } from '../App'

export function Home(){
    const history = useHistory()
    const { value, setValue }= useContext(globalContext)

    function handleToNewList(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
            history.push('/list/new')
        })
        
    }


    return(
        <div id="page-auth">
            <aside>
                <img src={ lista } alt="Lista" />
                <strong>get<strong className="me">4me</strong> </strong><br/>
                <p>Traz pra mim :)</p>
                <h1>{value}</h1>
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