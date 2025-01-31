import React from 'react'
import LoanCalculator from './LoanCalculator'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
    <h2 className="text-xs blue tracking-widest font-medium title-font mb-1">
      LOAN CATEGORIES
    </h2>
    <h1 className="sm:text-3xl text-2xl font-medium title-font green">
      Explore Our Loan Options
    </h1>
  </div>
  <div className="flex flex-wrap -m-4">
    {/* Wedding Loans */}
    <NavLink className="p-4 md:w-1/2 lg:w-1/3" to={"SubCategories/wedding"}>
      <div className="flex rounded-lg h-full bg-white shadow-lg border green p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full blue text-white flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 8c1.38 0 2.5-1.12 2.5-2.5S13.38 3 12 3 9.5 4.12 9.5 5.5 10.62 8 12 8z" />
              <path d="M2 16v-2c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2" />
            </svg>
          </div>
          <h2 className="green text-lg title-font font-medium">
            Wedding Loans
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-gray-700">
            Subcategories: Valima, Furniture, Valima Food, Jahez<br />
            Maximum Loan: PKR 5 Lakh<br />
            Loan Period: 3 years
          </p>
        </div>
      </div>
    </NavLink>

    {/* Home Construction Loans */}
    <NavLink to={"/SubCategories/HomeConstruction"} className="p-4 md:w-1/2 lg:w-1/3">
      <div className="flex rounded-lg h-full bg-white shadow-lg border green p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full blue text-white flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M3 10v11h18V10" />
              <path d="M9 21V9l3-4 3 4v12" />
            </svg>
          </div>
          <h2 className="green text-lg title-font font-medium">
            Home Construction Loans
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-gray-700">
            Subcategories: Structure, Finishing, Loan<br />
            Maximum Loan: PKR 10 Lakh<br />
            Loan Period: 5 years
          </p>
        </div>
      </div>
    </NavLink>

    {/* Business Startup Loans */}
    <NavLink className="p-4 md:w-1/2 lg:w-1/3" to={"/SubCategories/Buisness"}>
      <div className="flex rounded-lg h-full bg-white shadow-lg border green p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full blue text-white flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 20h14M10 14l2 2 4-4" />
            </svg>
          </div>
          <h2 className="green text-lg title-font font-medium">
            Business Startup Loans
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-gray-700">
            Subcategories: Buy Stall, Advance Rent for Shop, Shop Assets, Shop Machinery<br />
            Maximum Loan: PKR 10 Lakh<br />
            Loan Period: 5 years
          </p>
        </div>
      </div>
    </NavLink>

    {/* Education Loans */}
    <NavLink className="p-4 md:w-1/2 lg:w-1/3" to={"/SubCategories/Education"}>
      <div className="flex rounded-lg h-full bg-white shadow-lg border green p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full blue text-white flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 2v20M2 7l10-5 10 5M2 17l10 5 10-5" />
            </svg>
          </div>
          <h2 className="green text-lg title-font font-medium">
            Education Loans
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-gray-700">
            Subcategories: University Fees, Child Fees Loan<br />
            Maximum Loan: Based on Requirement<br />
            Loan Period: 4 years
          </p>
        </div>
      </div>
    </NavLink>
  </div>
</div>

  <LoanCalculator />
</section>


  )
}

export default Home