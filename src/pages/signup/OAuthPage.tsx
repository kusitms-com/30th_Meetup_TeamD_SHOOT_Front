// pages/OAuthPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../api/axiosInstance";
import useUserStore from "../../store/userStore";
import { fetchUserInfo } from "../../api/userInfo";

const OAuthPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const getCodeFromUrl = (): string | null => {
    const params = new URLSearchParams(window.location.search);
    console.log("params: ", params);
    console.log("code: ", params.get("code"));

    return params.get("code");
  };

  const handleLogin = async (code: string) => {
    try {
      const response = await instance.get(`/api/v1/auth/code/google`, {
        params: { code },
        withCredentials: true,
      });

      console.log("로그인 성공:", response.data);

      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      
      navigate("/");
    } catch (error: any) {
      console.error("로그인 실패:", error);

      if (error.response?.status === 401) {
        navigate("/signup");
      } else {
        alert("로그인 처리 중 오류가 발생했습니다.");
      }
    }
  };

  const getUserData = async () => {
    const accessToken = localStorage.getItem("accessToken"); 
    if (!accessToken) {
      console.warn("엑세스 토큰이 없습니다.");
      return;
    }

    try {
      const userData = await fetchUserInfo(accessToken);
      setUser({
        username: userData.username,
        email: "",
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