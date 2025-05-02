"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";

export default function CustomProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<div>Persistor Loading...</div>}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}

// <ApiProvider api={store}>
{
  /* </ApiProvider> */
}
