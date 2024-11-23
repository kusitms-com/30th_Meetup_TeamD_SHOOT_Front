import { create } from "zustand";

interface UserStore {
  username: string;
  email: string;
  ImgUrl: string;
  userId: string;
  setUser: (user: Partial<UserStore>) => void; 
}

const useUserStore = create<UserStore>()((set) => ({
  username: "",
  email: "",
  ImgUrl: "",
  userId: "",
  setUser: (user) => set((state) => ({ ...state, ...user })), 
}));

export default useUserStore;