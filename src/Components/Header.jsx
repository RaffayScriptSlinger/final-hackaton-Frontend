// export default function Header() {

//   return (
//     <header >
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  border-gray-600 shadow-lg shadow-gray-200 ">

//         <a className="flex title-font font-medium items-center mb-4 md:mb-0">
//           <img
//             className="  fill: text-white rounded-full object-contain "
//             src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" width={200}
//           ></img>
//         </a>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 blue font-semibold">Login</a>
//           <a className="mr-5 blue font-semibold">Sign Up</a>
//           <a className="mr-5 blue hover:text-indigo-500 font-semibold ">
//             Loan Calculator
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <header className="shadow-lg border-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img
            className="rounded-full object-contain"
            src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
            width={150}
            alt="Logo"
          />
        </a>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden ml-auto text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          { isOpen ? 0 : 1}

        </button>

       
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center md:ml-auto text-base`}
        >
          <Link className="mr-5  font-semibold" to={"/Signup"} >Sign Up</Link>
          <Link className="mr-5  font-semibold" to={"/Login"} >Login</Link>
          <Link className="mr-5  hover:text-indigo-500 font-semibold" to={"/calculator"}>
            Loan Calculator Raffay
           </Link>
        </div>
      </div>
    </header>
  );
}
