"use client";

import { useEffect, useState } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardMetrics } from "@/components/dashboard/metrics";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { TopicsSection } from "@/components/dashboard/topics-section";
import { LeaderboardSection } from "@/components/dashboard/leaderboard-section";
import { fetchDashboardData } from "@/lib/api";
import { Toaster } from "@/components/ui/sonner";
import type { DashboardData } from "@/lib/types/api";

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!dashboardData) {
    return <div className="flex items-center justify-center h-screen">Failed to load dashboard data</div>;
  }

  return (
    <div className="space-y-6 p-4 md:p-8">
      <DashboardHeader apiSecret={dashboardData.api_secret} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <DashboardMetrics metrics={dashboardData.metrics} />
        </div>
        <div className="lg:col-span-4">
          <ActivityChart data={dashboardData.activity.monthly} />
        </div>
      </div>
      <TopicsSection topics={dashboardData.topics} />
      <LeaderboardSection 
        userLeaderboard={dashboardData.user_leaderboard}
        groupsLeaderboard={dashboardData.groups_leaderboard}
      />
      <Toaster />
    </div>
  );
}