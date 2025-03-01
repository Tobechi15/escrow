import React from "react";
import { AlertTriangle, X } from "lucide-react";
interface DeleteAccountModalProps {
  onClose: () => void;
}
export const DeleteAccountModal = ({
  onClose
}: DeleteAccountModalProps) => {
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Delete Account</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded-lg mb-4">
          <AlertTriangle className="w-5 h-5" />
          <p className="text-sm">This action cannot be undone.</p>
        </div>
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete your account? All your data will be
          permanently removed.
        </p>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>;
};