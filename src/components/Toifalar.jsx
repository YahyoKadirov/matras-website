import { useEffect, useState } from 'react'
import './Toifalar.css'
import ToifaModal from './ToifaModal'
import Delete from '../images/icons/Delete.svg'

const Toifalar = () => {

const [showModal, setShowModal] = useState(false)
const [inputData, setInputData] = useState("")
const [datalar, setDatalar] = useState()
const [deleteToifa, setDeleteToifa] = useState();

  const [data, setData] = useState([]);

  
const [yengiCategory, setYengiCategory] = useState("")

    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token);
  const url = 'http://localhost:1212/admin/categories';
  useEffect(()=>{
  
    fetch(url,{
      headers:{
        'Authorization': token.token
      }
    
    })  
    .then((res) => res.json())
    .then((json) => setData(json))
  }, [datalar, deleteToifa]);

  let obj = {
    'category': yengiCategory,
    'isActive' : true
  }

  const urlpost = 'http://localhost:1212/admin/categories';
  const HandleAddModal = (e) => {
    e.preventDefault()
    setShowModal(false)

    fetch(urlpost, {
      method: 'POST',
        headers: {
          'Authorization' : token.token,
          'Content-type' : 'Application/json',
        },
        body: JSON.stringify(obj)
    })
    .then((res) =>res.json())
    .then((json)=> setDatalar(json))
    .catch((error)=> console.log("Xatolik", error))
  }


const handleDeleteToifa = (id) => {
    const deleteUrl = `http://localhost:1212/admin/categories/${id}`;

    fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-type': 'Application/json',
        Authorization: token.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setDeleteToifa(data));

  };



  return (
    <>
    <div>
      <table className='toifalar-table'>
        <thead>
               <tr>
                <th className='toifalar-head'>Toifalar</th>
               </tr>
          </thead>
       <tbody>
          {data?.map((item)=>(
            <tr>
              <td className='toifalar-body-1'>{item.category}
                  <img onClick={()=> handleDeleteToifa(item.id)} src={Delete} alt="delete" width={30} />
              </td>
              
            </tr>
          ))}
      </tbody>
      </table>
      <button onClick={()=> setShowModal(true)} className='qoshish'>Qoshish</button>
    </div>
    {
      showModal && <ToifaModal HandleAddModal={HandleAddModal} setYengiCategory={setYengiCategory}/>
    }
    </>
  )
}

export default Toifalar
