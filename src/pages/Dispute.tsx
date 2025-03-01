import React from "react";
import { Navbar } from "../components/Layout/Navbar";
import { Sidebar } from "../components/Layout/Sidebar";
import { TransactionFilter } from "../components/Dispute/TransactionFilter";
import { TransactionTable } from "../components/Dispute/TransactionTable";
import { Footer } from "../components/Layout/Footer";
export const Dispute = () => {
  return <div className="min-h-screen bg-gray-100 pt-16 md:pl-64">
      <div className="flex">
        <main className="flex-1 p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">Disputes</h1>
          <TransactionFilter />
          <TransactionTable />
        </main>
      </div>
      <Footer />
    </div>;
}