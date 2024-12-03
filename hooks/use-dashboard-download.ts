import { useState, useCallback } from 'react';
import { downloadDashboardImage } from '@/lib/api';
import { toast } from 'sonner';

export function useDashboardDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = useCallback(async (apiSecret: string) => {
    if (!apiSecret) {
      toast.error('Unable to download: Missing API secret');
      return;
    }

    setIsDownloading(true);
    setError(null);

    try {
      const base64String = await downloadDashboardImage(apiSecret);
      
      // Create and trigger download
      const link = document.createElement("a");
      link.href = `data:image/png;base64,${base64String}`;
      link.download = "dashboard-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Download completed successfully');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to download image';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return {
    handleDownload,
    isDownloading,
    error
  };
}