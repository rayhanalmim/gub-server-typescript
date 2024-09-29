export interface User {
  full_name: string;
  username: string;
  email?: string; // Optional email
  password_hash: string; // Hashed password
  total_games_played: number;
  total_wins: number;
  current_balance: number; // In-game currency or balance
  user_role: "player" | "admin"; // User role can be either 'player' or 'admin'
  created_at: Date;
  updated_at?: Date; // Optional, automatically updated
}
