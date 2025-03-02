import { useState } from "react";
import { Bell, User, Wallet, Menu, X, Home, Plus, ClipboardList, DollarSign, Scale, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when an option is tapped
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="h-full flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">Escrow Platform</h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-4">
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

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden p-2 rounded-full hover:bg-gray-100">
          {isOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu (Including Sidebar Items) */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-md py-3 px-4">
          {/* Sidebar Items Moved Here */}
          <Link to="/" onClick={closeMenu} className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <Home className="w-5 h-5 text-gray-600 mr-2" />
            Dashboard
          </Link>
          <Link to="/new-escrow" onClick={closeMenu} className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <Plus className="w-5 h-5 text-gray-600 mr-2" />
            Start a Transaction
          </Link>
          <Link to="/transactions" onClick={closeMenu} className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <ClipboardList className="w-5 h-5 text-gray-600 mr-2" />
            Transactions
          </Link>
          <Link to="/quotes" onClick={closeMenu} className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <DollarSign className="w-5 h-5 text-gray-600 mr-2" />
            Quotes
          </Link>
          <Link to="/disputes" onClick={closeMenu} className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <Scale className="w-5 h-5 text-gray-600 mr-2" />
            Disputes
          </Link>
          <Link to="/settings" onClick={closeMenu} className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <Settings className="w-5 h-5 text-gray-600 mr-2" />
            Settings
          </Link>

          {/* Profile & Wallet Options */}
          <button onClick={closeMenu} className="w-full flex items-center justify-start p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600 mr-2" />
            Notifications
          </button>
          <button onClick={closeMenu} className="w-full flex items-center justify-start p-2 hover:bg-gray-100 rounded-lg">
            <User className="w-5 h-5 text-gray-600 mr-2" />
            Profile
          </button>
          <button onClick={closeMenu} className="w-full flex items-center justify-center px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};
