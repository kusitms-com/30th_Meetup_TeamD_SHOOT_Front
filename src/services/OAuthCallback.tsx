// OAuthCallback.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const OAuthCallback: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 현재 URL에서 인증 코드 가져오기
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            console.log("Google OAuth 인증 코드:", code);

            // 서버로 인증 코드 보내기
            api.post('/api/v1/auth/google', { code })
                .then(response => {
                    console.log("액세스 토큰과 사용자 정보:", response.data);

                    // 로그인 후 원하는 경로로 리디렉션
                    navigate('/');
                })
                .catch(error => {
                    console.error("Google 로그인 실패:", error);
                    navigate('/signin');
                });
        } else {
            console.error("인증 코드가 없습니다.");
            navigate('/signin');
        }
    }, [navigate]);

    return (
        <div>
            Google OAuth 처리 중...
        </div>
    );
};

export default OAuthCallback;
