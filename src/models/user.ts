// src/models/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
}
