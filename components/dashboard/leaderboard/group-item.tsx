"use client";

import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

interface GroupItemProps {
  name: string;
  pointsPerUser: number;
  accuracy: number;
  previousAccuracy: number;
  position: number;
}

export function GroupItem({
  name,
  pointsPerUser,
  accuracy,
  previousAccuracy,
  position,
}: GroupItemProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-semibold w-6">{position}</span>
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">
          {pointsPerUser} Points / User - {accuracy}% Correct
        </p>
      </div>
      {accuracy > previousAccuracy ? (
        <ArrowUpCircle className="w-5 h-5 text-green-500" />
      ) : (
        <ArrowDownCircle className="w-5 h-5 text-red-500" />
      )}
    </div>
  );
}