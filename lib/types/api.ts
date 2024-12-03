export interface DashboardData {
  metrics: {
    active_users: {
      current: number;
      total: number;
    };
    questions_answered: number;
    average_session_length_seconds: number;
    starting_knowledge_percentage: number;
    current_knowledge_percentage: number;
  };
  activity: {
    monthly: Array<{
      month: string;
      value: number;
    }>;
  };
  topics: {
    weakest: Array<{
      name: string;
      image: string;
      correct_percentage: number;
    }>;
    strongest: Array<{
      name: string;
      image: string;
      correct_percentage: number;
    }>;
  };
  user_leaderboard: Array<{
    name: string;
    image: string;
    points: number;
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
  }>;
  groups_leaderboard: Array<{
    group_name: string;
    points_per_user: number;
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
  }>;
  api_secret: string;
}

export interface DownloadResponse {
  success: boolean;
  data?: string;
  error?: string;
}