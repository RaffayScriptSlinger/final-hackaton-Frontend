export default function Header() {

  return (
    <header >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  border-gray-600 shadow-lg shadow-gray-200 ">

        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img
            className="  fill: text-white rounded-full object-contain "
            src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" width={200}
          ></img>
          <span className="ml-3 text-xl">SMA</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-indigo-500 font-semibold">Login</a>
          <a className="mr-5 hover:text-indigo-500 font-semibold">Sign Up</a>
          <a className="mr-5 hover:text-indigo-500 font-semibold ">
            Loan Calculator
          </a>
        </nav>
      </div>
    </header>
  );
}
