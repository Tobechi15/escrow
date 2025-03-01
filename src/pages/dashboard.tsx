import React, { useState } from "react";
import { StatsCard } from "../components/dashboard/StatsCard";
import { Footer } from "../components/Layout/Footer";
import { TransactionsTable } from "../components/dashboard/TransactionsTable";
import { Wallet, CircleDollarSign, Star, PlusCircle, FileText } from "lucide-react";
export const DashBoard = () =>  {
  return <div className="min-h-screen bg-grey-100">
      <main className="pt-16 md:pl-64">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">
            Welcome to the Escrow Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <StatsCard title="Total Escrows" value="24 Active" icon={<Wallet className="w-5 h-5" />} />
            <StatsCard title="Locked Funds" value="5.8 ETH" icon={<CircleDollarSign className="w-5 h-5" />} />
            <StatsCard title="Trust Score" value="4.9/5.0" icon={<Star className="w-5 h-5" />} />
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="/new-escrow" className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-lg transition-colors">
              <PlusCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Create New Escrow</span>
            </a>
            <a href="/quotes" className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-800 px-4 py-2 text-white rounded-lg transition-colors border border-gray-200">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Request Payment</span>
            </a>
          </div>
          <TransactionsTable />
        </div>
      </main>
      <Footer />
    </div>;
};