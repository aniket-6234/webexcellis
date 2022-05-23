import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmailContainer = () => {

  const [email, setEmail] = useState('');

  return (
    <>
      <div className="bg-[#F5F5F5] h-screen flex items-center justify-center">
         <div className=" w-[600px] h-72 shadow-md bg-white rounded-md flex items-center justify-center">
           <div className="w-[500px] h-52">
             <h3 className="uppercase text-xl tracking-wider font-bold">Enter Your Email</h3>
             <p className="mt-4 text-md">Email</p>
             <input 
               type="text" 
               className="mt-2 w-full h-12 shadow-md rounded-sm bg-[#F5F5F5]
               outline outline-1 outline-[#03658C] pl-4"
               value={email}
               onChange={e => setEmail(e.target.value)} 
            />
            <Link to="/form" >
             <button 
                className="mt-5 tracking-wider font-medium text-white w-full h-12 rounded-sm bg-[#03658C] hover:text-[#03658C] hover:bg-white hover:outline hover:outline-1 hover:outline-[#03658C]">NEXT</button>
             </Link>
           </div>
         </div>
      </div>
    </>
  )
}

export default EmailContainer