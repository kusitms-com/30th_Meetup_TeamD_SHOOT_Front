// api/axiosInstance.ts

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 토큰 갱신 함수
const refreshAccessToken = async (): Promise<{ accessToken: string; refreshToken: string }> => {
  const response = await axios.post('/api/v1/auth/refresh', {
    refreshToken: localStorage.getItem('refreshToken'),
  });
  console.log(response.data);
  return response.data;
};

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: 'https://api.shoot-manage.com', 
  headers: { "Content-type": "application/json" }, 
});

let isInterceptorAdded = false;

if (!isInterceptorAdded) {
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
      try {
        console.log("요청 인터셉터");
        const accessToken = localStorage.getItem('accessToken');
        console.log('Access token in request interceptor:', accessToken);
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      } catch (error) {
        console.error('Error getting access token from localStorage:', error);
      }
      return config;
    },
    (error: AxiosError) => {
      console.error('Request interceptor error:', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retryCount?: number };
  
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 500) &&
        !originalRequest._retryCount
      ) {
        originalRequest._retryCount = originalRequest._retryCount || 0;
        
        // Retry 1번까지만 허용
        if (originalRequest._retryCount < 2) {
          originalRequest._retryCount += 1;
          console.log('Attempting to refresh token...');
  
          try {
            // 토큰 갱신 시도
            const newTokens = await refreshAccessToken();
            localStorage.setItem('accessToken', newTokens.accessToken);
            localStorage.setItem('refreshToken', newTokens.refreshToken);
  
            console.log('New tokens saved to localStorage');
  
            originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
  
            // 새 토큰으로 요청 재시도
            return instance(originalRequest);
          } catch (e) {
            console.error('Token refresh failed:', e);
            // 토큰 갱신 실패 시에는 재시도하지 않음
            return Promise.reject(e);
          }
        } else {
          // 이미 재시도 횟수 초과 시에는 재시도하지 않음
          return Promise.reject(error);
        }
      }
  
      // 그 외 오류 처리
      return Promise.reject(error);
    }
  );
  
  isInterceptorAdded = true; // 인터셉터가 등록되었음을 표시
}

export default instance;
