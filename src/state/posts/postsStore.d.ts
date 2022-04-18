declare interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

declare interface PostStore {
  status: "idle" | "loading" | "success" | "fail";
  posts: Post[];
  error: Error | String | Unknown;
}

declare interface PostPayload {
  data: Post[];
  status: number;
}
