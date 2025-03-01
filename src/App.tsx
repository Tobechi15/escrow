import React from "react";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Layout/Navbar";
import { Sidebar } from "./components/Layout/Sidebar";
import { CreateEscrow } from "./pages/CreateEscrow";
import { DashBoard } from "./pages/dashboard";
import { Transaction } from "./pages/Transaction";
import { Dispute } from "./pages/Dispute";
import { QuotesPage } from "./pages/QuotesPage";
import { Profile } from "./pages/Profile";

export function App() {
  return <Router>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/new-escrow" element={<CreateEscrow />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/disputes" element={<Dispute />} />
        <Route path="/settings" element={<Profile />} />
      </Routes>
    </div>
  </Router >;
}