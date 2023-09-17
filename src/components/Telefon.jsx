import React, { useRef, useState } from 'react'
import './Telefon.css'
import Ariza from './Ariza'

const Telefon = () => {

    const numberVal = useRef()
    // console.log(numberVal.current);
    const [ariza, setAriza] = useState(false)
const HandleClick =(e)=>{
e.preventDefault()
setAriza(true)
}
  return (
    <>
        { !ariza && 
            <div id='telefon' className='phone-box  d-flex justify-content-evenly mt-5'>
            <div className='phone-text'>
                <h1 className='sizni fs-1'><b>Sizni qiziqtirdimi?</b></h1>
                <p className='mt-3'>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
            </div>
            <div className='phone-input'>
                <div className='nmadr'>
                    <div>+998 |</div>
                    <form>
                        <div className='mb-4'>
                            <input className='tel' ref={numberVal}  type="text" placeholder='Raqamingizni yozing' />
                    <button type='submit' onClick={HandleClick} className='phone-btn bg-primary-subtle'>Yuborish</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        }
        {
            ariza && <Ariza />
        }
    </>
  )
}

export default Telefon
