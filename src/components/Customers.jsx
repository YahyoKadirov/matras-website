import './Customers.css'
import Delete from '../images/icons/Delete.svg'
const Customers = () => {
  return (
    <div>
      <table className='buyurtma-table'>
            <thead>
               <tr>
                <th className='buyurtma-head'>id</th>
               <th  className='buyurtma-head'>Sana</th>
               <th  className='buyurtma-head'>telefon raqami</th>
               <th  className='buyurtma-head qaytaaloqa'>qayta aloqa</th>
               </tr>
          </thead>
          <tbody>
              <tr>
                <td className='buyurtma-body'>6</td>
              <td className='buyurtma-body'>12:13-12.05.2021</td>
              <td className='buyurtma-body'>+998 90 123 45 67</td>
              <td className='buyurtma-body-2'><img src={Delete} alt="" /></td>
              
              </tr>
               <tr>
                <td className='buyurtma-body'>7</td>
              <td className='buyurtma-body'>12:13-12.05.2021</td>
              <td className='buyurtma-body'>+998 90 123 45 67</td>
              <td className='buyurtma-body-2'><img src={Delete} alt="" /></td>
              </tr>
              <tr>
                <td className='buyurtma-body'>3</td>
              <td className='buyurtma-body'>12:13-12.05.2021</td>
              <td className='buyurtma-body'>+998 90 123 45 67</td>
              <td className='buyurtma-body-2'><img src={Delete} alt="" /></td>
              </tr>
              <tr>
                <td className='buyurtma-body'>3</td>
              <td className='buyurtma-body'>12:13-12.05.2021</td>
              <td className='buyurtma-body'>+998 90 123 45 67</td>
              <td className='buyurtma-body-2'><img src={Delete} alt="" /></td>
              </tr>
              
          </tbody>
          </table>
    </div>
  )
}

export default Customers
