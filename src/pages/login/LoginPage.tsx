import React from 'react';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/logo/googleLogo.png';
import shootLogo from '../../../public/images/shoot/shootLogo.png';
import typography from '../../styles/typography';
import colors from '../../styles/color';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid email profile&access_type=offline`;
        window.location.href = url;
    };
    

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img
                src={shootLogo}
                alt="shootLogo"
                className="w-[315px] h-[66.23px]"
            />
            <div className="flex flex-col mt-[15.54px] w-[494px]">
                <div className="text-xl font-medium">Sign in to your account</div>

                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center mt-[12px] gap-[8px] rounded-lg bg-[colors.grayscale[80]] w-full h-[53px] hover:border-[1px] hover:border-[#9CFFBF]"
                    style={{
                        backgroundColor: colors.grayscale[80],
                        ...typography.title.small,
                    }}
                >
                    <img src={googleLogo} className="w-[24px]" />
                    <span style={typography.title.small}>Continue With Google</span>
                </button>

                <div className="flex flex-col items-center justify-center">
                    <div className="mt-[16px]">
                        Don’t have an account yet?
                        <button className="ml-1 underline" onClick={() => navigate('/signup')}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
