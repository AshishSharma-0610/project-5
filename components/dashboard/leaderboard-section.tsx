"use client";

import { Card } from "@/components/ui/card";
import { LeaderboardCard } from "./leaderboard/leaderboard-card";
import { UserItem } from "./leaderboard/user-item";
import { GroupItem } from "./leaderboard/group-item";

interface LeaderboardUser {
  name: string;
  image: string;
  points: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

interface LeaderboardGroup {
  group_name: string;
  points_per_user: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

interface LeaderboardSectionProps {
  userLeaderboard: LeaderboardUser[];
  groupsLeaderboard: LeaderboardGroup[];
}

export function LeaderboardSection({ userLeaderboard, groupsLeaderboard }: LeaderboardSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <LeaderboardCard title="User Leaderboard" loading={false}>
        {userLeaderboard.map((user, index) => (
          <UserItem
            key={user.name}
            name={user.name}
            image={user.image}
            points={user.points}
            accuracy={user.accuracy_percentage}
            previousAccuracy={user.previous_accuracy_percentage}
            position={index + 1}
          />
        ))}
      </LeaderboardCard>

      <LeaderboardCard title="Groups Leaderboard" loading={false}>
        {groupsLeaderboard.map((group, index) => (
          <GroupItem
            key={group.group_name}
            name={group.group_name}
            pointsPerUser={group.points_per_user}
            accuracy={group.accuracy_percentage}
            previousAccuracy={group.previous_accuracy_percentage}
            position={index + 1}
          />
        ))}
      </LeaderboardCard>
    </div>
  );
}