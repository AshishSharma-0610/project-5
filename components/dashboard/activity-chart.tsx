"use client";

import { Card } from "@/components/ui/card";
import {
  BarChart as RechartsBarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { CustomXAxis, CustomYAxis } from "@/components/charts/custom-axis";
import { ChartTooltip } from "@/components/charts/chart-tooltip";

interface ActivityChartProps {
  data: Array<{
    month: string;
    value: number;
  }>;
}

export function ActivityChart({ data }: ActivityChartProps) {
  return (
    <Card className="p-4 h-full">
      <h3 className="text-lg font-semibold mb-4">Activity</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <CustomXAxis dataKey="month" />
            <CustomYAxis />
            <Tooltip content={<ChartTooltip prefix="Activity" />} />
            <Bar
              dataKey="value"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}