export interface ChatSlice {
    messages: string[];
    sendMessage: (message: string) => void;
  }
  
  export const createChatSlice = (set: any, get: any): ChatSlice => ({
    messages: [],
    sendMessage: (message: string) => set((state: ChatSlice) => ({
      messages: [...state.messages, message],
    })),
  });
  