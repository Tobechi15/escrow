import React from "react";
type Transaction = {
  buyer: string;
  seller: string;
  amount: string;
  currency: string;
  status: "pending" | "released" | "disputed";
};
const transactions: Transaction[] = [{
  buyer: "0x1234...5678",
  seller: "0x8765...4321",
  amount: "1.5",
  currency: "ETH",
  status: "pending"
}, {
  buyer: "0x2345...6789",
  seller: "0x9876...5432",
  amount: "500",
  currency: "USDT",
  status: "released"
}, {
  buyer: "0x3456...7890",
  seller: "0x0987...6543",
  amount: "0.8",
  currency: "ETH",
  status: "disputed"
}];
export const TransactionsTable = () => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-700/50">
        <h2 className="text-lg font-medium">Recent Transactions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Buyer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx, i) => <tr key={i} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tx.buyer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tx.seller}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tx.amount} {tx.currency}
                </td>
                <td className="px-6 py-3.5">
                  <StatusBadge status={tx.status} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};
const StatusBadge = ({
  status
}: {
  status: Transaction["status"];
}) => {
  const colors = {
    pending: "bg-yellow-500/20 text-yellow-400",
    released: "bg-green-500/20 text-green-400",
    disputed: "bg-red-500/20 text-red-400"
  };
  return <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>;
};