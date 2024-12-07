import { IChannel, IMessage, IUser } from "@/types";

export interface ChannelSlice {
//   messages: IMessage[];
  selectedChannel?: IChannel;
//   addMessage: (message: IMessage) => void; 
  setSelectedChannel: (channel: IChannel) => void;
//   setMessages: (receivedMessages: IMessage[]) => void;
}

export const createChannelSlice = (set: (fn: (state: ChannelSlice) => Partial<ChannelSlice>) => void, get: () => ChannelSlice): ChannelSlice => ({
//   messages: [],
  selectedChannel: undefined,

//   addMessage: (message: IMessage) => {
//     if (message.content.trim()) { 
//       set((state: ChannelSlice) => ({
//         messages: [...state.messages, message],
//       }));
//     }
//   },

setSelectedChannel: (channel: IChannel) => set(() => ({
    selectedChannel: channel
  })),

//   setMessages: (receivedMessages: IMessage[]) => set(() => ({
//     messages: receivedMessages
//   })),
});
