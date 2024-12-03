"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/ui/line-chart";

interface MetricsProps {
  metrics: {
    active_users: { current: number; total: number };
    questions_answered: number;
    average_session_length_seconds: number;
    starting_knowledge_percentage: number;
    current_knowledge_percentage: number;
  };
}

export function DashboardMetrics({ metrics }: MetricsProps) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-2xl font-semibold">{metrics.active_users.current}</p>
          <p className="ml-2 text-sm text-gray-500">/{metrics.active_users.total}</p>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500">Questions Answered</h3>
        <p className="mt-2 text-2xl font-semibold">{metrics.questions_answered.toLocaleString()}</p>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500">Av. Session Length</h3>
        <p className="mt-2 text-2xl font-semibold">
          {formatTime(metrics.average_session_length_seconds)}
        </p>
      </Card>

      <Card className="p-4 sm:col-span-2 lg:col-span-1">
        <h3 className="text-sm font-medium text-gray-500">Starting Knowledge</h3>
        <div className="mt-2">
          <p className="text-2xl font-semibold">{metrics.starting_knowledge_percentage}%</p>
          <LineChart className="h-12 mt-2" data={[65, 64, 65, 63, 64, 64, 65]} />
        </div>
      </Card>

      <Card className="p-4 sm:col-span-2 lg:col-span-2">
        <h3 className="text-sm font-medium text-gray-500">Current Knowledge</h3>
        <div className="mt-2">
          <p className="text-2xl font-semibold">{metrics.current_knowledge_percentage}%</p>
          <LineChart className="h-12 mt-2" data={[82, 83, 85, 84, 86, 85, 86]} />
        </div>
      </Card>
    </div>
  );
}