import { Link, useLocation } from "react-router-dom";
import { getMemberInfo } from "../api/membersAxios";
import { useEffect, useState } from "react";
import checkImg from '../assets/check.svg';

interface UserInfo {
  username: string;
  profileImg: string;
  userId: number;
}

const Header: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  
  const handleUserAreaMouseEnter = () => {
    setIsModalOpen(true);
  };
  
  const handleUserAreaMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget || !relatedTarget.closest('.user-dropdown-container')) {
      setIsModalOpen(false);
    }
  };
  
  const handleModalMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget || !relatedTarget.closest('.user-dropdown-container')) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full h-20 bg-black border-b border-white user-dropdown-container">
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
        <div 
        className="relative user-area"
        onMouseEnter={handleUserAreaMouseEnter} 
        onMouseLeave={handleUserAreaMouseLeave}
      >
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            src={userInfo.profileImg || ""}
            alt={userInfo.username || "User"}
            className="object-cover w-8 h-8 rounded-full"
          />
          <span className="text-white">{userInfo.username}</span>
        </div>
      
        {isModalOpen && (
          <div 
            className="absolute w-[167px] mt-4 text-white transform rounded-lg shadow-lg top-7 left-12 bg-Grayscale-75"
            onMouseLeave={handleModalMouseLeave}
          >
              <div className="px-5 py-2.5 cursor-pointer hover:rounded-lg group">
                <Link to="/user">
                  <div className="flex items-center gap-2.5 mr-6">
                    <img
                      src={checkImg}
                      alt="Check Icon"
                      className="w-4 h-4 opacity-0 group-hover:opacity-100"
                    />
                    <span>My Page</span>
                  </div>
                </Link>
              </div>
              <div className="fixed z-50 flex items-center justify-between w-full bg-transparent border-b border-Grayscale-70"/>
              <div className="px-5 py-2.5 cursor-pointer hover:rounded-lg group">
                <Link to="/logout">
                  <div className="flex items-center gap-2">
                    <img
                      src={checkImg}
                      alt="Check Icon"
                      className="w-4 h-4 opacity-0 group-hover:opacity-100"
                    />
                    <span>Log out</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        ) : (
          <Link to="/signin">
            <button className="relative w-16 h-8 text-white text-[17px] font-['Pretendard']">
              LOG IN
            </button>
          </Link>
        )}


        <button className="px-10 py-2.5 bg-[#20f5bd] rounded-md flex items-center justify-center">
          <a 
            href="https://www.figma.com/team_invite/redeem/nwJRmQTA0WburOPMyBqnbJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-center text-[#1d1e1e] text-base font-bold font-['Pretendard'] leading-relaxed"
          >
            FIGMA PLUGIN
          </a>
        </button>

      </div>
    </div>
  );
};

export default Header;
