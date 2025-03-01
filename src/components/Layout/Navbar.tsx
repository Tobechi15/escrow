import React from "react";
import { Bell, User, Wallet} from "lucide-react";
export const Navbar = () => {
  return <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-600">Escrow Platform</h1>
        </div>
        
        <div className="flex items-center space-x-4">

          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>;
};