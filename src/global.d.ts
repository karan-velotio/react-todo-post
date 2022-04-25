declare interface AppRoute {
  pathName: string;
  name: string;
}

declare interface ReduxAction<Payload = {}> {
  type: string;
  payload?: Payload ;
}
