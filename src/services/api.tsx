import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: 'https://api.shoot-manage.com/',
});

export const setupInterceptors = () => {
  const navigate = useNavigate();

  api.interceptors.response.use(
    (response) => response, // 성공한 응답은 그대로 리턴
    async (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        try {
          // 리프레시 토큰을 통한 새로운 액세스 토큰 발급
          const refreshResponse = await api.post('/api/v1/auth/refresh', { withCredentials: true });
          
          if (refreshResponse.status === 200) {
            // 토큰 재발급 성공 시 리다이렉트
            navigate('/');
          } else {
            // 재발급 실패 시 로그인 페이지로 이동
            navigate('/signin');
          }
        } catch (refreshError) {
          // 리프레시 토큰 요청 자체가 실패한 경우 로그인 페이지로 이동
          navigate('/signin');
        }
      }
      return Promise.reject(error);
    }
  );
};

export default api;