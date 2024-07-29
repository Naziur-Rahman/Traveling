
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImg from "../../assets/logo.jpg";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import MenuResponsive from './MenuResponsive';



const dropdownLinks = [
    {
      name: "Our Services",
      link: "/#services",
    },
    {
      name: "locations",
      link: "/#locations",
    },
    {
      name: "Contact Us",
      link: "/#contact_Us",
    }
]

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
        <div className='bg-gradient-to-r from-primary to secondary'>
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between py-[2px] px-4">
              <p className='text-white '>20% off on next booking</p>
              <p>Mobile No. +880 17195 0601</p>
            </div>
          </div>
        </div>
        
        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div>
              <Link to="/" onClick={()=>window.scrollTo(0,0)}>
              <img src={LogoImg} alt="Logo" className="h-16 ml-4"/>

              </Link>
            </div>
            {/* NavLink section */}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-6'>
                <li className='py-4'>
                  <NavLink to="/"  activeClassName="active" onClick={()=>window.scrollTo(0,0)}>Home</NavLink>
                </li>
                <li className='py-4'>
                  <NavLink activeClassName="active" to="/Blogs" onClick={()=>window.scrollTo(0,0)}>Blogs</NavLink>
                </li>
                <li className='py-4'>
                  <NavLink activeClassName="active" to="/Places" onClick={()=>window.scrollTo(0,0)}>Best Places</NavLink>
                </li>
                <li className='py-4'>
                  <NavLink activeClassName="active" to="/About" onClick={()=>window.scrollTo(0,0)}> About Us</NavLink>
                </li>

                {/* Dropdown section  */}
                

                 <li className='py-4 relative group cursor-pointer'>
                    <div className='dropdown  flex items-center'>
                      <span>Quick Links</span>
                      <span>
                      <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'>
                      </FaCaretDown>
                      </span>
                    </div>
                    <div className='absolute -left-9 top[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2'>
                      <ul>
                        {
                          dropdownLinks.map((data)=>{
                            return(
                              <li key={data.name}>
                              <Link to={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary'>
                                {data.name}
                              </Link>
                            </li>
                            );
                            
                          })
                        }
                      </ul>
                    </div>
                 </li>
              </ul>
            </div>
            {/* Booking button  */}
            <div className='flex items-center gap-4'>
              <button className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full mx-2' >
                Book Now 
              </button>
              {/* Mobile Hamburger Menu */}

              <div className='md:hidden block'>
                      {showMenu?(
                        <HiMenuAlt3 
                        onClick={toggleMenu} className="cursor-pointer transition-all" size={30}>
                        </HiMenuAlt3>
                       ):(
                        <HiMenuAlt3 
                        onClick={toggleMenu} className="cursor-pointer transition-all" size={30}>
                        </HiMenuAlt3>
                       )}
              </div>
            </div>
          </div>
        </div>
        <MenuResponsive setShowMenu={setShowMenu} showMenu={showMenu}></MenuResponsive>
      </div>
    </>
  )
}

export default Navbar
