import './Newproduct.css'
import { useFetch } from '../hooks/useFetch';
import Matras from '../images/Matras.png'
import Arava from '../images/icons/shopping_cart.png'
import { useState } from 'react';
import Modal from './Modal';
import Qabulqlindi from './Qabulqlindi';

const Newproduct = () => {
    const url = 'http://localhost:1212/api/products';
    const {data,isPending,error} = useFetch(url)
        const [showModal, setShowModal] = useState(false);
    const [anotherModal, setanotherModal ] = useState(false);
 const closeanotherModal = () =>{
        setanotherModal(false)
    }
  return (
    <div>
        <h2 className='text-center fs-1 mb-5'>Aksiyadagi Mahsulotlar</h2>
    {isPending && <div>Loading</div>}
    {Error && <div>{error}</div>}
    {data?.products?.map((product)=>(
        product.new_cost &&
         (
            <div id='aksiya' className='container' key={product.id}>
                
               <div className='obshi'>
                    <div className='aksya'>Aksiya</div>
                 <div className='rasm mt-5'>
                    <img className='product-img' src={Matras} alt="" />
                 </div>
                <div className='content' >
                <h2 className='product-name fs-3'>{product.name}</h2>
                 <div className='content-nmadr'>
                    <div>
                    Yuklama
                    <h4><strong>{product.weight} kg</strong></h4>
                </div>
                <div>
                    Kafolat
                    <h4><strong>{product.warranty} yil</strong></h4>
                </div>
                <div>
                    O'lchami
                    <h4><strong>{product.size}</strong></h4>
                </div>
                <div>
                    Sig'mi
                    <h4><strong>{product.status} kishilik</strong></h4>
                </div>
                 </div>
                 <div className='mt-3'>
                        Narxi <br />
                    <h3 className='eskinarx'>{product.cost}</h3>
                    <h2><b>{product.new_cost}</b></h2>
                </div>
                <button onClick={()=> {setShowModal(true)}}  className='product-btn'>Buyurtma berish <img src={Arava} alt="" /></button>
            </div>
            </div> 
            </div> 
            
        )
    ))}
    {showModal && <Modal setShowModal={setShowModal} setanotherModal={setanotherModal} >
                    
                    </Modal>}

                    {anotherModal && <Qabulqlindi closeanotherModal={closeanotherModal}>
                        
                        </Qabulqlindi>}
    
    </div>)}
  
  


export default Newproduct
