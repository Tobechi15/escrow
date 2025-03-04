import React, { useState } from "react";
import { ArrowRight, Wallet, Calendar, FileText } from "lucide-react";

export const CreateEscrow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    buyerAddress: "",
    sellerAddress: "",
    amount: "",
    currency: "USDT",
    paymentTerms: "50-50",
    deadline: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <main className="pt-16 px-4 md:px-6 lg:px-64">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
            Create New Escrow
          </h1>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto md:mx-0">
              {["Details", "Payment", "Confirm"].map((step, index) => {
                const stepNumber = index + 1;
                return (
                  <React.Fragment key={step}>
                    <div
                      className={`flex items-center ${
                        currentStep >= stepNumber
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
                        {stepNumber}
                      </div>
                      <span className="ml-2 hidden sm:block">{step}</span>
                    </div>
                    {stepNumber < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 sm:mx-4 ${
                          currentStep >= stepNumber + 1
                            ? "bg-blue-600"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Transaction Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Web Development Project"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Buyer's Wallet Address
                    </label>
                    <input
                      type="text"
                      name="buyerAddress"
                      value={formData.buyerAddress}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter wallet address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Seller's Wallet Address
                    </label>
                    <input
                      type="text"
                      name="sellerAddress"
                      value={formData.sellerAddress}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter wallet address"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Currency
                      </label>
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="USDT">USDT</option>
                        <option value="ETH">ETH</option>
                        <option value="BNB">BNB</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment Terms
                    </label>
                    <select
                      name="paymentTerms"
                      value={formData.paymentTerms}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="50-50">
                        50% upfront, 50% after completion
                      </option>
                      <option value="30-70">
                        30% upfront, 70% after completion
                      </option>
                      <option value="100">100% after completion</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Deadline
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add any additional details or requirements..."
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Create Escrow
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Summary Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Transaction Summary</h3>
                <p className="text-sm text-gray-600">Title: {formData.title || "Not specified"}</p>
                <p className="text-sm text-gray-600">Amount: {formData.amount || "Not specified"} {formData.currency}</p>
                <p className="text-sm text-gray-600">Deadline: {formData.deadline || "Not specified"}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
