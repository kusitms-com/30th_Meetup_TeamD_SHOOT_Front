import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import shootLogo from '../assets/shootLogo.png';
import typography from '../styles/typography';
import { useGoogleLogin } from '@react-oauth/google';

const LoginPage: React.FC = () => {
    const sendCodeToBackend = async (code: string) => {
        try {
            const response = await axios.get('/api/v1/auth/code/google', {
                params: { code }, // Authorization Code를 쿼리 파라미터로 전송
            });
            console.log("백엔드 응답:", response);
        } catch (error) {
            console.error("백엔드 요청 중 오류 발생:", error);
        }
    };

    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            console.log("Authorization Code:", codeResponse.code);
            await sendCodeToBackend(codeResponse.code); // 백엔드로 Authorization Code 전송
        },
        onError: () => {
            console.error("Google 로그인 실패");
        },
        flow: 'auth-code', // Authorization Code Flow 설정
    });

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
                <button
                    onClick={() => login()}
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
                >
                    Sign in with Google 🚀
                </button>
                
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
