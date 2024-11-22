import { useState } from 'react';
import DiscordLogo from '../../../assets/logo/DiscordLogo.svg';
import deleteIcon from '../../../assets/delete.svg';
import alarm from '../../../assets/alarm.svg';
import PopUp from './PopUp';

const SettingInput = () => {
    const [isConnectDiscord, setIsConnectDiscord] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const handleDeleteClick = () => setShowPopup(true);
    const handleDisconnect = () => {
        setIsConnectDiscord(false);
        setShowPopup(false);
    };
    const handleClosePopup = () => setShowPopup(false);

    return (
        <div className="relative w-[584px] mt-4">
            {/* Header */}
            <p className="flex items-center p-[13px] justify-between text-[#707374] text-[12px] w-full">
                <span className="text-left">Connection</span>
                <span className="absolute transform -translate-x-1/2 left-1/2">Access</span>
                <span className="text-right">Get alarm from Shoot</span>
            </p>

            {/* Main Content */}
            <div
                className={`relative w-full rounded-lg border border-[#525658] mt-[-10px] p-[18px] flex flex-col justify-between`}
                style={{
                    minHeight: '122px',
                    height: isConnectDiscord ? 'auto' : '122px',
                }}
            >
                {isConnectDiscord ? (
                    <div>
                        {/* Top Row: Discord Info */}
                        <div className="flex items-center gap-2.5">
                            <img className="w-6 h-auto" src={DiscordLogo} alt="Discord Logo" />
                            <div className="text-white text-[15px] font-bold font-['Pretendard']">DISCORD</div>
                        </div>

                        {/* Bottom Row: Email, Filename, and Alarm */}
                        <div className="relative flex items-center w-full mt-[14.5px]">
                            {/* Left Section */}
                            <div className="flex items-center gap-2 text-left">
                                <span className="text-white text-[13px]">address2@email.com</span>
                                <img
                                    src={deleteIcon}
                                    className="w-[24px] cursor-pointer"
                                    alt="Delete Icon"
                                    onClick={handleDeleteClick}
                                />
                            </div>

                            {/* Center Section */}
                            <span className="absolute left-1/2 transform -translate-x-1/2 text-white text-[13px]">
                                File name1
                            </span>

                            {/* Right Section */}
                            <div className="ml-auto">
                                <img src={alarm} className="w-[16px]" alt="Alarm Icon" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-[#707374] text-[13px] font-normal flex justify-center items-center text-center">
                        No personal accounts
                    </div>
                )}
            </div>

            {/* PopUp */}
            <PopUp 
                isOpen={showPopup}
                onDisconnect={handleDisconnect}
                onClose={handleClosePopup}
            />
        </div>
    );
};

export default SettingInput;
