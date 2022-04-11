type AppRoute = {
  pathName: string;
  name: string;
}

const routes: AppRoute[] = [
  { pathName: "/user", name: "User" },
  { pathName: "/todo", name: "Todo" }
];

export default routes;
