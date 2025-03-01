import React, { useState } from "react";
import { Send } from "lucide-react";
export const ChatPanel = () => {
  const [message, setMessage] = useState("");
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sending message
    setMessage("");
  };
  return <div className="flex flex-col h-[400px] border rounded-lg bg-white">
      <div className="p-4 border-b bg-gray-50">
        <h3 className="font-medium">Transaction Chat</h3>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <div className="flex flex-col gap-1">
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] self-start">
            <p className="text-sm text-gray-900">
              Hello, I've sent the payment.
            </p>
            <span className="text-xs text-gray-500">Buyer • 2:30 PM</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-blue-100 rounded-lg p-3 max-w-[80%] self-end">
            <p className="text-sm text-gray-900">
              Great, I'll process your order right away.
            </p>
            <span className="text-xs text-gray-500">Seller • 2:32 PM</span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex gap-2">
          <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your message..." className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>;
};