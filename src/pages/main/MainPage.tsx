import React, { useEffect, useState } from 'react';
import shootMain from '../../assets/shootMain.gif';
import shoot1st from '../../assets/shootFIRST.json';
import shoot2nd from '../../assets/shootSECOND.json';
import Lottie from 'lottie-react';

const MainPage = () => {
    const [lineHeight, setLineHeight] = useState(0);

    // 스크롤에 따라 선의 높이를 업데이트하는 함수
    const handleScroll = () => {
        const scrollY = window.scrollY;
        // 스크롤 위치에 따라 선의 높이를 변경 (조정 가능)
        const newHeight = Math.min(scrollY - 100, 408); 
        setLineHeight(newHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative flex flex-col top-[250px] items-center justify-center w-full">
            {/* 헤드라인 텍스트 */}
            <div className="text-white text-[50px] font-bold font-['Pretendard'] leading-[75px] tracking-wide text-center">
                SHOOT YOUR CREATIVE OUTPUT
            </div>

            {/* 서브 텍스트 */}
            <div className="w-[943px] mt-[46px] text-center text-white text-[19px] font-medium font-['Pretendard'] leading-7">
                SHOOT integrates all key points,
                <br /> emphasizing the flexibility, collaboration, and task management with FIGMA,
                <br /> while maintaining user-friendly flow.
            </div>

            {/* 회원가입 버튼 */}
            <div className="mt-[70px] h-[61px] p-4 rounded-[10px] border border-[#6effd9] flex justify-center items-center gap-2.5 cursor-pointer">
                <div className="text-[#6effd9] text-[19px] font-medium font-['Pretendard'] leading-7 text-center">
                    SIGN IN
                </div>
            </div>

            {/* 메인 이미지 */}
            <img className="mt-[62px] w-[1293px] h-[697px]" src={shootMain} alt="Main illustration for the Shoot project" />

            {/** 구역 1 */}
            <div>
                <div className="mt-[156px] text-center text-white text-[40px] font-bold font-['Pretendard'] leading-[60px]">
                    Manage your frame and comment efficiently
                </div>

                {/** 구역1 Row 정렬 */}
                <div className="flex flex-row mt-[204px] relative">
                    {/** 구역 1 Row Col 1 */}
                    <div className="flex flex-col">
                        <div className="mt-[359px] w-[559px] text-Grayscale_0 text-[40px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            Capture key moments
                            <br/>of your design
                            <br/>and create your block
                        </div>

                        <div className="mt-[336px]">
                            <Lottie animationData={shoot1st} loop={true}/>
                        </div>
                    </div>
                    
                    {/** 구분선 - 스크롤 시 높이 변경 */}
                    <div className="mt-[448px] ml-[69px] mr-[55px] flex flex-col items-center">
                        {/* 상단 점 */}
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full" />

                        {/* 스크롤에 따라 늘어나는 선 */}
                        <div style={{ height: `${lineHeight}px` }} className="w-0.5 bg-[#6effd9] transition-all duration-300" />

                        {/* 하단 점 */}
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full mt-[408px]" />
                    </div>

                    {/** 구역 1 Row Col 2 */}
                    <div className="ml-[58px] flex flex-col">
                        <div className="mt-[365px]">
                            <Lottie animationData={shoot2nd} loop={true}/>
                        </div>

                        <div className="mt-[155px] w-[559px] text-Grayscale_0 text-[40px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            Leave comments, 
                            <br/>spark collaboration
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default MainPage;
