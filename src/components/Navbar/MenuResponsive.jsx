import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },{
    name: "About",
    link: "/about",
  },{
    name: "Blogs",
    link: "/blogs",
  },{
    name: "Best Places",
    link: "/places",
  },
]


const MenuResponsive = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[70%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
      

      <div className='Navbar_card'>
          {/* Top Section */}
          <div>
            <div className='flex items-center gap-2 justify-start mb-8'>
             <div className=' '>
              <FaUserCircle size={50} className='text-primary'></FaUserCircle>
              
              </div>
             <div>
              <h1>Hello User</h1>
              <h1>Premium user</h1>
             </div>
            </div>
          </div>
          {/* NavLink Section  */}
          <div className='text-black mt-12'>
            <ul className='space-y-4 text-xl'>
              {
                navbarLinks.map((link, index) => (
                  <li key={index} onClick={()=> setShowMenu(false)}>
                    <a href={link.link} className="mb-5 inline-block">{link.name}  </a>
                  </li>
                ))
              }
            </ul>
          </div>
      </div>
    </div>
  );
};

MenuResponsive.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default MenuResponsive;
