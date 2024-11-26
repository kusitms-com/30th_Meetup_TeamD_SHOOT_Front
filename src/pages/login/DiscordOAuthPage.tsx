// pages/OAuthPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import discordInstance from "../../api/discordAxios";
import useUserStore from "../../store/userStore";
import loading from '../../assets/loading.gif';

const DiscordOAuthPage = () => {
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
      const response = await discordInstance.get(`/api/v1/auth/code/discord`, {
        params: { code },
        withCredentials: true,
      });

      console.log("Discord 로그인 성공:", response.data);
      navigate("/connect-discord");
    } catch (error: any) {
      console.error("로그인 실패:", error);

      if (error.response?.status === 401) {
        navigate("/connect-discord");
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
  };

  useEffect(() => {
    const code = getCodeFromUrl();
    if (code) {
      console.log("Discord Authorization Code:", code);
      handleLogin(code);
      getUserData();
    }
  }, [setUser]);

  return (
    <div className="flex justify-center items-center w-[1293px]">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default DiscordOAuthPage;