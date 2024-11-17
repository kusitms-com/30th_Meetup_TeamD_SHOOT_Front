import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import instance from '../api/axiosInstance'; // Axios 인스턴스 사용
import shootLogo from '../assets/shootLogo.png';
import typography from '../styles/typography';
import colors from '../styles/color';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

  // Google 로그인 URL로 리디렉션
  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=354662253053-amfnieo2m0ohp831hr6i0a1mhveidqp8.apps.googleusercontent.com&redirect_uri=http://localhost:5173/login&response_type=code&scope=openid email profile&access_type=offline'
};

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <img
        src={shootLogo}
        alt="shootLogo"
        style={{ width: '315px', height: '66.23px' }}
      />
      <div className="flex flex-col mt-[15.54px] w-[494px]">
        <div style={typography.title.medium}>Sign in to your account</div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center mt-[12px] gap-[8px]"
          style={{
            width: '100%',
            height: '53px',
            backgroundColor: colors.grayscale[80],
            ...typography.title.small,
          }}
        >
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
