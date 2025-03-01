import React from "react";
import { Calendar, Check, X } from "lucide-react";
export const QuotesPage = () => {
  return <main className="flex-1 p-6 ml-64 mt-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Quotes</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Request Payment Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Request Payment</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Buyer's Wallet Address
                </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="0x..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Amount
                  </label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Currency
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>USDT</option>
                    <option>ETH</option>
                    <option>BNB</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Work Description / Terms
                </label>
                <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows={4} placeholder="Describe the work and terms..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deadline
                </label>
                <div className="relative">
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                  <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Conditions
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>50% upfront, 50% after delivery</option>
                  <option>100% in escrow until delivery</option>
                  <option>Custom payment schedule</option>
                </select>
              </div>
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send Quote
              </button>
            </form>
          </div>
          {/* Quote Review Panel */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Pending Quotes</h2>
            <div className="space-y-4">
              <QuoteCard address="0x1234...5678" amount="500 USDT" description="Website development - Frontend implementation" deadline="2024-02-15" />
              <QuoteCard address="0x8765...4321" amount="0.5 ETH" description="Smart contract audit and optimization" deadline="2024-02-20" />
            </div>
          </div>
        </div>
      </div>
    </main>;
};
const QuoteCard = ({
  address = "",
  amount = "",
  description ="",
  deadline=""
}) => {
  return <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm font-medium text-gray-900">{address}</p>
          <p className="text-lg font-semibold text-blue-600">{amount}</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
            <Check className="w-5 h-5" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="w-4 h-4 mr-1" />
        <span>Due: {deadline}</span>
      </div>
    </div>;
};