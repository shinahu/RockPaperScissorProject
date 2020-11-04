export interface LeaderboardsEnvelope {
    leaderboards: Leaderboard[];
   }
   export interface Leaderboard {
    username: string;
    winRatio: number;
    turnPlayed: number;
   }
    
   export interface LeaderboardEnvelope {
    leaderboard: Leaderboard;
   }