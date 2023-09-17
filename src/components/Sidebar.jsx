import './Sidebar.css'
import Buyurtmalaicon from '../images/icons/Home.svg'
import Customersicon from '../images/icons/customers.icon.png'
import Toifalaricon from '../images/icons/view_column.svg'
import Mahsulotlaricon from '../images/icons/shopping_cart.svg'
import Texnologiyaicon from '../images/icons/texnologiyaicon.svg'
import Manzilicon from '../images/icons/manzilicon.svg'
import Icon from '../images/icons/bedicon.svg'
import Matrassue from '../images/icons/Matrassue.svg'
import Profile from '../images/icons/Profile.svg'
import { Link } from 'react-router-dom'




import React, { useState } from "react";

import Buyurtmalar from "./Buyurtmalar";
import Customers from "./Customers";
import Toifalar from "./Toifalar";
import SideMahsulotlar from "./SideMahsulotlar";
import SideTexnologiya from "./SideTexnologiya";
import SideManzil from "./SideManzil";

const Sidebar = () => {
  const baseData = [
    {
      id: 2,
      href: "/admin/buyurtmalar",
      name: "Buyurtmalar",
      pic: Buyurtmalaicon,
      page: <Buyurtmalar />,
    },
    {
      id: 3,
      href: "/admin/customers",
      name: "Customers",
      pic: Customersicon,
      page: <Customers />,
    },
    {
      id: 4,
      href: "/admin/toifalar",
      name: "Toifalar",
      pic: Toifalaricon,
      page: <Toifalar />,
    },
    {
      id: 5,
      href: "/admin/sidemahsulotlar",
      name: "Mahsulotlar",
      pic: Mahsulotlaricon,
      page: <SideMahsulotlar />,
    },
    {
      id: 6,
      href: "/admin/sidetexnologiya",
      name: "Texnologiya",
      pic: Texnologiyaicon,
      page: <SideTexnologiya />,
    },
    {
      id: 7,
      href: "/admin/sidemanzil",
      name: "Manzil",
      pic: Manzilicon,
      page: <SideManzil />,
    },
  ];
  const [showPage, setShowPage] = useState(<Buyurtmalar />);
  const handlePage = (id) => {
    baseData.filter((item) => {
      if (id == item.id) {
        setShowPage(item.page);
      }
    });
  };
  return (
    <>
    <div className='admin-panel'>
        <div className='sidebar'>
      <div>
        <div>
          <ul>
            <div className='sidebar-header'>
              <img src={Icon} alt="" />
              <li>
              <Link to="/admin/">
                
                <img
                  src={Matrassue}
                  alt=""
                />
              </Link>
            </li>
            </div>
            {baseData?.map((item) => (
              <div className='sidebar-item'>
                <img  src={item.pic} alt="" />
                <li>
                <Link
                 className='sidebar-item-item'
                  onClick={() => handlePage(item.id)}
                  to={item.href}
                >
                  
                  {item.name}
                </Link>
              </li>
              </div>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
    {/* -------------------- */}
    <div>
      <div className='admin-nav'>
        <input type="text" className='nav-input' placeholder='User' />
       <div className='admin-nav-2'>
        <div className='nav-img'>
         <img src={Profile} alt="" />
       </div>
       <h2 className='johndoe'>John Doe</h2>
       </div>
    </div>
    <div className='admin-main'>
      <div>{showPage}</div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Sidebar;