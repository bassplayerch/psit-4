import { AuthState, authState } from "./authState/authState";
import { createStore } from "easy-peasy";

export interface AppState {
	authState: AuthState;
}

export const store = createStore<AppState>({
    authState
});