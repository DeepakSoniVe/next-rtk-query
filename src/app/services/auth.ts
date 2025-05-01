import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthType } from "../types/authTypes";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.example.com", // Replace with your API base URL
  }),
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
