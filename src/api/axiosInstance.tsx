import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 토큰 갱신 함수 (예시)
const refreshAccessToken = async (): Promise<{ accessToken: string; refreshToken: string }> => {
  // 여기에 실제 토큰 갱신 API 호출 로직을 추가하세요
  const response = await axios.post('/api/v1/auth/refresh', {
    refreshToken: localStorage.getItem('refreshToken'),
  });
  console.log(response.data);
  return response.data;
};

// Axios 인스턴스 생성
const instance = axios.create({
//   baseURL: 'https://localhost:5173', // API 서버 주소
  baseURL: 'https://api.shoot-manage.com/', // API 서버 주소

});

// 요청 인터셉터
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

// 응답 인터셉터
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
      if (originalRequest._retryCount < 2) {
        originalRequest._retryCount += 1;
        console.log('Attempting to refresh token...');

        try {
          const newTokens = await refreshAccessToken();
          localStorage.setItem('accessToken', newTokens.accessToken);
          localStorage.setItem('refreshToken', newTokens.refreshToken);

          console.log('New tokens saved to localStorage');

          // 새로운 토큰으로 원래 요청 다시 시도
          originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;

          return instance(originalRequest);
        } catch (e) {
          console.error('Token refresh failed:', e);
          // 토큰 갱신 실패
          return Promise.reject(e);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
