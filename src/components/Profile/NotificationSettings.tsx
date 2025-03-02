export const NotificationSettings = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-sm w-full max-w-lg mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        {[
          { label: "Email Notifications", description: "Receive updates via email", checked: true },
          { label: "SMS Notifications", description: "Receive updates via SMS", checked: false },
          { label: "In-App Notifications", description: "Receive updates in the app", checked: true },
        ].map(({ label, description, checked }, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-1">
              <p className="font-medium">{label}</p>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={checked} />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:outline-none transition-all">
                <div className="absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform peer-checked:translate-x-full peer-checked:border-white"></div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};
