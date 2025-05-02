import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Action } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

type RootState = any;

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string;
  payload: RootState;
  err: unknown;
} {
  return action.type === REHYDRATE;
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  extractRehydrationInfo(
    action: Action,
    { reducerPath }: { reducerPath: string }
  ): any {
    if (isHydrateAction(action)) {
      const payload = action?.payload;
      if (action.key == reducerPath && payload) {
        return payload;
      }
      if (payload && typeof payload == "object") return payload[reducerPath];
      return undefined;
    }
  },
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
