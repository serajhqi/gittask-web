import createClient, { Client, Middleware } from "openapi-fetch";
import { paths } from "./schema";
import { GetUserRepo } from "../store/user.store";

const myMiddleware: Middleware = {
  async onRequest({ request }) {
    if (GetUserRepo().GetIsLogin()) {
      request.headers.set(
        "Authorization",
        "Bearer " + GetUserRepo().GetToken(),
      );
    }
    return request;
  },
  async onResponse({ response }) {
    if (response.status == 401) {
      GetUserRepo().Logout();
    }
    return response;
  },
};

let client: Client<paths, `${string}/${string}`>;
export function GetApi(): Client<paths, `${string}/${string}`> {
  if (!client) {
    client = createClient<paths>({ baseUrl: "http://localhost:3000" });
    client.use(myMiddleware);
  }
  return client;
}
