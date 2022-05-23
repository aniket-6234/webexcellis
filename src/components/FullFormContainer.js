import React, { useState, useEffect } from 'react';
import EyeOff from '../images/eye-off.svg'
import EyeOn from '../images/eye-on.svg'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';


const FullFormContainer = () => {

  const history = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [showPassword, setShowPassword] = useState(true);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const showToggle = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = async () => {
     try {
      let { data } = await axios.post('https://testapi.webexcellis.in/api/users/signUp', {
        firstName, 
        lastName,   
        password,  
        email,
       })
     console.log(data);
     }
     catch(err) {
       console.log(err);
     }
  }

  const handleUpdate = async () => {
    try {
      let { data } = await axios.put(`https://testapi.webexcellis.in/api/users/${params.get('id')}`, {
        firstName, 
        lastName,    
        email,
        password, 
       })
     console.log(data);
     history.push('/data')
     }
     catch(err) {
       console.log(err);
     }
  }

  useEffect(() => {
    if(params.get('id')) {
      setEmail(params.get('email'))
      setFirstName(params.get('firstName'))
      setLastName(params.get('lastName'))
      setPassword(params.get('password'))
    }
  }, [])


  return (
    <>
      <div className="bg-[#F5F5F5] h-screen flex items-center justify-center">
         <div className="w-[600px] h-[450px] shadow-md bg-white rounded-md flex items-center justify-center">
           <div className="w-[500px] h-[400px] mt-6">
             <h3 className="uppercase text-xl tracking-wider font-bold">Let's Create Your Account</h3>
             <p className="mt-4 text-md">Email</p>
             <input 
               type="text" 
               className="mt-2 w-full h-12 shadow-md rounded-sm bg-[#F5F5F5]
               outline outline-1 outline-[#03658C] pl-4" 
               value={email}
               onChange={e => setEmail(e.target.value)}
             />

             <div className="flex justify-between items-center w-full">
               <div className="w-[250px]">
                 <p className="mt-4 text-md">First Name</p>
                 <input 
                    type="text" 
                    className="mt-2 w-11/12 h-12 shadow-md rounded-sm bg-[#F5F5F5]
                    outline outline-1 outline-[#03658C] pl-4" 
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                 />
               </div>
               <div className="w-[240px]">
                 <p className="mt-4 text-md">Last Name</p>
                 <input 
                   type="text" 
                   className="mt-2 w-full h-12 shadow-md rounded-sm bg-[#F5F5F5]
                   outline outline-1 outline-[#03658C] pl-4" 
                   value={lastName}
                   onChange={e => setLastName(e.target.value)}
                 />
               </div>
             </div>

             {!params.get('id') && 
               <>
                 <p className="mt-4 text-md">Password</p>
                  <div className="mt-2 flex justify-between items-center w-full h-12 shadow-md rounded-sm bg-[#F5F5F5] outline outline-1 outline-[#03658C]">
                    <input 
                      type={showPassword ? "password" : "text" } 
                      className="w-96 outline-none pl-4 h-full bg-transparent" 
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <div onClick={() => showToggle()}>
                      {showPassword === true ? 
                      <img className="mr-4 w-4 cursor-pointer" src={EyeOn} alt="eye-icon" />
                      :
                      <img className="mr-4 w-4 cursor-pointer" src={EyeOff} alt="eye-icon" />}
                    </div>
                  </div>
               </>
             }

             <Link to="/data" >
             <button onClick={params.get('id') ? handleUpdate : handleSubmit } className="mt-5 tracking-wider font-medium text-white w-full h-12 rounded-sm bg-[#03658C] hover:text-[#03658C] hover:bg-white hover:outline hover:outline-1 hover:outline-[#03658C]">{params.get('id') ? "Update" : "Next"}</button>
             </Link>
           </div>
         </div>
      </div>
    </>
  )
}

export default FullFormContainer