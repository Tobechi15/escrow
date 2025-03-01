import React from "react";
import { AlertCircle, CheckCircle2, Scale } from "lucide-react";
type Status = "pending" | "completed" | "disputed";
interface StatusBadgeProps {
  status: Status;
}
export const StatusBadge = ({
  status
}: StatusBadgeProps) => {
  const getStatusConfig = (status: Status) => {
    switch (status) {
      case "pending":
        return {
          color: "bg-yellow-100 text-yellow-800",
          icon: <AlertCircle className="w-4 h-4" />,
          text: "Pending"
        };
      case "completed":
        return {
          color: "bg-green-100 text-green-800",
          icon: <CheckCircle2 className="w-4 h-4" />,
          text: "Completed"
        };
      case "disputed":
        return {
          color: "bg-red-100 text-red-800",
          icon: <Scale className="w-4 h-4" />,
          text: "Disputed"
        };
    }
  };
  const config = getStatusConfig(status);
  return <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium ${config.color}`}>
      {config.icon}
      {config.text}
    </span>;
};