import React, { useRef, useState } from 'react'
import './ToifaModal.css'




const ToifaModal = ({setShowModal, setInputData, HandleAddModal, setYengiCategory}) => {
const handleSubmit = (e) =>{
   e.preventDefault()
   setInputData(inputData.current.value)
}

const [korsatModal, setKorsatModal] = useState(true) 


const handleAdd = () =>{
  fetch(URL)
  .then((res)=> res.json())
  .then((json)=> setData(json));
}




const inputData = useRef()
  return (
    <>
    { korsatModal && <div className='modal-backdrop'>
        <div className='modals'>
          <button onClick={()=> setKorsatModal(false)}>yopmoq</button>
            <h1 className='toifa-modal-qoshish'>Qoshish</h1>
            <h2 className='toifa-modal-kategoryanomi'>Kategoriya nomi </h2>
           <form onSubmit={HandleAddModal}>
           {/* <input className='toifa-modal-input' placeholder='masalan: Model B' type="text" ref={inputData} /> */}
           <select name="Modellar" className='toifa-modal-input' placeholder='masalan: Model B' ref={inputData} onChange={(e)=> setYengiCategory(e.target.value)} >
            <option value=""></option>
            <option value="Model A">Model A</option>
            <option value="Model B">Model B</option>
            <option value="Model C">Model C</option>
            <option value="Model D">Model D</option>
            <option value="Model F">Model F</option>
            
           </select>
           <button className='toifa-modal-btn' onClick={()=> handleAdd()}>qoshish</button>
      </form>
    </div>
    </div>}
    
    </>
  )
}

export default ToifaModal
