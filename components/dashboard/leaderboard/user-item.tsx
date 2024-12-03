"use client";

import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

interface UserItemProps {
  name: string;
  image: string;
  points: number;
  accuracy: number;
  previousAccuracy: number;
  position: number;
}

export function UserItem({
  name,
  image,
  points,
  accuracy,
  previousAccuracy,
  position,
}: UserItemProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-semibold w-6">{position}</span>
      <img
        src={image}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">
          {points} Points - {accuracy}% Correct
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