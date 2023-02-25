// import React, { useState } from 'react';
// import "../styles/Login.css";
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from "../firebase_log.js";
// import Logo from "../assets/kitchen-tools.png";
// import { useLottie } from "lottie-react";
// import groovyWalkAnimation from "../assets/login.json";

// function Login() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const login = event => {
//         event.preventDefault(); // prevent refresh
//         auth.signInWithEmailAndPassword(email,password)
//         .then((auth) => {
//             //logged in, redirect to home page
//             navigate('/menu');
//         })
//         .catch(e => alert(e.message))
//     };
//     const register = event => {
//         event.preventDefault(); // prevent refresh

//         auth.createUserWithEmailAndPassword(email,password)
//         .then((auth) => {
//             //created a user and logged in, redirect to home page
//             navigate('/menu');
//         })
//         .catch((e) => alert(e.message))
//     };

//     const Anime = () => {
//         const options = {
//           animationData: groovyWalkAnimation,
//           loop: true
//         };
      
//         const { View } = useLottie(options);
      
//         return <>{View}</>;
//       };


//   return (
//     <div className='login'>
//         <div className="anime">
//         <Link to='/'>
//             <Anime />   
//         </Link>
//         </div> 
//         <div className='login__container'>
//             <h1>Sign in</h1>
//             <form>
//                 <div className='form__container'>
//                 <h3>E-mail</h3>
//                 <input value ={email} onChange={event => setEmail(event.target.value)} type="email"/>
//                 <h3>Password</h3>
//                 <input value = {password} onChange={event => setPassword(event.target.value)} type="password"/>
//                 <button onClick= {login} type="submit" className='login__signinbutton'>Sign in</button>
//                 </div>
//             </form>
//             <button onClick= {register} className='login__registerbutton'>Create your Amazon Account</button>
//         </div>
//     </div>
//   )
// }

// export default Login