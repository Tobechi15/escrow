import { useState } from "react";
import { DeleteAccountModal } from "./DeleteAccountModal";

export const SecuritySettings = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm w-full max-w-md mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Account Security</h2>
      
      <div className="space-y-4">
        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sm sm:text-base">Two-Factor Authentication</p>
            <p className="text-xs sm:text-sm text-gray-500">Add an extra layer of security</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-10 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Change Password Button */}
        <div>
          <button className="w-full px-4 py-2 text-sm sm:text-base bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Change Password
          </button>
        </div>

        {/* Delete Account Button */}
        <div>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="w-full px-4 py-2 text-sm sm:text-base bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && <DeleteAccountModal onClose={() => setShowDeleteModal(false)} />}
    </section>
  );
};
