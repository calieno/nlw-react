import { createContext, useState } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Home } from "./pages/Home"
import { NewList } from "./pages/NewList"
import { auth, firebase } from './services/firebase'

type User = {
  id: string
  name: string
  email: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined 
  signInWithGoogle: () => Promise<void>
}

export const authContext = createContext({} as AuthContextType)

function App() {
  const [user, setUser] = useState<User>()

  async function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)
      /*  */
    console.log(result)
    if (result.user){
      const { displayName, photoURL, uid, email } = result.user

      if (!displayName || !photoURL || !email) {
        throw new Error('Missing information from Google Account.')
      }

      setUser({
        id: uid,
        name: displayName,
        email: email,
        avatar: photoURL
      })
    }
  }

  return (
    <BrowserRouter>
      <authContext.Provider value={{user, signInWithGoogle}}>
        <Route path="/" exact component= { Home }/>
        <Route path="/list/new" component= { NewList } />
      </authContext.Provider>  
    </BrowserRouter>
  )
}

export default App;
