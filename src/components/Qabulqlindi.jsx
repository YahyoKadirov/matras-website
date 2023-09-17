import './Qabulqlindi.css'
import Modalrasm from '../images/modalrasm.png'
const Qabulqlindi = ({closeanotherModal}) => {

  return (
   <>
    <div className='modal-backdrop'>
        <div className='modals'>
             <div>
       <div className='buyurtma-box'>
                  <button onClick={closeanotherModal}>Yopmoq</button>
    <h1 className='buyurtma-title'>Arizangiz muvaffaqiyatli yuborildi</h1>
    <div className='modal-photo'>
        <img src={Modalrasm} alt="" />
    </div>
    <p className='m-5'>Tez orada operatorlarimiz siz bilan bog’lanishadi</p>
    
        <div className='yuborish'>
            <button className='yuborish-btn' onClick={closeanotherModal}>OK</button>
        </div>
</div>
     </div> 
        </div>
    </div>
   
   </>
  )
}

export default Qabulqlindi

     