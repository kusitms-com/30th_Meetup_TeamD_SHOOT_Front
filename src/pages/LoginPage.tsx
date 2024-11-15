// src/pages/LoginPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import shootLogo from '../assets/shootLogo.png';
import colors from '../styles/color';
import typography from '../styles/typography';
import googleLogo from '../assets/googleLogo.png';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const LoginPage: React.FC = () => {
    // 구글 로그인 성공 시 콜백 함수
    const handleGoogleSuccess = async (credential: string) => {
        try {
            // JWT 토큰 디코딩
            const decodedToken = jwtDecode(credential);
            console.log("Decoded Token:", decodedToken);

            // 서버에 credential을 보내어 추가 인증 수행
            const response = await axios.post('/api/v1/auth/code/google', { credential });
            onLogInSuccess(response); // 받은 토큰 처리
            console.log("로그인 성공:", response.data);
        } catch (error) {
            console.error("Google 로그인 실패:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img 
                src={shootLogo} 
                alt="shootLogo"
                style={{ width: "315px", height: "66.23px" }} 
            />
            <div className="flex flex-col mt-[15.54px] w-[494px]">
                <div style={typography.title.medium}>Sign in to your account</div>
                
                {/* Google Login 버튼 */}
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        if (credentialResponse.credential) {
                            // 성공적으로 받은 credential을 처리
                            handleGoogleSuccess(credentialResponse.credential);
                            console.log(credentialResponse.credential);
                            console.log(jwtDecode(credentialResponse.credential));
                        } else {
                            console.error("Google 인증에 실패했습니다.");
                        }
                    }}
                    onError={() => {
                        console.error("Google 로그인 실패");
                    }}
                />
                
                <div className="flex flex-col items-center justify-center">
                    <div className="mt-[16px]">
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

function onLogInSuccess(_response: AxiosResponse<any, any>) {
    throw new Error('Function not implemented.');
}

