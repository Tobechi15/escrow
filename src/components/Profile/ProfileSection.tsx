import React from "react";
import { CheckCircle } from "lucide-react";
export const ProfileSection = () => {
  return <section className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input type="text" value="john_doe" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input type="email" value="john@example.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" readOnly />
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-green-700">KYC Verified</span>
        </div>
      </div>
    </section>;
};