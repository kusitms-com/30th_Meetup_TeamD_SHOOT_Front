import React from 'react';
import { Link } from 'react-router-dom';
import shootLogo from '../assets/shootLogo.png';
import colors from '../styles/color';
import typography from '../styles/typography';
import googleLogo from '../assets/googleLogo.png';
import LoginButton from './LoginButton';
import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from "axios";

const LoginPage = () => {
    // // Google OAuth URL
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=354662253053-amfnieo2m0ohp831hr6i0a1mhveidqp8.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Fauth%2Fcode%2Fgoogle&response_type=code&scope=openid%20email%20profile&access_type=offline&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow`;

    // 버튼 클릭 시 구글 OAuth 인증으로 리다이렉트
    const handleGoogleLogin = () => {
        window.location.href = googleAuthUrl;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img 
                src={shootLogo} 
                alt="shootLogo" 
                style={{ width: "315px", height: "66.23px" }} 
            />
            <div className='flex flex-col mt-[15.54px] w-[494px]' >
                <div style={typography.title.medium}>Sign in to your account</div>
                <button 
                    // onClick={handleGoogleLogin}
                    className="flex items-center justify-center mt-[12px] gap-[8px]"
                    style={{ 
                        width: '100%', 
                        height: '53px', 
                        backgroundColor: colors.grayscale[80],
                        ...typography.title.small
                    }}
                    onClick={handleGoogleLogin}
                >
                    <img src={googleLogo} alt='googleLogo' style={{ width: '24px', height: '24px' }} />
                    <span style={typography.title.small}>Continue With Google</span>
                </button>

                <div className='flex flex-col items-center justify-center'>
                    <div className='mt-[16px]'>
                        Don’t have an account yet? 
                        <Link to="/signup" className="ml-1 underline">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
