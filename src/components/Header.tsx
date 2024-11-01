import React from "react";
import ShootLogo from "../assets/shoot_logo1.png";

const Header = () => {
    return (
        <div className="fixed top-0 flex items-center justify-between w-full h-20 border-b border-white">
            <div className="flex items-center ml-[320px]">
                <img src={ShootLogo} alt="Shoot Logo" style={{ width: "122.111px", height: "25.674px" }} />
            </div>
            <div className="flex items-center gap-12 mr-[320px]">
                <div className="relative w-16 h-8">
                    <div className="left-[4px] top-[3px] absolute text-white text-base font-semibold font-['Pretendard'] leading-relaxed">LOG IN</div>
                </div>
                <div className="px-10 py-2.5 bg-[#20f5bd] rounded-md justify-center items-center gap-2.5 flex">
                    <div className="text-center text-[#1d1e1e] text-base font-bold font-['Pretendard'] leading-relaxed">FIGMA PLUGIN</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
