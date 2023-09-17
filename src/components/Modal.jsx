import { useState } from 'react'
import './Modal.css'
const Modal = ({setShowModal,setanotherModal}) => {
const [count, setCount] = useState(0);


const handlePlus = (e) => {
  e.preventDefault()
  setCount(count + 1)
}

const handleMinus = (e)=> {
  e.preventDefault()
  if(count > 0){
    setCount(count - 1)
  }
}
const handleSubmit = () => {
  setShowModal(false)
  setanotherModal(true)
}

  return (
   <>
    <div className='modal-backdrop'>
        <div className='modals'>
             <div>
       <div className='buyurtma-box'>
                  <button onClick={()=> setShowModal(false)}>Yopmoq</button>
    <h1 className='buyurtma-title'>Buyurtma qilish</h1>
    <form onSubmit={handleSubmit}>
        <input className='buyurtma-input' type="text" placeholder='ismingizni yozing' />
        <div className='buyurtma-input-2'>
             <div className='raqam'>+998</div>
             <input className='inputde'  type="text" placeholder='raqamingizni yozing' />
        </div>
        <div className="mahsulotlar">
            <h1 className='mahsulotlar-title'>Mahsulotni toifasini tanlang</h1>
            <select className='select' name="Mahsulotlar">
                <option selected></option>
                <option value="Model A+">Model A+</option>
                <option value="Model B+">Model B+</option>
                <option value="Model C">Model C</option>
                <option value="Model C+">Model C+</option>
                <option value="Model D">Model D</option>
                <option value="Model Yevro">Model Yevro</option>
            </select>
        </div>
            <h1 className='mahsulotlar-title'>Miqdorni tanlang</h1>
        <div className='plusminus'>
          <div className='plus'>
            <button type='submit' onClick={handlePlus}>+</button>
        </div>
          <div className='count'>
            <h2><b>{count}</b></h2>
          </div>
        <div className='minus'>
          <button type='submit' onClick={handleMinus}>-</button>
        </div>
        </div>
        <div className='yuborish'>
            <button className='yuborish-btn'>Yuborish</button>
        </div>
    </form>
</div>
     </div> 
        </div>
    </div>
   
   </>
  )
}

export default Modal

     