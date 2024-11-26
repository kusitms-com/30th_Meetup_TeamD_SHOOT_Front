import { Link } from "react-router-dom";
import ShootLogo from "../../public/images/shoot/shootLogo.png";
// import useUserStore from "../store/userStore";
import {getMemberInfo} from "../api/membersAxios";
import { useEffect, useState } from "react";

interface UserInfo {
  username: string;
  profileImg: string;
  userId: number;
}

const Header: React.FC = () => {
  // const { username, ImgUrl, userId } = useUserStore();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 JWT 토큰 가져오기
      if (!token) {
        setError("JWT token is missing.");
        setLoading(false);
        return;
      }

      try {
        const data = await getMemberInfo(token); // API 호출
        setUserInfo(data); // 사용자 정보 상태 업데이트
      } catch (err) {
        console.error("Error fetching user info:", err);
        setError("Failed to fetch user info.");
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchUserInfo();
  }, []);



  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full h-20 bg-black border-b border-white">
      <Link to="/">
        <div className="flex items-center ml-[320px]">
          <img src={ShootLogo} alt="Shoot Logo" style={{ width: "122.111px", height: "25.674px" }} />
        </div>
      </Link>

      <div className="flex items-center gap-12 mr-[320px]">
        {userInfo?.userId ? (
          <Link to="/user">
            <div className="flex items-center gap-4">
              <img
                src={userInfo.profileImg}
                alt={userInfo.username}
                className="object-cover w-8 h-8 rounded-full"
              />
              <span className="text-white">{userInfo.username}</span>
            </div>
          </Link>
        ) : (
          <div className="relative w-16 h-8">
            <Link to="signin">
              <button className="left-[4px] top-[3px] absolute text-white text-base font-semibold font-['Pretendard'] leading-relaxed">
                LOG IN
              </button>
            </Link>
          </div>
        )}

        <button className="px-10 py-2.5 bg-[#20f5bd] rounded-md justify-center items-center gap-2.5 flex">
          <Link to="connect-figma">
            <div className="text-center text-[#1d1e1e] text-base font-bold font-['Pretendard'] leading-relaxed">
              FIGMA PLUGIN
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

