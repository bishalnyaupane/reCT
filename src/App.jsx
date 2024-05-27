
 import Toolbar from './assets/component/navigation/toolbar'
import About from './pages/about'
import Home from './pages/home'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  

  return (
    <>
    <Router>
      <Toolbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
     </ Router>


    </>
  )
}

export default App
