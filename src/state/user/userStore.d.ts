declare interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

declare interface UserStore {
  status: "idle" | "loading" | "success" | "fail";
  users: User[];
  error: Error | String | Unknown;
  totalUsers: number
}

declare interface UserPayload {
  data: User[];
  status: number;
  loadMore?: boolean;
}

declare interface UserQuery {
  loadMore?: boolean;
}
