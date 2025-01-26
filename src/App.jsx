import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from '../Pages/SignUp'
import Login from '../Pages/Login'
import Home from './Components/Home'
import Layout from './Components/layout'
import Wedding from './Components/SubCategories/wedding'
import HomeConstruction from './Components/SubCategories/HomeConstruction'
import Business from './Components/SubCategories/Buisness'
import FormPage from './Components/FormPage'
import Education from './Components/SubCategories/Education'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route/>
      <Route path ="/Signup" element ={<Signup/>}/>
      <Route path='/Login' element= {<Login/>}/>
      <Route path='/' element ={<Layout><Home/></Layout>  } />
      <Route path='/SubCategories/wedding'element ={<Wedding/>}  />
      <Route path='/SubCategories/HomeConstruction' element={<HomeConstruction/>}/>
      <Route path='/SubCategories/Buisness' element= {<Business/>} />
      <Route path='/SubCategories/Education' element = {<Education/>}/>
      <Route path='/FormPage' element = {<FormPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
