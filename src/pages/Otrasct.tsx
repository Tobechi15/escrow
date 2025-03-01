import React from "react";
import { Clock, Copy } from "lucide-react";
import { StatusBadge } from "../components/Transactions/StatusBadge";
import { ChatPanel } from "../components/Transactions/ChatPanel";
import { ProofUpload } from "../components/Transactions/ProofUpload";
export function Otrasct() {
  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };
  return <div className="min-h-screen bg-gray-50">
      <main className="max-w-[1440px] mx-auto p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                Escrow Transaction #ETH289
              </h1>
              <p className="text-gray-500">Created on May 15, 2024</p>
            </div>
            <StatusBadge status="pending" />
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <div className="bg-white rounded-lg border p-6 space-y-4">
                <h2 className="text-lg font-medium">Transaction Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Buyer
                    </label>
                    <div className="mt-1 flex items-center gap-2">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        0x1234...5678
                      </code>
                      <button onClick={() => handleCopyAddress("0x1234...5678")} className="text-gray-400 hover:text-gray-600">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Seller
                    </label>
                    <div className="mt-1 flex items-center gap-2">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        0x9876...4321
                      </code>
                      <button onClick={() => handleCopyAddress("0x9876...4321")} className="text-gray-400 hover:text-gray-600">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Locked Amount
                    </label>
                    <p className="mt-1 text-2xl font-semibold">2.5 ETH</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Estimated Release
                    </label>
                    <div className="mt-1 flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>May 22, 2024</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                      Mark as Delivered
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      Release Funds
                    </button>
                    <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500">
                      Open Dispute
                    </button>
                  </div>
                </div>
              </div>
              <ProofUpload />
            </div>
            <div className="col-span-1">
              <ChatPanel />
            </div>
          </div>
        </div>
      </main>
    </div>;
}