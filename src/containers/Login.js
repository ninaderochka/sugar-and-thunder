import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useUserAuth } from '../AuthContext';
import { auth } from '../firebase';
import image from '../images/image.png';
import facebook from '../images/Facebook.svg';
import gmail from '../images/Google.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user] = useAuthState(auth)
  const { logIn } = useUserAuth();
  const navigate = useNavigate();


const googleProvider = new GoogleAuthProvider()
const fbProvider = new FacebookAuthProvider()

useEffect(() => {
  if(user) {
   navigate('/Home')
  }
})

const googleLogin = async () => {
  try {
const result = signInWithPopup(auth, googleProvider)
navigate('/Home')
return result
  } catch(err) {
    return { err: error.message };
  }
}

const fbLogin = async () => {
  try {
const result = signInWithPopup(auth, fbProvider)
navigate('/Home')
return result
  } catch(error) {
    return { error: error.message };
  }
}

// const signIn = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const [user] = userCredential
//       return true
//     } catch (error) {
//       return { error: error.message };
//     }
//   };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setEmail('');
  //   setPassword('');
  //   const res = await signIn(email, password);
  //   if (res.error) setError(res.error);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div className="h-screen w-screen bg-white mb-8">
      <div className="font-roboto px-20 mx-auto flex justify-between">
        <div className="grid grid-flow-row space-y-4 ml-20">
          <h1 className="uppercase text-5xl whitespace-nowrap mt-10 py-6">
            login
          </h1>
          <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border px-10 py-10 border-2 rounded min-w-min max-w-xl m-auto lg:w-96 md:mx-auto">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mt-5 flex flex-col space-y-5 text-input-grey">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-input-border box-border rounded-md text-sm p-7 "
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-input-border box-border rounded-md text-sm p-7"
                />
              </div>
              <div className="flex justify-center gap-6 mt-10 place-content-center mx-auto">
                <Link to="/Login">
                  <button
                    type="submit"
                    className="font-poppins font-normal text-button-blue text-2xl px-10 py-2 w-max whitespace-nowrap outline border-button-blue leading-tight rounded shadow-md focus:bg-button-blue focus:shadow-lg focus:ring-0 focus:text-black focus:outline-none active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Log in
                  </button>
                </Link>
                <Link to="/Signup">
                  <button
                    type="button"
                    className="font-poppins font-normal text-button-blue text-2xl px-10 py-2 w-max outline whitespace-nowrap border-button-blue leading-tight rounded shadow-md focus:bg-button-blue focus:shadow-lg focus:ring-0 focus:text-black focus:outline-none active:bg-button-blue/90 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="flex flex-row justify-center mb-8">
            <span className="absolute font-poppins bg-white px-4 font-light text-lg text-[#1D6B87]">
              Or
            </span>
            <div className="w-3/4 bg-button-blue mt-3 h-px" />
          </div>
          <div>
<Link to='/Login'><div className="flex justify-center cursor-pointer gap-12">
           <button type='button' onClick={fbLogin}><img src={facebook} alt="facebook logo"/></button>
            <button type='button' onClick={googleLogin}><img src={gmail} alt="gmail logo" /></button>
            </div></Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full w-full flex mr-20 m-auto">
          <img className="scale-125 md:hidden" src={image} alt="login" />
        </div>
      </div>
    </div>
  );
}

// export default function Login() {
//   return (
//     <div className='bg-white p-4 h-screen w-full flex-col m-auto flex justify-between'>
//         <div className='max-w-[400px] w-full mx-auto bg-white p-4 flex items-center'>
//             <img className=' m-auto flex justify-between max-w-[400px] w-full mx-auto bg-white p-4' src={image} alt="" />
//         </div>

//         <div className='flex justify-center items-center h-full'>
//         <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
//             <h2 className='text-4xl font-bold text-center py-4 font-poppins'>LOGIN</h2>
//             <div className='flex justify-between py-8'>
//                 <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center font-poppins'><AiFillFacebook className='mr-2' /> Facebook</p>
//                 <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center font-poppins'><FcGoogle className='mr-2' /> Google</p>
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Email</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col '>
//                 <label>Password</label>
//                 <input className='border relative bg-gray-100 p-2' type="password" />
//             </div>
//             <div className='flex justify-between font-poppins'>
//                <button className='w-28 h-50 py-4 px-2 mt-8 ml-3 bg-button-blue leading-tight shadow-md hover:bg-button-blue/90 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 scale-x-125 rounded hover:cursor-pointer text-black  border-button-blue font-poppins'>Login</button>
//                <button className='w-28 h-50 py-4 px-2 mt-8 mr-3 scale-x-125 rounded hover:cursor-pointer hover:shadow-lg text-button-blue border border-button-blue font-poppins'>Signup</button>
//             </div>
//         </form>
//     </div>
//     </div>
//   )
// }
