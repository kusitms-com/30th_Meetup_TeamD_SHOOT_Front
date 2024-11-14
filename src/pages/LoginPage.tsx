import React from 'react';
import { Link } from 'react-router-dom';
import shootLogo from '../assets/shootLogo.png';
import colors from '../styles/color';
import typography from '../styles/typography';
import googleLogo from '../assets/googleLogo.png';

const LoginPage: React.FC = () => {

    const handleGoogleLogin = () => {
        // 구글 로그인 화면을 새 창에서 열기
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?
          client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}
          &redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URI}
          &response_type=code
          &scope=openid email profile
          &access_type=offline`;
      
        // Open the Google login page in a new window
        const width = 600;
        const height = 600;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
      
        window.open(googleAuthUrl, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
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
          onClick={handleGoogleLogin}
          className="flex items-center justify-center mt-[12px] gap-[8px]"
          style={{ 
            width: '100%', 
            height: '53px', 
            backgroundColor: colors.grayscale[80],
            ...typography.title.small
          }}
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
