import { useState } from "react";
import { Bell, User, Wallet, Menu, X, Home, Plus, ClipboardList, DollarSign, Scale, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when clicking outside
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar - Always Visible */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-[60]">
        <div className="h-full flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <h1 className="text-lg sm:text-xl font-bold text-blue-600">Escrow Platform</h1>

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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-full hover:bg-gray-100 z-[70]"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>
        </div>
      </nav>

      {/* Background Blur Overlay (Higher z-index to cover all elements) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md z-[50]"
          onClick={closeMenu} // Clicking outside closes the menu
        />
      )}

      {/* Mobile Dropdown Menu (Above Blur but Below Navbar) */}
      <div
        className={`sm:hidden fixed top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-white border border-gray-200 shadow-md rounded-lg transition-all duration-300 ease-in-out z-[55] ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="py-3 px-4 space-y-2">
          {/* Navigation Links */}
          {[
            { to: "/", icon: Home, label: "Dashboard" },
            { to: "/new-escrow", icon: Plus, label: "Start a Transaction" },
            { to: "/transactions", icon: ClipboardList, label: "Transactions" },
            { to: "/quotes", icon: DollarSign, label: "Quotes" },
            { to: "/disputes", icon: Scale, label: "Disputes" },
            { to: "/settings", icon: Settings, label: "Settings" },
          ].map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <Icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}

          {/* Profile & Wallet Options */}
          <hr className="my-2 border-gray-300" />
          {[
            { icon: Bell, label: "Notifications" },
            { icon: User, label: "Profile" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={closeMenu}
              className="flex items-center gap-3 p-2 w-full text-left rounded-lg hover:bg-gray-100"
            >
              <Icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}

          {/* Connect Wallet Button */}
          <button
            onClick={closeMenu}
            className="w-full flex items-center justify-center px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};
