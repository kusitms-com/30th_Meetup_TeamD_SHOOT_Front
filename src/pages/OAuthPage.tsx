// pages/OAuthPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../api/axiosInstance";
import useUserStore from "../store/userStore";
import { fetchUserInfo } from "../api/userInfo";

const OAuthPage = () => {
  const navigate = useNavigate();
  const { username, ImgUrl, userId, setUser } = useUserStore();

  // URL에서 Authorization Code 추출
  const getCodeFromUrl = (): string | null => {
    const params = new URLSearchParams(window.location.search);
    console.log("params: ", params);
    console.log("code: ", params.get("code"));

    return params.get("code");
  };

  // Google 로그인을 처리하는 함수
  const handleLogin = async (code: string) => {
    try {
      // GET 요청으로 Authorization Code 전달
      const response = await instance.get(`/api/v1/auth/code/google`, {
        params: { code },
        withCredentials: true,
      });

      console.log("로그인 성공:", response.data);

      // 토큰 저장
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);

      // 사용자 정보 상태 업데이트

      const { username, email, ImgUrl, userId } = response.data.data.user;
      setUser({ username, email, ImgUrl, userId });

      // 메인 페이지로 이동
      navigate("/");
    } catch (error: any) {
      console.error("로그인 실패:", error);

      if (error.response?.status === 401) {
        // 회원가입 페이지로 이동
        navigate("/signup");
      } else {
        alert("로그인 처리 중 오류가 발생했습니다.");
      }
    }
  };

  const getUserData = async () => {
    const accessToken = localStorage.getItem("accessToken"); // 로컬스토리지에서 토큰 가져오기
    if (!accessToken) {
      console.warn("엑세스 토큰이 없습니다.");
      return;
    }

    try {
      const userData = await fetchUserInfo(accessToken); // 사용자 정보 요청
      setUser({
        username: userData.username,
        email: "", // 필요 시 email 추가
        ImgUrl: userData.profileImg,
        userId: userData.userId,
      });
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
    }
  };


  useEffect(() => {
    const code = getCodeFromUrl();
    if (code) {
      console.log("Google Authorization Code:", code);
      handleLogin(code);
      getUserData();
      console.log()
    }
  }, [setUser]);

  return <div>{/** 200이 오면 바로 로그인 페이지로 */}</div>;
};

export default OAuthPage;
