"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface BarChartProps {
  data: Array<{ month: string; value: number }>;
  loading?: boolean;
  height?: number;
}

export function BarChart({ data, loading = false, height = 300 }: BarChartProps) {
  if (loading) {
    return <Skeleton className={`h-[${height}px] w-full`} />;
  }

  const CustomXAxis = (props: any) => (
    <XAxis
      {...props}
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 12 }}
      padding={{ left: 10, right: 10 }}
    />
  );

  const CustomYAxis = (props: any) => (
    <YAxis
      {...props}
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 12 }}
      width={40}
      padding={{ top: 10, bottom: 10 }}
    />
  );

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    if (!active || !payload?.length) return null;

    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-blue-600">
          Value: {payload[0].value}
        </p>
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <CustomXAxis dataKey="month" />
        <CustomYAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="value"
          fill="#3b82f6"
          radius={[4, 4, 0, 0]}
          maxBarSize={50}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}