// store/useUserStore.ts
import { create } from "zustand";

// 타입 지정
interface UserStore {
  username: string;
  email: string;
  ImgUrl: string;
  userId: string;
  setUser: (user: Partial<UserStore>) => void; // 상태 수정 메서드
}

// 초기값 지정
const useUserStore = create<UserStore>()((set) => ({
  username: "",
  email: "",
  ImgUrl: "",
  userId: "",
  setUser: (user) => set((state) => ({ ...state, ...user })), // 상태 수정
}));

export default useUserStore;
