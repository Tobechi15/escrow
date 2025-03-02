import React from "react";
import { Search, Calendar } from "lucide-react";

export const TransactionFilter = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
      <div className="flex flex-wrap gap-4">
        {/* Search Bar */}
        <div className="flex-1 min-w-[240px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by ID or wallet address"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Status Filters (stacked on small screens) */}
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300">All</button>
          <button className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">Resolved</button>
          <button className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">Disputed</button>
        </div>

        {/* Date Range Picker (moves below on small screens) */}
        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Calendar size={20} />
          Date Range
        </button>
      </div>
    </div>
  );
};
