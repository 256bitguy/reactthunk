
// import Navbar from './components/Navbar'
import Create from './components/Create'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Read from './components/Read'
 const App = () => {
   return (
     <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route exact path="/" element={<Create/>}/>
      <Route exact path="/read" element={<Read/>}/>
    </Routes>
    </BrowserRouter>
   
     </>
   )
 }
 
 export default App