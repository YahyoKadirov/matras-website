import './App.css'

import Header from './components/Header'
import { Routes , Route } from 'react-router-dom'
import Maxsulotlar from './components/Maxsulotlar'
import Product from './components/Product'
import Newproduct from './components/Newproduct'
import Texnalogiya from './components/Texnalogiya'

import Admin from './components/Login'
import { useState } from 'react'
import Login from './Admin'
import Buyurtmalar from './components/Buyurtmalar'
import Sidebar from './components/Sidebar'
import Customers from './components/Customers'
import Toifalar from './components/Toifalar'
import SideMahsulotlar from './components/SideMahsulotlar'
import SideTexnologiya from './components/SideTexnologiya'
import SideManzil from './components/SideManzil'



function App() {
const  [token,setToken] = useState(JSON.parse(localStorage.getItem('token')) || '')

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Header />}/>
        <Route path='/admin' element={
        token ?
        <Admin />
         
       : <Login  data={{token, setToken}}/>} >
        
        <Route path='/admin/buyurtmalar' element={<Buyurtmalar/>}/>
        <Route path='/admin/customers' element={<Customers/>}/>
        <Route path='/admin/toifalar' element={<Toifalar/>}/>
        <Route path='/admin/sidemahsulotlar' element={<SideMahsulotlar/>}/>
        <Route path='/admin/sidetexnologiya' element={<SideTexnologiya/>}/>
        <Route path='/admin/sidemanzil' element={<SideManzil/>}/>
       </Route>
      </Routes>
    
    
    </div>
  )
}

export default App
