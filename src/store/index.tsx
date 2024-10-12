// store.ts
import { create } from "zustand";
import { createAuthSlice, AuthSlice } from "./slices/auth-slice";
import { createChatSlice, ChatSlice } from "./slices/chat-slice";

// Combine the slice interfaces into a single type
export interface AppState extends AuthSlice, ChatSlice { }

// Create the Zustand store
export const useAppStore = create<AppState>((set, get) => ({
    ...createAuthSlice(set, get),
    ...createChatSlice(set, get),
}));
