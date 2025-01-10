export interface Service {
  id: number;
  user_id: number;
  category_id: number;
  tittle: string;
  description: string;
  price: string;
  image_url: string;
  image_full_url: string;
  created_at: string;
  updated_at: string;
  user: User;
}

export interface User {
  name: string;
  address: string;
}
