import { IMessage, IUser } from "@/types";

export interface ChatSlice {
  messages: IMessage[];
  selectedChat?: IUser;
  addMessage: (message: IMessage) => void; 
  setSelectedChat: (contact: IUser) => void;
  setMessages: (receivedMessages: IMessage[]) => void;
}

export const createChatSlice = (set: (fn: (state: ChatSlice) => Partial<ChatSlice>) => void, get: () => ChatSlice): ChatSlice => ({
  messages: [],
  selectedChat: undefined,

  addMessage: (message: IMessage) => {
    if (message.content.trim()) { 
      set((state: ChatSlice) => ({
        messages: [...state.messages, message],
      }));
    }
  },

  setSelectedChat: (contact: IUser) => set(() => ({
    selectedChat: contact
  })),

  setMessages: (receivedMessages: IMessage[]) => set(() => ({
    messages: receivedMessages
  })),
});
