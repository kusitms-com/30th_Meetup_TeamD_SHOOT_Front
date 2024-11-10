import { Link } from "react-router-dom";
import ShootLogo from "../assets/shootLogo.png";

const Header = () => {
    return (
        <div className="fixed top-0 z-50 flex items-center justify-between w-full h-20 bg-black border-b border-white"> 
            <Link to="/">
                <div className="flex items-center ml-[320px]">
                    <img src={ShootLogo} alt="Shoot Logo" style={{ width: "122.111px", height: "25.674px" }} />
                </div>
            </Link>
            
            <div className="flex items-center gap-12 mr-[320px]">
                <Link to='signin'>
                    <div className="relative w-16 h-8">
                        <button className="left-[4px] top-[3px] absolute text-white text-base font-semibold font-['Pretendard'] leading-relaxed">LOG IN</button>
                    </div>
                </Link>
               
                <button className="px-10 py-2.5 bg-[#20f5bd] rounded-md justify-center items-center gap-2.5 flex">
                    <div className="text-center text-[#1d1e1e] text-base font-bold font-['Pretendard'] leading-relaxed">FIGMA PLUGIN</div>
                </button>
            </div>
        </div>
    );
};

export default Header;
