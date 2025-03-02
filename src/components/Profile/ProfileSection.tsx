import { CheckCircle } from "lucide-react";

export const ProfileSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-sm w-full max-w-md mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Profile Information</h2>
      <div className="space-y-4">
        {[
          { label: "Username", type: "text", value: "john_doe" },
          { label: "Email Address", type: "email", value: "john@example.com" },
        ].map(({ label, type, value }, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              value={value}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </div>
        ))}

        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm sm:text-base text-green-700">KYC Verified</span>
        </div>
      </div>
    </section>
  );
};
