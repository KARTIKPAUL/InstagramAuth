import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Components/Home'
import HeroPage from './Components/HeroPage'
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='' element ={<Home />} ></Route>
      <Route path='/signup' element = {<SignUp />}></Route>
      <Route path='/login' element = {<Login />}></Route>
      <Route path='/heropage' element = {<HeroPage />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
