import './Product.css'
import { useFetch } from '../hooks/useFetch';
import Matras from '../images/Matras.png'
import Arava from '../images/icons/shopping_cart.png'
import Modal from './Modal';
import { useState } from 'react';
import Qabulqlindi from './Qabulqlindi';

const Product = () => {
    const url = 'http://localhost:1212/api/products';
    const {data,isPending,error} = useFetch(url)
    // console.log(data);
    const [showModal, setShowModal] = useState(false);
    const [anotherModal, setanotherModal ] = useState(false);


    // const closeModal = ()=> {
    //     setShowModal(false)
    // }
    const closeanotherModal = () =>{
        setanotherModal(false)
    }
    // const openanotherModal = () =>{
    //     setanotherModal(true)
    // }

    return (

    <div>
    {isPending && <div>Loading</div>}
    {error && <div>{error}</div>}
    {data && data?.products?.map((product)=>{
        return (
            <>
            { <div id='katalog' className='container' key={product.id}>
                
                <div className='obshi'>
                        <p className='yengi-tavar'>yengi mahsulot</p>

                 <div className='rasm mt-5'>
                    <img className='product-img' src={Matras} alt="" />
                 </div>
                <div className='content' >
                <h2 className='product-name'>{product.name}</h2>
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
                    <strong>
                        Narxi <br />
                    <h3>{product.cost}</h3>
                    </strong>
                </div>
                <button onClick={()=> {setShowModal(true)}}  className='product-btn'>Buyurtma berish <img src={Arava} alt="" /></button>
            </div>
            </div>
            </div>}

            <>
                {showModal && <Modal setShowModal={setShowModal} setanotherModal={setanotherModal} >
                    
                    </Modal>}

                    {anotherModal && <Qabulqlindi closeanotherModal={closeanotherModal}>
                        
                        </Qabulqlindi>}
            </>
            
            </>
           
        )
    })}
    
    </div>
  )
  
}

 
  

export default Product
