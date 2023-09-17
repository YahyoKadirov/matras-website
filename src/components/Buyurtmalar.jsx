
import './Buyurtmalar.css';

    const Buyurtmalar = () => {
      return (
        <div>
          <table className='buyurtma-table'>
            <thead>
               <tr>
                <th className='buyurtma-head'>id</th>
               <th  className='buyurtma-head'>ismi</th>
               <th  className='buyurtma-head'>telefon raqami</th>
               <th  className='buyurtma-head'>Mahsulot Nomlari</th>
               <th  className='buyurtma-head'>Miqdor</th>
               </tr>
          </thead>
          <tbody>
              <tr>
                <td className='buyurtma-body'>6</td>
              <td className='buyurtma-body'>Jenny Wilson</td>
              <td className='buyurtma-body'>+998 90 123 45 67</td>
              <td className='buyurtma-body'>Ortopedik Eko matras</td>
              <td className='buyurtma-body'>4</td>
              </tr>
               <tr>
                <td className='buyurtma-body'>7</td>
              <td className='buyurtma-body'>Robert Fox</td>
              <td className='buyurtma-body'>+998 90 123 45 67</td>
              <td className='buyurtma-body'>Ortopedik Eko matras</td>
              <td className='buyurtma-body'>4</td>
              </tr>
              <tr>
                <td className='buyurtma-body'>3</td>
              <td className='buyurtma-body'>Wade Warren</td>
              <td className='buyurtma-body'>+998 90 123 45 67</td>
              <td className='buyurtma-body'>Ortopedik Eko matras</td>
              <td className='buyurtma-body'>4</td>
              </tr>
              <tr>
                <td className='buyurtma-body'>3</td>
              <td className='buyurtma-body'>Jane Cooper</td>
              <td className='buyurtma-body'>+998 90 123 45 67</td>
              <td className='buyurtma-body'>Ortopedik Eko matras</td>
              <td className='buyurtma-body'>4</td>
              </tr>
              
          </tbody>
          </table>
        </div>
      )
    }
    
    export default Buyurtmalar
    