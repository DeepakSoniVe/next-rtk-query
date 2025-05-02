import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthType } from "../types/authTypes";
import { REHYDRATE } from "redux-persist";
import { Action } from "@reduxjs/toolkit";

type RootState = any;
function isHydratedAction(action: Action): action is Action<
  typeof REHYDRATE
> & {
  key: string;
  payload: RootState;
  err: unknown;
} {
  return action.type === REHYDRATE;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.example.com", // Replace with your API base URL
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydratedAction(action)) {
      if (action.key == reducerPath) {
        return action.payload;
      }
      return action.payload[authApi?.reducerPath];
    }
  },
  endpoints: (builder) => ({
    login: builder.mutation<AuthType, AuthType>({
      query: (credentials: AuthType) => ({
        url: `/login`,
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthType, AuthType>({
      query: (Credential: AuthType) => ({
        url: `/register`,
        method: "POST",
        body: Credential,
      }),
    }),
  }),
});
