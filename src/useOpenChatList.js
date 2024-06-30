import { create } from "zustand";

const useOpenChatList = create((set) => ({
  openChatList: false,
  toggle: (fl) => {
    set({ openChatList: fl });
  },
}));

export default useOpenChatList;
