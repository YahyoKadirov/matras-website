import { useFetch } from '../hooks/useFetch'
import './Adress.css'
import Lakatsa from '../images/icons/Location.svg'
import Manzil from '../images/manzil.png'

import React from 'react'

const Adress = () => {
    const url = 'http://localhost:1212/api/address'
    const {data,isPending,error} = useFetch(url)
    console.log(data);
  return (
    <div>
         <h2>Manzil</h2>
       {isPending && <div>Loading</div>}
    {error && <div>{error}</div>}
    {data && data.map((item)=>{
        return (
            
            <>
           
            
                <div id='manzil' className='adress container mt-5 d-flex justify-content-between'>
                <div>
                    <h1 className='fs-1'><b>Manzilimiz</b></h1>
                <h2 className='fs-2 mt-4'>{item.location}</h2>
                <p className='mt-3 mb-5'>{item.destination}</p>
                <div className='lakatsa-div'>
                    <img src={Lakatsa} alt="" />
                    <a className='lakatsa' href={item.geolacation}>Geolokatsiya</a>
                </div>
                </div>
                <div>
                    <img src={Manzil} alt="img" />
                </div>
            </div>
            </>
        )
    })}
    </div>
  )
}

export default Adress
