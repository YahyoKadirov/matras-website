import './MahsulotlarModal.css'

const MahsulotlarModal = ({setOpenModal}) => {


  return (
    <>
    <div className='modal-backdrop-mahsulotlar'>
                    
        <div className='modals-mahsulotlar'>
                <div className='mahsulotlar-modal-box'>
                    <button onClick={()=> setOpenModal(false)}>x</button>
                    <h3>toifalar</h3>
                    <select name="Toifalar" id="" className='mahsulotlar-select'>
                        <option></option>
                        <option value="Model A+">Model A+</option>
                        <option value="Model B+">Model B+</option>
                        <option value="Model C">Model C</option>
                        <option value="Model C+">Model C+</option>
                        <option value="Model D">Model D</option>
                    </select>
                    <h3>Tovar nomi</h3>
                    <input type="text" placeholder='masalan: Lux Soft Memory' className='mahsulotlar-inp' />
                    <h3>Narxi</h3>
                    <input type="number" placeholder='masalan: 20 000' className='mahsulotlar-inp'  />
                    <h3>Yuklama</h3>
                    <input type="number" placeholder='masalan: 200 kg' className='mahsulotlar-inp'  />
                </div>
                <div className='mahsulotlar-modal-box'>
                      <h3>Razmeri</h3>
                    <input type="text" placeholder='masalan: 200 x 140 x 40' className='mahsulotlar-inp' />
                    <h3>Kafolat</h3>
                    <input type="number" placeholder='masalan: 1 yil' className='mahsulotlar-inp'  />
                    <h3>sig'm</h3>
                    <select className='mahsulotlar-select' name="Sig'm" id="">
                        <option value="1 kwi">1</option>
                        <option value="2 kwi">2</option>
                        <option value="3 kwi">3</option>
                    </select>
                    <h3>Aksiya narxi</h3>
                    <input type="text" placeholder='masalan: 1 200 000' className='mahsulotlar-inp' />
                </div>
                <div className='mahsulotlar-modal-box-3'>
                    <h3>Malumot</h3>
                    <textarea name="" id="" cols="30" rows="8" placeholder='info...'></textarea>
                    <button className='mahsulot-qoshish'>qoshish</button>
                </div>
        </div>
    </div>
    </>

  )
}

export default MahsulotlarModal
