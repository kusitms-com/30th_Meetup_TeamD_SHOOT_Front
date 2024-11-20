import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.shoot-manage.com", 
  headers: {
    "Content-Type": "application/json",
    "Authorization" : "jwt-token"
  },
  withCredentials: true, 
});

export const fetchUserInfo = async (accessToken: string) => {
  try {
    const response = await instance.get("/api/v1/members", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { success, data } = response.data;

    if (success) {
      console.log("사용자 정보:", data);
      return data;
    } else {
      console.error("요청 실패: ", response.data);
      throw new Error("요청 실패");
    }
  } catch (error: any) {
    console.error("API 호출 오류:", error.response || error.message);
    throw error;
  }
};
