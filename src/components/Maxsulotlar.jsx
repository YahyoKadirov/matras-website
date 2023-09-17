import React from 'react'
import './Maxsulotlar.css'
import { useFetch } from '../hooks/useFetch';

const Maxsulotlar = () => {
    const url = 'http://localhost:1212/api/statistics';
    const {data,isPending,error} = useFetch(url)
// console.log(data);

  return (
    <div>
    {isPending && <div>Loading</div>}
    {error && <div>{error}</div>}
    {data && (
        <>
           <div className='info-products'>
             <div>
            <h1>{data.experience}</h1>
            <h4>yillik tajriba</h4>
        </div>
        <div>
            <h1>{data.clients}</h1>
            <h4>mamnun mijozlar</h4>
        </div>
        <div>
            <h1>{data.warranty}</h1>
            <h4>yillik kafolat</h4>
        </div>
        <div>
            <h1>{data.delivery}</h1>
            <h4>kunda yetkazish</h4>
        </div>
           </div>
        <h1 className='maxsulotla-title mb-5 mt-5'>Bizning mahsulotlar</h1>
        <div className='maxsulotla-btn'>
                <button className='btn-item'>Barchasi</button>
                <button className='btn-item'>Model A+</button>
                <button className='btn-item'>Model B+</button>
                <button className='btn-item'>Model C</button>
                <button className='btn-item'>Model C+</button>
                <button className='btn-item'>Model D</button>
                <button className='btn-item'>Model Yevro</button>
                <button className='btn-item'>Yangi Tovarlar</button>
                <button className='btn-item'>Model A</button>
        </div>
        <hr />
        </>
    )}
    </div>
  )
}

export default Maxsulotlar
