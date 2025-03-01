import React from "react";
import { Eye, ArrowUpRight, AlertCircle } from "lucide-react";

const StatusBadge = ({
  status
}: {
  status: "pending" | "resolved" | "disputed";
}) => {
  const styles = {
    pending: "bg-yellow-100 text-yellow-800",
    resolved: "bg-green-100 text-green-800",
    disputed: "bg-red-100 text-red-800"
  };
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>;
};
export const TransactionTable = () => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Escrow ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Buyer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[...Array(5)].map((_, i) => <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    ESC-{1000 + i}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  0x1234...5678
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  0x8765...4321
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2.5 ETH</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={i % 3 === 1 ? "resolved" : "disputed"} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Eye size={20} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <ArrowUpRight size={20} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <AlertCircle size={20} />
                    </button>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};