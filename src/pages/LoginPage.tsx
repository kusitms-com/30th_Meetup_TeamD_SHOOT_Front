import { Link } from 'react-router-dom';
import shootLogo from '../assets/shootLogo.png';
import colors from '../styles/color';
import typography from '../styles/typography';
import googleLogo from '../assets/googleLogo.png';
import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from "axios";

const LoginPage = () => {
    // // Google OAuth URL
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=354662253053-amfnieo2m0ohp831hr6i0a1mhveidqp8.apps.googleusercontent.com&redirect_uri=https://api.shoot-manage.com/api/v1/auth/code/google&response_type=code&scope=openid email profile&access_type=offline`;

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
