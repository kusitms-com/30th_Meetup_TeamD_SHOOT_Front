import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import shootLogo from '../assets/shootLogo.png';
import typography from '../styles/typography';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

const LoginPage: React.FC = () => {
<<<<<<< Updated upstream
    // 구글 로그인 성공 시 콜백 함수
=======
    const [accessToken, setAccessToken] = useState<string | null>(null);

    // 백엔드로 GET 요청 전송
    const sendAccessTokenToBackend = async (token: string) => {
        try {
            const response = await axios.get('/api/v1/auth/code/google', {
                params: { code: token },
                headers: { 'Content-Type': 'application/json' },
            });
            console.log("백엔드 응답:", response.data);
        } catch (error) {
            console.error("백엔드 요청 중 오류 발생:", error);
        }
    };

    // Google 로그인 성공 처리 함수
>>>>>>> Stashed changes
    const handleGoogleSuccess = async (credential: string) => {
        try {
            // JWT 디코딩
            const decodedToken: any = jwtDecode(credential);
            console.log("Decoded Token:", decodedToken);

            // accessToken이 존재하면 백엔드로 전송
            if (credential) {
                await sendAccessTokenToBackend(credential);
            } else {
                console.error("access_token이 존재하지 않습니다.");
                
            }
            
        } catch (error) {
            console.error("Google 로그인 처리 중 오류 발생:", error);
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
                            handleGoogleSuccess(credentialResponse.credential);
                            console.log("Credential:", credentialResponse.credential);
                        } else {
                            console.error("Google 인증 실패");
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
