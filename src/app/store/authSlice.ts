import { createAction, createReducer } from "@reduxjs/toolkit";
import { AuthType } from "../types/authTypes";

const setUser = createAction<AuthType | null>("SET_USER");
const setLogin = createAction<AuthType | null>("SET_LOGIN");

interface AuthState {
  // Defined the type for the state
  user: AuthType | null;
  isAuthenticated: boolean;
}
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.user = action?.payload || null;
      state.isAuthenticated = true;
    })
    .addCase(setLogin, (state, action) => {
      state.isAuthenticated = true;
      state.user = action?.payload || null;
    });
  // .addDefaultCase((state) => {
  //   state.user = { email: "deepak", password: "deepak" };
  //   state.isAuthenticated = false;
  // });
});
export default authReducer;
export { setUser, setLogin };
