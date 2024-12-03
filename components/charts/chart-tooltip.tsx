"use client";

import { TooltipProps } from "recharts";

interface CustomTooltipProps extends TooltipProps<number, string> {
  prefix?: string;
}

export function ChartTooltip({ active, payload, label, prefix = "Value" }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-blue-600">
        {prefix}: {payload[0].value}
      </p>
    </div>
  );
}