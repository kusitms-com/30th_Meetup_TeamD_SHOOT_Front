import React, { useState, useEffect } from 'react';
import figmaLogo from '../../../assets/logo/figmaLogo.png';
import add from '../../../assets/add.svg';
import deleteIcon from '../../../assets/delete.svg';
import PopUp from './PopUp';
import { figmaCheckApi } from '../../../api/figmaCheckApi'; // figmaCheckApi를 임포트

interface FigmaInfo {
   figmaId: string;
   email: string;
}

const UserProfile: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [figmaInfo, setFigmaInfo] = useState<FigmaInfo|null>(null);
    const [inputs, setInputs] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFigmaAccountInfo = async () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            console.log("Not found Figma account information");
            setLoading(false);
            return;
            }

            try {
            const data = await figmaCheckApi(token);
            console.log("Figma account info:", data);
            setFigmaInfo(data);
            setInputs([data.email]); 
            }catch (err) {
            console.error("Error fetching figma info:", err);
            } finally {
            setLoading(false);
            }
        };

        fetchFigmaAccountInfo();
    }, []);

    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };

    const handleDeleteInput = (index: number) => {
        setInputs(inputs.filter((_, i) => i !== index));
    };

    const handleDeleteClick = () => setShowPopup(true);
    const handleDisconnect = () => {
        setShowPopup(false);
    };
    const handleClosePopup = () => setShowPopup(false);

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
                            <img src={figmaLogo} className="w-[24px] h-auto" />
                            <span className="text-Grayscale_0 text-[17px] font-bold font-['Pretendard'] leading-relaxed">FIGMA Account</span>
                        </div>

                        {inputs.map((input, index) => (
                            <div key={index} className="relative w-[584px] mt-4">
                                <input
                                    type="email"
                                    value={input || (loading ? "Loading..." : figmaInfo?.email || "")}
                                    placeholder="Enter your email"
                                    className="w-full h-[62px] px-5 py-[18px] rounded-lg border border-[#525658] text-[#6f7274] text-[17px] font-normal font-['Pretendard'] leading-relaxed placeholder:text-[#6f7274] bg-transparent outline-none"
                                    onChange={(e) => {
                                        const newInputs = [...inputs];
                                        newInputs[index] = e.target.value;
                                        setInputs(newInputs);
                                    }}
                                />
                                <button
                                    className="absolute transform -translate-y-1/2 right-4 top-1/2"
                                    onClick={() => handleDeleteInput(index)}
                                >
                                    <img src={deleteIcon}
                                        onClick={handleDeleteClick}
                                        className="w-[24px] h-auto" />
                                </button>
                            </div>
                        ))}

                        {inputs.length < 2 && (
                            <button
                                className="w-[585px] mt-[10px] h-11 px-5 py-2.5 bg-[#3d3e3f] rounded-lg border border-[#525658] inline-flex items-center justify-center gap-2 hover:bg-[#4d4e4f] transition-colors duration-200"
                                onClick={handleAddInput}
                            >
                                <img src={add} className="w-[24px]" alt="Add Icon" />
                                <span className="text-[#f0f0f0] text-sm font-bold font-['Pretendard'] leading-[21px]">
                                    Add another Figma account
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <PopUp 
                isOpen={showPopup}
                onDisconnect={handleDisconnect}
                onClose={handleClosePopup}
            />
        </div>
    );
};

export default UserProfile;
