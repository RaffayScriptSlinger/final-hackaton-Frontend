import React from "react";
import { BiSolidLogInCircle } from "react-icons/bi";

function SignUp() {
  return (
    <div className="flex justify-evenly w-full h-screen  items-center">
      <div>
        <h1 className="font-bold text-3xl text-start"><span className="blue">Login</span> To
          <br /> get Awesomes <span className="green">Loans</span></h1>
      </div>
      <div className="w-72 border border-black h-72">
      <div className="flex justify-center align-middle">
      <BiSolidLogInCircle   />
      </div>
        <input type="text" className="w-auto" />
     <input type="text" />
      </div>
    </div>
  );
}

export default SignUp;
