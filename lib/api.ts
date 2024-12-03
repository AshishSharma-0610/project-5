import { DashboardData, DownloadResponse } from './types/api';

export async function fetchDashboardData(): Promise<DashboardData> {
  try {
    const response = await fetch('/data/dashboard.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch dashboard data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw new Error('Failed to load dashboard data. Please try again later.');
  }
}

export async function downloadDashboardImage(apiSecret: string): Promise<string> {
  if (!apiSecret) {
    throw new Error('API secret is required for download');
  }

  try {
    const response = await fetch("https://testd5-img.azurewebsites.net/api/imgdownload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ api: apiSecret }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Download failed: ${response.statusText}`);
    }

    const base64String = await response.text();
    if (!base64String) {
      throw new Error("Received empty response from server");
    }

    // Validate base64 string
    if (!/^[A-Za-z0-9+/=]+$/.test(base64String)) {
      throw new Error("Invalid image data received");
    }

    return base64String;
  } catch (error) {
    console.error('Download error:', error);
    throw error instanceof Error ? error : new Error('Failed to download image');
  }
}