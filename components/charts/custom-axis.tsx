"use client";

import { XAxis, YAxis } from "recharts";

interface AxisProps {
  dataKey?: string;
}

export function CustomXAxis({ dataKey, ...props }: AxisProps) {
  return (
    <XAxis
      {...props}
      dataKey={dataKey}
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 12 }}
      padding={{ left: 10, right: 10 }}
    />
  );
}

export function CustomYAxis(props: AxisProps) {
  return (
    <YAxis
      {...props}
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 12 }}
      width={40}
      padding={{ top: 10, bottom: 10 }}
    />
  );
}