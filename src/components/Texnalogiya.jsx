import React from 'react'
import './Texnologiya.css'
import { useFetch } from '../hooks/useFetch';
import Rasm from '../images/aboutcompany.png'
import Tanlash1 from '../images/tanlash1.png'
import Tanlash2 from '../images/tanlash2.png'
import Tanlash3 from '../images/tanlash3.png'

const Texnalogiya = () => {
    const url = 'http://localhost:1212/api/technology';
    const {data,isPending,error} = useFetch(url)
    // console.log(data);
  return (
    <>
    <div>
      <h2 className='text-center fs-1 fw-medium'>Ishlab chiqarish texnologiyalari</h2>
      <div className="container overflow-auto">
        <div className="d-flex">
          {data &&
            data.map((item) => (
              <div className='texnalogya' key={item.id}>
                <div>
                  <h3 className='text-center mb-4'>{item.name}</h3>
                </div>
                <div>
                  <iframe
                    width="300"
                    height="290"
                    src={item.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}

        </div>
      </div>

      <div className=' container d-flex mt-5'>
        <div className=' kompanyaHaqida mt-5'>
            <h1 className='fs-1'>Dream Cloud <br /> kompaniyasi haqida</h1>
            <p className='mb-3'>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant <br />adipiscing ut sed pulvinar tellus, ut urna, fermentum:</p>
            <div className='kompanyaHaqida2 mb-5'>
                <ul>
                    <li>Penatibus viverra gravida rhoncus in.</li>
                    <li>Dolor integer in interdum viverra risus dolor enim.</li>
                    <li>Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.</li>
                </ul>
            </div>
      </div>
      <div className='m-4'>
        <iframe width="460" height="300" src="https://www.youtube.com/embed/tvPnrfQCiCo?si=HeON1fiB97rrbMUt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
      </div>
    <div className='container d-flex justify-content-between mt-5'>
        <div>
            <img src={Rasm} alt="" width={450} />
        </div>
        <div>
            <p className='mb-3'>Libero erat praesent ullamcorper eget tortor sed et. <br /> Nec id lobortis gravida vitae. Scelerisque id fusce vitae balo battar yana.</p>
            <div className='kompanyaHaqida2'>
                <ol>
                    <li> <b>1.</b> Penatibus viverra gravida rhoncus in.</li>
                    <li><b>2.</b>Dolor integer in interdum viverra risus dolor enim.</li>
                    <li><b>3.</b>Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.</li>
                    <li><b>4.</b>Facilisi mauris condimentum sagittis odio rhoncus semper.</li>
                </ol>
            </div>
            <p className='mt-3'>Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est <br />elementum feugiat arcu mauris tincidunt. Eget faucibus pharetra et luctus eget <br />ut fames. A cursus elementum egestas eu scelerisque id.</p>
        </div>
         
    </div>
    <div className='container'>
            <h1 className='fs-1 text-center mt-5 fw-medium'>Nega bizni tanlashadi </h1>
        <div className='d-flex justify-content-between mt-5'>
          <div className='tanlash'>
              <img src={Tanlash1} alt="" width={350}/>
              <h2 className='fs-4 text-center mt-5'>Yetkazib berish</h2>
              <p className='text-center mt-3'>Toshkent bo'ylab bepul o'lchov <br /> va etkazib berish</p>
        </div>
        <div className='tanlash'>
              <img src={Tanlash2} alt="" width={350} />
              <h2 className='fs-4 text-center mt-5'>Qo'llab-quvvatlash</h2>
              <p className='text-center mt-3'>Bizning qo'llab-quvvatlash xizmati sizga <br />har qanday savolda yordam beradi va <br /> menejerlarning</p>
              <h2 className='text-center mt-3 fs-5'><b>+998 97 144-24-42</b></h2>
        </div>
        <div className='tanlash'>
              <img src={Tanlash3} alt="" width={350}/>
              <h2 className='fs-4 text-center mt-5'>Kafolat</h2>
              <p className='text-center mt-3 mb-5'>Biz matraslarimiz uchun 8 yilgacha <br /> kafolat beramiz. Agar matras kamida 25 <br /> mm qisqartirilsa.</p>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Texnalogiya
