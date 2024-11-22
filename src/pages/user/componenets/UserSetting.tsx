import React, { useState } from 'react';
import ShootLogo from '../../../assets/logo/ShootLogo.svg';
import DiscordLogo from '../../../assets/logo/DiscordLogo.svg';
import deleteIcon from '../../../assets/delete.svg';

const UserSetting: React.FC = () => {
    const [inputs, setInputs] = useState<string[]>(["psl8032001_1@naver.com"]);

    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };

    const handleDeleteInput = (index: number) => {
        setInputs(inputs.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <h2 className="text-Grayscale_0 text-[17px] font-bold font-['Pretendard'] leading-relaxed">Personal Accounts</h2>
                <svg className="w-full h-[1px] ml-[-14px] mt-[12px]" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-14" y1="0" x2="100%" y2="0" stroke="var(--Grayscale-75, #3E3F40)" strokeWidth="1" />
                </svg>
            
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <img src={ShootLogo} className="w-[24px] h-auto" />
                            <span className="text-Grayscale_0 text-[17px] font-bold font-['Pretendard'] leading-relaxed">Use your accounts to get alarms from SHOOT</span>
                        </div>

                        <p className="w-[586px] text-white text-[13px] font-normal font-['Pretendard'] leading-tight">Personal Discord account is used to give you alarm from SHOOT.</p>                        

                        <div className="flex items-center gap-2">
                            <img src={DiscordLogo} className="w-[24px] h-auto mt-[37.5px]" />
                            <span className="text-Grayscale_0 text-[17px] mt-[37.5px] font-bold font-['Pretendard'] leading-relaxed">Use your accounts to get alarms from SHOOT</span>
                        </div>
                        {inputs.map((input, index) => (
                            <div key={index} className="relative w-[584px] mt-4">
                                <div className="w-[586px] h-[94px] relative rounded-lg border border-[#525658] p-5 flex flex-col justify-between">
                                <div className="flex items-center gap-2.5">
                                    <img className="w-6 h-auto" src={DiscordLogo} alt="Discord Logo" />
                                    <div className="text-white text-[15px] font-bold font-['Pretendard'] leading-snug">DISCORD</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-white text-[13px] font-normal font-['Pretendard'] leading-tight">
                                    address2@email.com
                                    </div>
                                    <div className="flex items-center justify-center w-4 h-4">
                                    {/* Empty div for icon placement if needed */}
                                    </div>
                                </div>
                            </div>  

                            <button
                                className="absolute transform -translate-y-1/2 right-4 top-1/2"
                                onClick={() => handleDeleteInput(index)}
                            >
                                <img src={deleteIcon} alt="Delete Icon" className="w-[24px] h-auto" />
                            </button>
                            </div>
                        ))}

                        {inputs.length < 2 && (
                            <button
                                className="w-[585px] mt-[10px] h-11 px-5 py-2.5 bg-[#3d3e3f] rounded-lg border border-[#525658] inline-flex items-center justify-center gap-2 hover:bg-[#4d4e4f] transition-colors duration-200"
                                onClick={handleAddInput}
                            >
                                <span className="text-[#f0f0f0] text-sm font-bold font-['Pretendard'] leading-[21px]">
                                    Connect My Discord Account
                                </span>
                            </button>
                        )}

                        <h2 className="text-Grayscale_0 text-[17px] mt-28 font-bold leading-relaxed" style={{marginTop:'99px'}}>Delete Account</h2>
                        <svg className="w-full h-[1px] ml-[-14px] mt-[12px]" xmlns="http://www.w3.org/2000/svg">
                            <line x1="-14" y1="0" x2="100%" y2="0" stroke="var(--Grayscale-75, #3E3F40)" strokeWidth="1" />
                        </svg>
                        <p className="flex w-[586px] text-white text-[13px] font-normal font-['Pretendard'] leading-tight">
                            After deleting your account, you’ll receive an email 
                            <br/>confirming that all your data have removed from our server. 
                        </p>                        
                        <div className="text-[13px] font-normal font-['Pretendard'] underline leading-tight cursor-pointer focus:outline-none"
                        onClick={() => { alert('Delete account clicked');}}>
                        Delete my account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSetting;
