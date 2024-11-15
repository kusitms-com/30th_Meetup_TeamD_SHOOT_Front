import { create } from "zustand";

// 타입 지정

interface UserStore {
  username: string;
  email: string;
  ImgUrl: string;
  userId: string;
}

// 초기값 지정

const useUserStore = create<UserStore>()((set) => ({
  username: "",
  email:"",
  ImgUrl:"",
  userId: ""
}));

export default useUserStore;