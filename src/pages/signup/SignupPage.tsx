import { useState } from 'react';
import shootLogo from '../../assets/shootLogo.png';
import colors from '../../styles/color';
import ConnectFigma from './components/ConnectFigma';
import SignupMain from './components/SignupMain';

const SignupPage = () => {
    const [isSignupMainVisible, setIsSignupMainVisible] = useState(true);

    const handleButtonClick = () => {
        // 버튼 클릭 시 SignupMain을 ConnectFigma로 변경
        setIsSignupMainVisible(false);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img 
                src={shootLogo} 
                alt="shootLogo" 
                style={{ width: "315px", height: "66.23px" }} 
            />
            {isSignupMainVisible ? (
                <SignupMain onButtonClick={handleButtonClick} />
            ) : (
                <ConnectFigma />
            )}
        </div>
    );
};

export default SignupPage;
