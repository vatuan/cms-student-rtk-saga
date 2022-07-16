import React from "react";

interface StatisticItemProps {
  label: string;
  icon?: React.ReactElement;
  value: string | number;
}
export function StatisticItem({ label, icon, value }: StatisticItemProps) {
  return (
    <div className="flex justify-between items-center shadow-md rounded-md p-2">
      <span>{icon}</span>
      <div className="flex flex-col items-center">
        <span className="font-body-bold">{value}</span>
        <span className="capitalize px-2 py-0 rounded-md bg-primary text-white">{label}</span>
      </div>
    </div>
  );
}
