import React, { useState } from "react";
import { Home, Plus, ClipboardList, DollarSign, Scale, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <aside className="hidden lg:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-50 border-r border-gray-200 p-4">
      <nav className="space-y-2">
        <Link
          to="/"
          onClick={() => setActiveTab("home")}
          className={`tab ${activeTab === "home" ? "bg-gray-200" : ""} flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg`}
        >
          <Home className="w-5 h-5" />
          Dashboard
        </Link>
        <Link
          to="/new-escrow"
          onClick={() => setActiveTab("new")}
          className={`tab ${activeTab === "new" ? "bg-gray-200" : ""} flex items-center px-4 py-2 text-gray-900 rounded-lg`}
        >
          <Plus className="w-5 h-5" />
          Start a Transaction
        </Link>
        <Link
          to="/transactions"
          onClick={() => setActiveTab("Transactions")}
          className={`tab ${activeTab === "Transactions" ? "bg-gray-200" : ""} flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg`}
        >
          <ClipboardList className="w-5 h-5" />
          Transactions
        </Link>
        <Link
          to="/quotes"
          onClick={() => setActiveTab("Quotes")}
          className={`tab ${activeTab === "Quotes" ? "bg-gray-200" : ""} flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg`}
        >
          <DollarSign className="w-5 h-5" />
          Quotes
        </Link>
        <Link
          to="/disputes"
          onClick={() => setActiveTab("Disputes")}
          className={`tab ${activeTab === "Disputes" ? "bg-gray-200" : ""} flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg`}
        >
          <Scale className="w-5 h-5" />
          Disputes
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </nav>
    </aside>
  );
};
