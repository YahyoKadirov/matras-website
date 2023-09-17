import React from 'react'
import Social from '../images/Social.svg'
import Vizitka from '../images/vizitka.png'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='container'>
       <div className='d-flex justify-content-between'>
         <div className='footer-nav mb-5 mt-5'>
            <a href="">Biz haqimizda</a>
            <a href="#katalog">Katalog</a>
            <a href="#aksiya">Aksiya</a>
            <a href="#manzil">Manzilimiz</a>
        </div>
         <div className='socialmedia d-flex'>
            <img src={Social} alt="" />
        </div>
       </div>
        <hr />
        <div className='d-flex justify-content-between'>
            <div className='footer-end mt-5 mb-5'>
            <p> © 2021 Dream Cloud. Barcha huquqlar himoyalangan.</p>
        </div>

        <div className='footer-icon mt-5'>
            <img src={Vizitka} alt="" />
        </div>
        </div>
                <div className='text-center mb-4'>
                    <a href='#headertop' className='text-center mb-4'>
                    <i  class="fa-solid fa-arrow-up"></i>
                </a>
                </div>
    </div>
    
    </>
  )
}

export default Footer
