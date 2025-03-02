import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "../components/Layout/Navbar";
import { Sidebar } from "../components/Layout/Sidebar";
import { ProfileSection } from "../components/Profile/ProfileSection";
import { WalletSection } from "../components/Profile/WalletSection";
import { NotificationSettings } from "../components/Profile/NotificationSettings";
import { SecuritySettings } from "../components/Profile/SecuritySettings";
export const Profile = () =>  {
  return <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Sidebar />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Profile & Settings</h1>
            <div className="grid grid-cols-1 gap-6">
              <ProfileSection />
              <WalletSection />
              <NotificationSettings />
              <SecuritySettings />
            </div>
          </div>
        </main>
      </div>;
}