"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDashboardDownload } from "@/hooks/use-dashboard-download";

interface DashboardHeaderProps {
  apiSecret: string;
}

export function DashboardHeader({ apiSecret }: DashboardHeaderProps) {
  const { handleDownload, isDownloading } = useDashboardDownload();

  const onDownload = async () => {
    await handleDownload(apiSecret);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h1 className="text-2xl font-semibold">Reports</h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full sm:w-auto">
          <Select defaultValue="all-time">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-time">All-time</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="People" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="managers">Managers</SelectItem>
              <SelectItem value="employees">Employees</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="safety">Safety</SelectItem>
              <SelectItem value="compliance">Compliance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={onDownload}
          disabled={isDownloading || !apiSecret}
          className="w-full sm:w-auto whitespace-nowrap"
        >
          <Download className="mr-2 h-4 w-4" />
          {isDownloading ? "Downloading..." : "Download"}
        </Button>
      </div>
    </div>
  );
}