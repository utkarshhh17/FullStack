import axios from "axios"
import { motion } from "framer-motion";
import { useState } from "react";
import { ViewIcon } from "../../assets/ViewIcon";
import { useNavigate } from "react-router-dom";
export default function ResetPassword(){
    const [resetData,setResetData]=useState({email:'',password:'', newpassword:'', newconfirmpassword:''});

    const [showPassword, setShowPassword]= useState(false);
    const [showNewPassword, setShowNewPassword]= useState(false);
    const [showNewConfirmPassword, setShowNewConfirmPassword]= useState(false);
    const [error, setError]=useState(null);

    const navigate=useNavigate()

    const variants = {
        initial: {
          x: "30vw",
          opacity: 0,
          transition: { duration: 0.5 }
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 }
        },
        exit: {
          opacity: 0,
          transition: { duration: 0.5 }
        }
      };
    

      const handleChange=(e)=>{
        const {name,value}=e.target;
        setResetData((prevFormData)=>{
            return { ...prevFormData, [name]:value,}

    });
    };
    

    const handleClick=async (e)=>{
        if (!resetData.email || !resetData.password || !resetData.newpassword || !resetData.newconfirmpassword) {
            setError('Please fill in both email and password fields.');
            return;
        }
        if(resetData.newpassword!==resetData.newconfirmpassword){
            setError('Passwords are not matching');
            return;

        }  
        if (resetData.password===resetData.newpassword === resetData.newconfirmpassword) {
            setError('New Password cant be same as the old');
            return;
        }
        setError('')      
        e.preventDefault();

        const sendData={email:resetData.email, password:resetData.password , newpassword:resetData.newpassword}
           
        axios.post('http://localhost:8000/reset', sendData)
        .then((response) => {               
            
            const json=response.data;
            if (response.status === 200) {
                setResetData({email:'',password:'', newpassword:'', newconfirmpassword:''});
                
                navigate("/")
                
            }
            else{
                console.error('Request failed');
                setError(response.data.error)
                
            }                
        })

            
        .catch((error) => {
            console.error(error);
            setError(error.response.data.error);
        });

    };

  

    const marginTop=error==null?'mt-10':'mt-5';

    
    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-background1 bg-cover bg-no-repeat">

        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="relative bg-white flex flex-col h-auto w-[600px] shadow-xl items-center rounded-lg">
            <div className="mt-5 font-roboto text-2xl">Enter your details</div>
            {error &&
            <div className="text-red-400 mt-3">{error}</div>}
            <input type='text' onChange={handleChange} value={resetData.email} name="email" placeholder="Enter Email" className={`w-[25rem] outline-none border-b-black border-b-[1px] ${marginTop}`}></input>
           
            <div className="flex ml-[1vw]">
                <input type={showPassword ? 'text' : 'password'} onChange={handleChange} value={resetData.password} name="password" placeholder='Enter Old Password' className="w-[25rem] mt-10 outline-none border-b-black border-b-[1px]"></input>
                <button className="mt-10 cursor-pointer relative right-5" onClick={()=>{setShowPassword(!showPassword)}}><ViewIcon /></button>

            </div>

            <div className="flex ml-[1vw]">
                <input type={showNewPassword ? 'text' : 'password'} onChange={handleChange} value={resetData.newpassword} name="newpassword" placeholder='Type New Password' className="w-[25rem] mt-10 outline-none border-b-black border-b-[1px]"></input>
                <button className="mt-10 cursor-pointer relative right-5" onClick={()=>{setShowNewPassword(!showNewPassword)}}><ViewIcon /></button>

            </div>
            <div className="flex ml-[1vw]">
                <input type={showNewConfirmPassword ? 'text' : 'password'} onChange={handleChange} value={resetData.newconfirmpassword} name="newconfirmpassword" placeholder='Confirm New Password' className="w-[25rem] mt-10 outline-none border-b-black border-b-[1px]"></input>
                <button className="mt-10 cursor-pointer relative right-5" onClick={()=>{setShowNewConfirmPassword(!showNewConfirmPassword)}}><ViewIcon /></button>

            </div>
            
            <button onClick={handleClick} className="bg-black text-white py-2 px-5 rounded-sm hover:scale-110 mt-8 font-jost mb-8" >Reset</button>
        </motion.div>
       

        </div>
    )
}