import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shootMain from '../../public/images/shoot/shootmain.gif';
import shoot1st from '../../public/images/shoot/shootFIRST.json';
import shoot2nd from '../../public/images/shoot/shootSECOND.json';
import shoot3rd from '../../public/images/shoot/shootTHIRD.json';
import shoot4th from '../../public/images/shoot/shootFORTH.json';
import shoot5th from '../../public/images/shoot/shootFIFTH.json';
import shoot6th from '../../public/images/shoot/shootSIXTHgif.gif';
import Lottie from 'lottie-react';

const MainPage = () => {
    const [lineHeight, setLineHeight] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newHeight = Math.min(scrollY - 100, 408); 
        setLineHeight(newHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="relative flex flex-col top-[250px] items-center justify-center w-full">
            <div className="text-white text-[50px] font-bold font-['Pretendard'] leading-[75px] tracking-wide text-center">
                SHOOT YOUR CREATIVE OUTPUT
            </div>

            <div className="w-[943px] mt-[46px] text-center text-white text-[19px] font-medium font-['Pretendard'] leading-7">
                SHOOT integrates all key points,
                <br /> emphasizing the flexibility, collaboration, and task management with FIGMA,
                <br /> while maintaining user-friendly flow.
            </div>

            <Link to='signin'>
                <div className="mt-[70px] h-[61px] p-4 rounded-[10px] border border-[#6effd9] flex justify-center items-center gap-2.5 cursor-pointer">
                    <div className="text-[#6effd9] text-[19px] font-medium font-['Pretendard'] leading-7 text-center">
                        SIGN IN
                    </div>
                </div>
            </Link>
            
            <img className="mt-[62px] w-[1293px] h-[697px]" src={shootMain} alt="Main illustration for the Shoot project" />

            {/** 구역 1 */}
            <div>
                <div className="mt-[156px] mb-[91.64px] text-center text-white text-[40px] font-bold font-['Pretendard'] leading-[60px]">
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

            {/** 구역 2 */}
            <div className='mt-[156px] mb-[192px]'>
                <div className="text-center text-white text-[40px] font-bold font-['Pretendard'] leading-[60px]">
                    Sync with your team, 
                    <br/>stay updated on every comment
                </div>

                {/** Row 정렬 */}
                <div className="flex flex-row mt-[285px] relative">
                    {/** 왼쪽 세로*/}
                    <div className="mt-[258px] w-[559px] text-Grayscale_0 text-[40px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                        Stay connected   
                        <br/>with team messenger
                        <br/>Integrations and 
                        <br/>receive real-time 
                        <br/>notifications
                    </div>
                    
                    {/** 구분선 - 스크롤 시 높이 변경 */}
                    <div className="mt-[414px] ml-[70px] mr-[58px] flex flex-col items-center">
                        {/* 상단 점 */}
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full" />
                    </div>

                    {/** 오른쪽 세로 */}
                    <div className="mt-[93px]">
                        <Lottie animationData={shoot3rd} loop={true}/>
                    </div>
                </div>
            </div>    

            {/** 구역 3 */}
            <div className='mt-[100px] mb-[101px]'>
                <div className="text-center text-white text-[40px] font-bold font-['Pretendard'] leading-[60px]">
                    Manage any requests directly 
                    <br/>through your own TODO List
                </div>

                {/** Row 정렬 */}
                <div className="flex flex-row mt-[285px] relative">
                    {/** 왼쪽 세로*/}
                    <div className='flex flex-col mt-[189px]'>
                        <Lottie animationData={shoot4th} loop={true}/>
                        <div className="mt-[336px] text-Grayscale_0 text-[40px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            Track your tasks   
                            <br/>efficiently
                            <br/>with 'yet-DOING-done' 
                            <br/>status management
                        </div>
                        <div className="mt-[276px]">
                            <img src={shoot6th} className='rounded-3xl'/>
                        </div>
                    </div>
                   
                    
                    {/** 구분선 - 스크롤 시 높이 변경 */}
                    <div className="mt-[414px] ml-[70px] mr-[58px] flex flex-col items-center">
                        {/* 상단 점 */}
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full" />
                        <div className="mt-[630px] w-2.5 h-2.5 bg-[#6effd9] rounded-full" />
                        <div className="mt-[630px] w-2.5 h-2.5 bg-[#6effd9] rounded-full" />
                    </div>

                    {/** 오른쪽 세로 */}
                    <div className='flex flex-col mt-[350px]'>
                        <div className="text-Grayscale_0 text-[40px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            Turn any request 
                            <br/>into a to-do 
                            <br/>with just one click
                        </div>
                        <div className="mt-[332px]">
                            <Lottie animationData={shoot5th} loop={true}/>
                        </div>
                        <div className="mt-[335.64px] text-Grayscale_0 text-[40px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            View mentioned 
                            <br/>comments in one place
                            <br/>for quick access
                        </div>
                    </div>
                </div>
            </div>    

            {/* 마지막 텍스트 */}
            <div className='mt-[155px] mb-[155px]'>
                <div className=" text-white text-[50px] font-bold font-['Pretendard'] leading-[75px] tracking-wide text-center">
                    SHOOT YOUR CREATIVE OUTPUT
                </div>
                <div className='mt-[74px] justify-center items-center gap-2.5 flex'>
                    <Link to='signin'>
                        <button className=" h-[61px] p-4 rounded-[10px] border border-[#6effd9] ">
                            <span className="w-[120.72px] text-center text-[#6effd9] text-[19px] font-medium font-['Pretendard'] leading-7">
                                SIGN IN
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default MainPage;
