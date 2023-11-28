import { createApi } from "unsplash-js";
import { ENV } from "./constants";
import * as nodeFetch from "node-fetch";

export const unsplash = createApi({
  accessKey: ENV.applicationAccessKey,
  fetch: nodeFetch.default as unknown as typeof fetch,
});
