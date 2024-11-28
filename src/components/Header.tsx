import { Link, useLocation } from "react-router-dom";
import { getMemberInfo } from "../api/membersAxios";
import { useEffect, useState } from "react";

interface UserInfo {
  username: string;
  profileImg: string;
  userId: number;
}

const Header: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.log("Yet login");
        setLoading(false);
        return;
      }

      try {
        const data = await getMemberInfo(token);
        setUserInfo(data);
      } catch (err) {
        console.error("Error fetching user info:", err);
        setError("Failed to fetch user info.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [location]); 

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full h-20 bg-black border-b border-white">
      <Link to="/">
        <div className="flex items-center ml-[320px]">
          <img
            src="/images/shoot/shootLogo.png"
            alt="Shoot Logo"
            style={{ width: "122.111px", height: "25.674px" }}
          />
        </div>
      </Link>

      <div className="flex items-center gap-12 mr-[320px]">
        {!loading && !error && userInfo ? (
          <Link to="/user">
            <div className="flex items-center gap-4">
              <img
                src={userInfo.profileImg || ""}
                alt={userInfo.username || "User"}
                className="object-cover w-8 h-8 rounded-full"
              />
              <span className="text-white">{userInfo.username}</span>
            </div>
          </Link>
        ) : (
          <Link to="/signin">
            <button className="relative w-16 h-8 text-white text-base font-semibold font-['Pretendard']">
              LOG IN
            </button>
          </Link>
        )}

        {/* Figma Plugin Button */}
        <Link to="/connect-figma">
          <button className="px-10 py-2.5 bg-[#20f5bd] rounded-md flex items-center justify-center">
            <span className="text-center text-[#1d1e1e] text-base font-bold font-['Pretendard'] leading-relaxed">
              FIGMA PLUGIN
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
