// import React, { useState } from 'react';
// import { useAuth } from '../../../Context/userContext';

// function Signup() {
//   const { signup } = useAuth();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     await signup(username, email, password);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
//         <form onSubmit={handleSignup} className="space-y-4">
//           <div className="mb-4">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               placeholder="Username"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="Email"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Password"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-500">
//             Already have an account?{' '}
//             <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
// zz