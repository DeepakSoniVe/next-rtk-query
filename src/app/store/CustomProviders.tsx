"use client";

import { store } from "./store";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";

export default function CustomProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

// <ApiProvider api={store}>
{
  /* </ApiProvider> */
}
