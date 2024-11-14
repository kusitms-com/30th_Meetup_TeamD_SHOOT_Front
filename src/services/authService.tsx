// src/services/authService.ts
import axios, { AxiosResponse } from 'axios';
import { httpClientForCredentials } from '../services/axiosInstance';

export const onLogInSuccess = (response: AxiosResponse) => {
    console.log("onLoginSuccess");
    const { accessToken, refreshToken } = response.data;

    // Refresh Token을 localStorage에 저장
    localStorage.setItem('refreshToken', refreshToken);
    console.log(refreshToken);

    // Access Token을 Axios 인스턴스의 Authorization 헤더에 설정
    httpClientForCredentials.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    // Access Token 만료 1분 전에 갱신하는 타이머 설정
    const expiresIn = 60 * 1000; // 실제 토큰 만료 시간을 설정
    setTimeout(() => refreshAccessToken(accessToken), expiresIn - 60000);
};

// Access Token을 갱신하는 함수
const refreshAccessToken = async (currentAccessToken: string) => {
    console.log("refreshAccessToken start");
    try {
        // localStorage에서 refresh token 가져오기
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            console.error("리프레시 토큰이 없습니다.");
            return;
        }

        // 서버에 새 access token 요청
        const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/auth/refresh`, {
            accessToken: currentAccessToken,
        });

        // 응답으로 받은 새로운 Access Token을 Axios 헤더에 설정
        const { accessToken: newAccessToken } = response.data;
        httpClientForCredentials.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        // 다음 갱신을 위해 타이머 재설정
        const expiresIn = 60 * 1000; // 실제 토큰 만료 시간에 맞춰 조정
        setTimeout(() => refreshAccessToken(newAccessToken), expiresIn - 60000);
    } catch (error) {
        console.error("Access Token 갱신 실패", error);
        // 필요 시, 로그인 페이지로 리다이렉트 또는 추가 처리
    }
};
