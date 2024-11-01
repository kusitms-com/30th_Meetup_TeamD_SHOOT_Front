import { useState } from 'react';
import shootLogo from '../../assets/shootLogo.png';
import ConnectFigma from './components/ConnectFigma';
import SignupMain from './components/SignupMain';
import ConnectDiscord from './components/ConnectDiscord';

const SignupPage = () => {
    const [isSignupMainVisible, setIsSignupMainVisible] = useState(true);
    const [isConnectFigma, setIsConnectFigma] = useState(true);

    const handleSignupButtonClick = () => {
        setIsSignupMainVisible(false);
    };

    const handleConnectFigmaButtonClick = () => {
        setIsConnectFigma(false);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img 
                src={shootLogo} 
                alt="shootLogo" 
                style={{ width: "315px", height: "66.23px" }} 
            />
            {isSignupMainVisible ? (
                <SignupMain onButtonClick={handleSignupButtonClick} />
            ) : (
                isConnectFigma ? (
                    <ConnectFigma onButtonClick={handleConnectFigmaButtonClick} />
                ) : (
                    <ConnectDiscord />
                )
            )}
        </div>
    );
};

export default SignupPage;
