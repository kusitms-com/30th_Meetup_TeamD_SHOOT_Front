// pages/OAuthPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/UserStore";
import { fetchUserInfo } from "../api/userInfo";
import loading from "../assets/loading.gif";

const OAuthPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const getCodeFromUrl = (): string | null => {
    const params = new URLSearchParams(window.location.search);
    console.log("params: ", params);
    console.log("code: ", params.get("code"));

    return params.get("code");
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
      navigate("/");
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
    }
  };


  useEffect(() => {
    const code = getCodeFromUrl();
    if (code) {
      console.log("Google Authorization Code:", code);
      getUserData();
      console.log()
    }
  }, [setUser]);

  return  <div className="flex items-center justify-center">
  <img src={loading} />
</div>;
};

export default OAuthPage;
