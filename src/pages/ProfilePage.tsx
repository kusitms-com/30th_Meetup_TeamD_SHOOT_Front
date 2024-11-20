import React, { useState } from 'react';
import logoBack from '../assets/logoBack.svg';
import figmaLogo from '../assets/logo/figmaLogo.png';
import add from '../assets/add.svg';
import deleteIcon from '../assets/delete.svg';

const ProfilePage: React.FC = () => {
    const [inputs, setInputs] = useState<string[]>(["psl8032001_1@naver.com"]);

    // 추가 버튼 클릭 시 새로운 입력 필드 추가
    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };

    // 삭제 버튼 클릭 시 해당 입력 필드 제거
    const handleDeleteInput = (index: number) => {
        setInputs(inputs.filter((_, i) => i !== index));
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-center bg-cover">
            <img
                src={logoBack}
                alt="Profile Logo"
                className="absolute w-[460px] h-auto rounded-[10px] mx-auto"
                style={{ top: "50%", transform: "translateY(-50%)" }}
            />

            <div className="relative w-[1064px] h-[722px] bg-[#1d1e1e]/70 rounded-[10px] border border-[#9bffbe] p-12">
                <div className="grid grid-cols-[250px_1fr] gap-8 h-full">
                    <div className="space-y-[20px]">
                        <h1 className="text-Grayscale_0 text-[25px] font-bold font-['Pretendard'] leading-[37.50px]">My Page</h1>
                        <nav className="space-y-[14px]">
                            <div className="text-[#20f5bd] text-[19px] font-bold font-['Pretendard'] leading-7">Profile</div>
                            <div className="text-Grayscale_0 text-[19px] font-bold font-['Pretendard'] leading-7">Settings</div>
                        </nav>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-Grayscale_0 text-[17px] font-bold font-['Pretendard'] leading-relaxed">Profile Setting</h2>
                            <svg className="w-full h-[1px] ml-[-14px] mt-[12px]" xmlns="http://www.w3.org/2000/svg">
                                <line
                                            x1="-14"
                                            y1="0"
                                            x2="100%"
                                            y2="0"
                                            stroke="var(--Grayscale-75, #3E3F40)"
                                            strokeWidth="1"
                                        />
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
                                                value={input}
                                                placeholder="psl8032001_1@naver.com"
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
                                                <img src={deleteIcon} alt="Delete Icon" className="w-[24px] h-auto" />
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
