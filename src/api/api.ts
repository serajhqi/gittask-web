import createClient, { Client } from "openapi-fetch";
import { paths } from "./schema";

let api: Client<paths, `${string}/${string}`>;
export function GetApi(): Client<paths, `${string}/${string}`> {
  if (!api) {
    api = createClient<paths>({ baseUrl: "http://localhost:3000" });
  }
  return api;
}
