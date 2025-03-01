import React from "react";
import { Wallet } from "lucide-react";
export const WalletSection = () => {
  return <section className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Wallet Management</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3">
            <Wallet className="w-5 h-5 text-gray-700" />
            <div>
              <p className="font-medium">MetaMask</p>
              <p className="text-sm text-gray-500">0x1234...5678</p>
            </div>
          </div>
          <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Disconnect
          </button>
        </div>
        <button className="w-full px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Connect Another Wallet
        </button>
      </div>
    </section>;
};