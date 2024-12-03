"use client";

import { Line, LineChart as RechartsLineChart, ResponsiveContainer } from "recharts";

interface LineChartProps {
  data: number[];
  className?: string;
}

export function LineChart({ data, className }: LineChartProps) {
  const chartData = data.map((value, index) => ({ value }));

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}