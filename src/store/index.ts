// store.ts
import { create } from "zustand";
import { createAuthSlice, AuthSlice } from "./slices/auth-slice";
import { createChatSlice, ChatSlice } from "./slices/chat-slice";
import { createChannelSlice, ChannelSlice } from "./slices/channel-slice";

export enum MenuItems {
    Chats = 'chats',
    Channels = 'channels',
    Profile = 'profile',
    Settings = 'settings',
    Notifications = 'notifications'
}

// Combine the slice interfaces into a single type
export interface AppState extends AuthSlice, ChatSlice, ChannelSlice {
    selectedMenu: MenuItems;
    setSelectedMenu: (menuItem: MenuItems) => void;
}

// Create the Zustand store
export const useAppStore = create<AppState>((set, get) => ({
    ...createAuthSlice(set, get),
    ...createChatSlice(set, get),
    ...createChannelSlice(set, get),
    selectedMenu: MenuItems.Chats, // Default selected menu item
    setSelectedMenu: (menuItem: MenuItems) => set(() => ({
        selectedMenu: menuItem
    }))
}));
