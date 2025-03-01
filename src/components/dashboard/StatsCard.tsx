import React from "react";
export const StatsCard = ({
  title,
  value,
  icon
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return <div className="bg-white backdrop-blur-sm rounded-xl p-5 flex items-start justify-between transition-all duration-200 border border-gray-200">
      <div>
        <h3 className="text-gray-400 text-xs uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-xl font-semibold mt-1">{value}</p>
      </div>
      <div className="text-blue-400 opacity-75">{icon}</div>
    </div>;
};