import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "https://api.shoot-manage.com", // API 서버의 기본 URL
  headers: {
    "Content-Type": "application/json",
    "Authorization" : "jwt-token"
  },
  withCredentials: true, // 쿠키와 인증 정보를 포함할 경우 사용
});

// 사용자 정보를 가져오는 함수
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
