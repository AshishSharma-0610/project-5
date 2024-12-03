"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

interface Topic {
  name: string;
  image: string;
  correct_percentage: number;
}

interface TopicsProps {
  topics: {
    weakest: Topic[];
    strongest: Topic[];
  };
}

export function TopicsSection({ topics }: TopicsProps) {
  const TopicItem = ({ topic, variant }: { topic: Topic; variant: "danger" | "success" }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={topic.image}
            alt={topic.name}
            fill
            className="object-cover"
            sizes="(max-width: 48px) 100vw"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium truncate">{topic.name}</h4>
          <p className="text-sm text-gray-500">
            {topic.correct_percentage}% Correct
          </p>
        </div>
      </div>
      <Progress 
        value={topic.correct_percentage} 
        variant={variant}
        className="h-2"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Weakest Topics</h3>
        <div className="space-y-6">
          {topics.weakest.map((topic) => (
            <TopicItem key={topic.name} topic={topic} variant="danger" />
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Strongest Topics</h3>
        <div className="space-y-6">
          {topics.strongest.map((topic) => (
            <TopicItem key={topic.name} topic={topic} variant="success" />
          ))}
        </div>
      </Card>
    </div>
  );
}