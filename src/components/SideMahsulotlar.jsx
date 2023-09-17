import { useEffect, useState } from 'react';
import MahsulotlarModal from './MahsulotlarModal';
import './SideMahsulotlar.css';


const SideMahsulotlar = () => {

  const [getProduct, setGetProduct] = useState([])

 //  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoU'

 const URLgetProduct = 'http://localhost:1212/admin/products'

 useEffect(()=> {
   const token = JSON.parse(localStorage.getItem("token"));

   fetch(URLgetProduct, {
    headers :{
      Authorization: token.token,
    }
   })
   .then((res)=> res.json())
   .then((jsonn)=> setGetProduct(jsonn))
 }, [])
const datas = getProduct.products
console.log(datas);


  const [openModal, setOpenModal] = useState(false)
  return (
   <>
    <div>
      <table className='toifalar-table'>
        <thead>
               <tr>
                <th className='toifalar-head'>Mahsulot nomlari</th>
                <th className='toifalar-head'>Toifalar</th>
                <th className='toifalar-head'>Narxi</th>
                <th className='toifalar-head'>Yuklama</th>
                <th className='toifalar-head'>Razmeri</th>
               </tr>
          </thead>
            <tbody>
                  {datas && datas.map((item)=>(


                    <>
                    <tr className='roww' >
                    <td className='toifalar-body-1'>{item.name}</td>
                    
                    <td  >{item.category}</td>
                    <td >{item.cost}</td>
                    <td >{item.weight}</td>
                    <td >{item.size}</td>
                    </tr>
                    <tr>

                    </tr>
                    </>
                      
  
                    
                  
                  ))}
                  
            </tbody>
      </table>
      <button className='qoshish' onClick={() => setOpenModal(true)}>Qoshish</button>
    </div>
    

  {openModal && <MahsulotlarModal setOpenModal = {setOpenModal}/>}
   </>
  )
}






export default SideMahsulotlar
