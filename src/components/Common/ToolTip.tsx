import React from "react";

interface ToolTipProps {
  isCollapsed?: boolean;
  title: string;
}
export function ToolTip({ isCollapsed, title }: ToolTipProps) {
  return (
    <span
      className={`${
        isCollapsed ? "block" : "hidden"
      } absolute text-white h-9 w-32 bg-dark-light tooltip-position shadow-md opacity-0 top-0 -translate-y-1/2 flex items-center justify-center rounded-md group-hover:top-1/2 group-hover:opacity-100 transition-all`}
    >
      {title}
    </span>
  );
}
