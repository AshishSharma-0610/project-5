"use client";

import { Card } from "@/components/ui/card";
import { LeaderboardSkeleton } from "./leaderboard-skeleton";

interface LeaderboardCardProps {
  title: string;
  loading: boolean;
  children: React.ReactNode;
}

export function LeaderboardCard({ title, loading, children }: LeaderboardCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {loading ? <LeaderboardSkeleton /> : <div className="space-y-4">{children}</div>}
    </Card>
  );
}