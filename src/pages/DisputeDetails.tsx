import React from "react";
import { MessageSquare, Upload, Users } from "lucide-react";
export const DisputeDetails = () => {
  return <div className="w-full min-h-screen bg-gray-100">
  <div className="space-y-6 pt-16 md:pl-64">
    <div className="p-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Dispute Summary</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Dispute ID</p>
            <p className="font-medium">#DS-2024-001</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Under Review
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Transaction Amount</p>
            <p className="font-medium">2.5 ETH</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Submitted By</p>
            <p className="font-medium">Buyer</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MessageSquare size={20} />
            Live Chat
          </h3>
          <div className="border rounded-lg p-4 h-64 mb-4 bg-gray-50">
            {/* Chat messages would go here */}
          </div>
          <div className="flex gap-2">
            <input type="text" placeholder="Type your message..." className="flex-1 px-3 py-2 border rounded-lg" />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users size={20} />
            Community Voting
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>In Favor of Buyer</span>
              <span className="font-medium">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{
              width: "65%"
            }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span>In Favor of Seller</span>
              <span className="font-medium">35%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{
              width: "35%"
            }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Evidence Upload</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop files here, or click to select files
          </p>
        </div>
      </div>
      </div>
      </div>
    </div>;
};