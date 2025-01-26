import { useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"
      } body-font`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img
            className="w-12 h-12 text-white  bg-indigo-500 rounded-full object-cover "
            src="data:image/png;base64,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"
          ></img>
          <span className="ml-3 text-xl">SMA</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-indigo-500 font-semibold">Login</a>
          <a className="mr-5 hover:text-indigo-500 font-semibold">Sign Up</a>
          <a className="mr-5 hover:text-indigo-500 font-semibold">
            Loan Calculator
          </a>
        </nav>
        {/* <button
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={toggleTheme}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button> */}
      </div>
    </header>
  );
}
