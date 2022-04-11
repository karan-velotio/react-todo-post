
declare interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

declare interface UserStore {
  status: "idle" | "loading" | "success" | "fail";
  users: User[];
  error: Error | string | null;
}

declare interface UserAction {
  type: string;
  payload: {
    data: User[];
    status: number;
  } & Error;
}
