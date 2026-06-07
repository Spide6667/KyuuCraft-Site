export enum Status {
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
};

export type State =
  | {
      status: Status.Loading;
    }
  | {
      status: Status.Loaded;
      content: string;
    }
  | {
      status: Status.Error;
      errorCode: string;
    };