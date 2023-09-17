import React, { useState } from 'react'
import './Header.css' 
import siteLogo from '../images/icons/site-logo.svg' 
import phoneICon from '../images/icons/Call.svg'
import Karavat1 from '../images/krovat1.png'
import { useFetch } from '../hooks/useFetch'
import Modal from './Modal'
import Qabulqlindi from './Qabulqlindi'
import Product from './Product'
import Newproduct from './Newproduct'
import Texnalogiya from './Texnalogiya'
import Adress from './Adress'
import Telefon from './Telefon'
import Footer from './Footer'
import Maxsulotlar from './Maxsulotlar'

const Header = () => {
    const url = 'http://localhost:1212/api/carousel'
    const {data,isPending,error} = useFetch(url)
    // console.log(data);
    const [showModal, setShowModal] = useState(false);
    const [anotherModal, setanotherModal ] = useState(false);
     const closeanotherModal = () =>{
        setanotherModal(false)
    }
  return (
   <>
         <div id='headertop' className='Header'>
         <div className='container'>
            <img className='NavbarLogo' src={siteLogo} alt="" /> 
            <div className='Navbar'>
                <ul className='links mb-3'>
                    <li><a href="#katalog">katalog</a></li>
                    <li><a href="#aksiya">aksiya</a></li>
                    <li><a href="">biz haqimizda</a></li>
                    <li><a href="#manzil">manzilimiz</a></li>
                    <li><a href="#telefon">aloqa</a></li>
                </ul>
                <div className='NavbarPhone'>
                    <img className='phoneImg' src={phoneICon} alt="" />
                    <h4 className='mt-3'>+998 90 123 45 67</h4>
                    <button onClick={()=> {setShowModal(true)}}  className='btn btn-navbar'>Buyurtma berish</button>
                </div>
            </div>

            <div className='headerContent'>
                <div>
                    <h1 className='header-title'>Kechalari sokin dam oling</h1>
                <button className='kategoriya-btn'>
                    <a href="#katalog">kategoriyalar</a>
                </button>
                </div>
                <img className='mb-5' src={Karavat1} alt="" />
            </div>
         </div>
            {/* <Modal /> */}
         </div>
         {showModal && <Modal setShowModal={setShowModal} setanotherModal={setanotherModal} >
                    
                    </Modal>}

                    {anotherModal && <Qabulqlindi closeanotherModal={closeanotherModal}>
                        
                        </Qabulqlindi>}
                        <Maxsulotlar />
            <Product />
    <Newproduct />
    <Texnalogiya />
    <Adress />
    <Telefon />
    <Footer />
   </>
  )
}

export default Header
