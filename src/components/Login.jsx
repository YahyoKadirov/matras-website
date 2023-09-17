import { useState, useEffect, useRef } from 'react'
import './Admin.css'
import Admin from '../Admin'
import Sidebar from './Sidebar'
import Buyurtmalar from './Buyurtmalar'
const Login = ({data}) => {

  const [token, setToken] = useState(data )

  const userName = useRef('')
  const userParol = useRef('')

    function handleSubmit(e){
      e.preventDefault()
      let obj = {
        userName: userName.current.value,
        password: userParol.current.value
      }
        console.log(obj);
        fetch('http://localhost:1212/admin/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
        }) .then(res =>res.json()).then(data => {
          if(data.token){
            setToken(data)
            localStorage.setItem('token',JSON.stringify(data));
          }
        })

  } 
  return (

    <>
    {
      !token ? <div>
      <div className='admin-box'>
        <form  onSubmit={handleSubmit} className='login-form'>
        <div className='admin-item'>
          <h2 className='admin-title'>Kirish</h2>
        <div>
          <div className='login'>
            <input className='login-inp' ref={userName} type="text" placeholder="Login" />
          </div>
        <div className='password'>
          <input className='password-inp' ref={userParol} type="text" placeholder="Parol" />
        </div>
        <button  className='admin-btn' type='submit'>Kirish</button>
        </div>
        </div>
      </form>
      </div>
    </div> : <Sidebar/>
    }
    </>
  )
}

export default Login