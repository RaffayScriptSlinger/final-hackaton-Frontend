import { useState } from "react";
import React from "react";

const LoanCalculator = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [deposit, setDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(3);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [error, setError] = useState("");

  // Loan categories and subcategories data
  const loanCategories = {
    "Wedding Loans": {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      maxPeriod: 3,
    },
    "Home Construction Loans": {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      maxPeriod: 5,
    },
    "Business Startup Loans": {
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000,
      maxPeriod: 5,
    },
    "Education Loans": {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on Requirement",
      maxPeriod: 4,
    },
  };

  // Handle loan calculation
  const calculateLoan = () => {
    if (!category || !subcategory || deposit <= 0 || loanPeriod <= 0) {
      setError("Please fill all the fields correctly.");
      return;
    }

    setError("");
    const maxLoan = loanCategories[category]?.maxLoan;
    const loanAmount = maxLoan - deposit;

    if (loanAmount < 0) {
      setError("Deposit exceeds maximum loan amount.");
      return;
    }

    const interestRate = 0.1; // Example: 10% interest rate
    const totalLoan = loanAmount * (1 + interestRate);
    const monthlyPayment = totalLoan / (loanPeriod * 12);

    setLoanAmount(totalLoan);
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="p-12">
       <div className="max-w-3xl mx-auto  bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Loan Calculator</h2>

      {/* Loan Category Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Select Loan Category</label>
        <select
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory("");
          }}
        >
          <option value="">--Select Category--</option>
          {Object.keys(loanCategories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Loan Subcategory Selection */}
      {category && (
        <div className="mb-4">
          <label className="block text-sm font-medium">Select Subcategory</label>
          <select
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          >
            <option value="">--Select Subcategory--</option>
            {loanCategories[category]?.subcategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Initial Deposit Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Initial Deposit (PKR)</label>
        <input
          type="number"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          value={deposit}
          onChange={(e) => setDeposit(parseInt(e.target.value) || 0)}
          placeholder="Enter deposit amount"
        />
      </div>

      {/* Loan Period Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Select Loan Period (Years)</label>
        <select
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(parseInt(e.target.value))}
        >
          <option value={3}>3 Years</option>
          <option value={4}>4 Years</option>
          <option value={5}>5 Years</option>
        </select>
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      {/* Calculate Button */}
      <div className="text-center">
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
          onClick={calculateLoan}
        >
          Calculate Loan
        </button>
      </div>

      {/* Loan Breakdown */}
      {loanAmount > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium">Loan Breakdown</h3>
          <p className="mt-2">Total Loan Amount: PKR {loanAmount.toFixed(2)}</p>
          <p className="mt-2">Monthly Payment: PKR {monthlyPayment}</p>
        </div>
      )}
    </div>

    </div>
   
  );
};

export default LoanCalculator;
