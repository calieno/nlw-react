import imagem from '../assets/lista.jpg'
import '../styles/userbox.scss'


export function UserBox(){
    return (
        <div className="content">
            <div className="card">
                <div className="firstinfo"><img src={ imagem }/>
                    <div className="profileinfo">
                        <h1>Francesco Moustache</h1>
                        <h3>Python Ninja</h3>
                        <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



