import { Slider } from "@mui/material";
import React, { useState, useEffect } from "react";

export const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(10); // Default loan amount in lakhs
  const [loanDuration, setLoanDuration] = useState(10); // Default tenure in years
  const [interestRate, setInterestRate] = useState(7.5); // Default interest rate

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleLoanAmountChange = (event, newValue) => {
    setLoanAmount(newValue);
  };

  const handleLoanDurationChange = (event, newValue) => {
    setLoanDuration(newValue);
  };

  const handleInterestRateChange = (event, newValue) => {
    setInterestRate(newValue);
  };

  // Calculate EMI, Interest Amount, and Total Amount Payable
  useEffect(() => {
    const principal = loanAmount * 100000; // Convert lakhs to actual amount
    const monthlyInterestRate = interestRate / (12 * 100); // Monthly interest rate in decimal
    const numberOfPayments = loanDuration * 12; // Total number of monthly payments

    // EMI calculation
    const emiValue =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const totalInterestAmount = emiValue * numberOfPayments - principal;
    const totalPayableAmount = principal + totalInterestAmount;

    setEmi(emiValue);
    setTotalInterest(totalInterestAmount);
    setTotalAmount(totalPayableAmount);
  }, [loanAmount, loanDuration, interestRate]);

  // Formatter for Indian currency format
  const formatToIndianCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="max-w-[1280px] mx-auto my-5 bg-white rounded-lg">
      <div className="grid sm:grid-cols-12 gap-10 shadow-lg border rounded-lg p-10">
        <div className="col-span-12">
          <h1 className="text-center text-2xl font-medium font-roboto">
            Home Loan EMI Calculator
          </h1>
          <hr
            className="w-[200px] h-[3px] opacity-100 rounded-full mx-auto border-0 mt-1"
            style={{
              background: "linear-gradient(to right, #4e54c8, #8f94fb)", // Blue gradient from deep blue to light blue
              boxShadow: "0px 4px 10px rgba(78, 84, 200, 0.3)", // Soft blue shadow
            }}
          />
        </div>
        <div className="col-span-6">
          <div className="flex flex-col justify-center">
            {/* Loan Amount Slider */}
            <div>
              <div className="flex justify-between items-center">
                <p>Loan Amount</p>
                <p className="text-gray-600 mt-2">
                  Amount: <strong>₹ {loanAmount} Lac</strong>
                </p>
              </div>

              <Slider
                sx={{ color: "#03002e" }}
                value={loanAmount}
                onChange={handleLoanAmountChange}
                min={1}
                max={100}
                step={1}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `₹ ${value} Lac`}
                marks={[
                  { value: 1, label: "₹1 Lac" },
                  { value: 100, label: "₹ 1 Cr" },
                ]}
              />
            </div>

            {/* Tenure Slider */}
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <p>Tenure (Years)</p>
                <p className="text-gray-600 mt-2">
                  Tenure: <strong>{loanDuration} Years</strong>
                </p>
              </div>

              <Slider
                sx={{ color: "#03002e" }}
                value={loanDuration}
                onChange={handleLoanDurationChange}
                min={1}
                max={30}
                step={1}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value} Years`}
                marks={[
                  { value: 1, label: "1 Year" },
                  { value: 30, label: "30 Years" },
                ]}
              />
            </div>

            {/* Interest Rate Slider */}
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <p>Interest Rate (% P.A.)</p>

                <p className="text-gray-600 mt-2 ps-5">
                  Interest Rate: <strong>{interestRate}%</strong>
                </p>
              </div>

              <Slider
                sx={{ color: "#03002e" }}
                value={interestRate}
                onChange={handleInterestRateChange}
                min={0.5}
                max={15}
                step={0.1}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value}%`}
                marks={[
                  { value: 0.5, label: "0.5%" },
                  { value: 15, label: "15%" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* EMI and Payment Details */}
        <div className="col-span-6">
          <div className="flex flex-col items-end gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-3">
                Monthly Home Loan EMI
              </h2>
              <p className="text-2xl text-end text-blue-600 font-semibold">
                ₹{formatToIndianCurrency(emi)}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-md font-medium text-gray-500">
                Principal Amount
              </h3>
              <p className="text-end font-semibold">
                ₹{formatToIndianCurrency(loanAmount * 100000)}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-md font-medium text-gray-500">
                Interest Amount
              </h3>
              <p className="text-end font-semibold">
                ₹{formatToIndianCurrency(totalInterest)}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-md font-medium text-gray-500">
                Total Amount Payable
              </h3>
              <p className="text-end font-semibold">
                ₹{formatToIndianCurrency(totalAmount)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
