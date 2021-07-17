import { createContext, useState } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Home } from "./pages/Home"
import { NewList } from "./pages/NewList"

export const globalContext = createContext({} as any)

function App() {
  const [value, setValue] = useState('valor global')
  return (
    <BrowserRouter>
      <globalContext.Provider value={{value, setValue}}>
        <Route path="/" exact component= { Home }/>
        <Route path="/list/new" component= { NewList } />
      </globalContext.Provider>  
    </BrowserRouter>
  )
}

export default App;
