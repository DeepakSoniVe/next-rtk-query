"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../services/pokemon";
import AuthReducer from "./authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const isClient = typeof window !== "undefined";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const persistConfig = {
  key: "root",
  version: 1,
  storage: isClient ? createWebStorage("local") : createNoopStorage(),
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi?.reducer,
  auth: AuthReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([pokemonApi.middleware]),
  // getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = isClient ? persistStore(store) : null;
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
