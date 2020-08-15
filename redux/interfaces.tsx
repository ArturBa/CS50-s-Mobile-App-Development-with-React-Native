export interface User {
  name: string;
  id: number;
}

export interface Payment {
  id: number;
  date: string;
  userId: number;
  comment: string;
  value: number;
}
