import { create } from "zustand";

const useChatStore = create((set) => {
  return {
    chats: [],
    addToChats: (user) => {
      set((state) => ({
        chats: [...state.chats, user],
      }));
    },
  };
});

export default useChatStore;
