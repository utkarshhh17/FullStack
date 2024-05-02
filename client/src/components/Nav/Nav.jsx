import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
export default function Nav(){
    
    
    // const location = useLocation();
    // const [bgClass, setBgClass] = useState('');
    // const [showLinks, setShowLinks] = useState(false);
    const {user, dispatch}=useAuthContext()
    const [showMenu, setShowMenu]=useState(false)
    const navigate=useNavigate();

    const handleClick=()=>{
      setShowMenu(!showMenu)
    }
    const handleLogOut=()=>{
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});
        navigate("/login")

    }

    
    
    // const toggleLinks = () => {
    //   setShowLinks(!showLinks);
    // };

  
    return(
        <div className={`flex justify-between text-white bg-[#2b2b2b] py-5 `}>

            <div className="flex  small:text-3xl small:basis-1/4 justify-between ml-7 font-oswald text-4xl cursor-pointer"><Link to="/">FullStack</Link></div>
            
            
            <div className="flex justify-between mr-[5vw] font-open-sans text-[1.3vw] font-bold small:hidden">
               
                <div>
                {user &&
                <div className=''>
                <button onClick={handleClick} className="transition h-10 flex items-center justify-center cursor-pointer hover:font-bold text-lg
               hover:bg-white px-2 duration-500 hover:shadow-md hover:text-black rounded-2xl" >
                 {user.username}</button>
                 
                 
                 {showMenu && 
                 <div className='flex absolute flex-col right-[4.9vw] bg-white text-black font-lato text-sm rounded-md shadow-xl'>
                    <div className='border-b-gray-200 border-b-2 hover:bg-gray-300 cursor-pointer py-2 px-4'><Link to="/reset">Reset Pasword</Link></div>
                    <div className='hover:bg-gray-300 cursor-pointer  py-2 px-4' onClick={handleLogOut}>Logout</div>
                 </div>
                 }
                 </div>
                }
                </div>
            </div>
            
            
            
            
{/*             
            <div className='large:hidden small:mr-5 small:mt-3'>
              <button onClick={toggleLinks} className="text-white font-open-sans p-2 text-sm h-auto w-auto rounded-md bg-[#0f056e]">
                  {showLinks ? 'Menu' : 'Menu'}
              </button>

              {showLinks &&
                <div className='flex flex-col absolute right-10 bg-white rounded-md px-3 shadow-xl text-black'>
                  <div className="hover:font-bold hover:scale-110 active:bg-[#7e7b7b] cursor-pointer mt-2 border-b-2"><Link to="/products">Products</Link></div>
                  <div className="hover:font-bold hover:scale-110 cursor-pointer mt-2 border-b-2">About</div>
                  <div className="hover:font-bold hover:scale-110 cursor-pointer mt-2 border-b-2">Contact Us</div>
                  {!user && (
                    <Link to="/login">
                      <div className="mt-2 active:bg-[#5b5959] relative bottom-1 mb-2 flex items-center hover:bg-white hover:text-black rounded-lg hover:shadow-md">
                        Sign In
                      </div>
                    </Link>
                  )}
                  {user && (
                    <button onClick={handleClick} className="mt-2 active:bg-[#575555] transition h-10 flex items-center justify-center cursor-pointer hover:font-bold text-xl hover:bg-white duration-500 hover:shadow-md hover:text-black w-[100px] rounded-2xl">
                      Logout
                    </button>
                  )}
              </div>
              }

            </div> */}
        </div>
    )


}