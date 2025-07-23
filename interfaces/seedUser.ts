export interface RandomUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
}
export interface SampleUser {
  id: number;
  email: string;
  password: string;
}
export interface SeedDataResponse {
  data: RandomUser[];
  message: string;
}
