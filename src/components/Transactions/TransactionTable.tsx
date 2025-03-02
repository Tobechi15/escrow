import { Eye, ArrowUpRight, AlertCircle } from "lucide-react";

const StatusBadge = ({
  status
}: {
  status: "pending" | "completed" | "disputed";
}) => {
  const styles = {
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
    disputed: "bg-red-100 text-red-800"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export const TransactionTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Wrapper for horizontal scrolling */}
      <div className="overflow-x-auto">
        <table className="w-full hidden md:table">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {["Escrow ID", "Buyer", "Seller", "Amount", "Status", "Actions"].map((header) => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    ESC-{1000 + i}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0x1234...5678</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0x8765...4321</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2.5 ETH</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={i % 3 === 0 ? "pending" : i % 3 === 1 ? "completed" : "disputed"} />
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
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View (Cards) */}
        <div className="md:hidden space-y-4 p-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex justify-between">
                <span className="text-blue-600 font-medium">ESC-{1000 + i}</span>
                <StatusBadge status={i % 3 === 0 ? "pending" : i % 3 === 1 ? "completed" : "disputed"} />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                <strong>Buyer:</strong> 0x1234...5678
              </p>
              <p className="text-sm text-gray-500">
                <strong>Seller:</strong> 0x8765...4321
              </p>
              <p className="text-sm text-gray-700">
                <strong>Amount:</strong> 2.5 ETH
              </p>
              <div className="flex gap-2 mt-3">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
