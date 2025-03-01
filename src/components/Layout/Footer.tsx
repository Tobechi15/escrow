import React from "react";
export const Footer = () => {
  return <footer className="bg-white border-t border-gray-200 py-4 px-6">
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900">
            Support
          </a>
          <a href="#" className="hover:text-gray-900">
            Contact
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-900">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>;
};