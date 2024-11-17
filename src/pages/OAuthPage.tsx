import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axiosInstance';

const OAuthPage = () => {
    const navigate = useNavigate();

    // URL에서 Authorization Code 추출
    const getCodeFromUrl = (): string | null => {
      const params = new URLSearchParams(window.location.search);
      console.log('params: ', params);
      console.log('code: ', params.get('code'));
  
      return params.get('code');
    };
  
    // Google 로그인을 처리하는 함수
    const handleLogin = async (code: string) => {
      try {
        // GET 요청으로 Authorization Code 전달
        const response = await instance.get(`/api/v1/auth/code/google`, {
          params: { code }, // 쿼리 파라미터로 코드 전달
          withCredentials: true
        });

        console.log('로그인 성공:', response.data);
  
        // 토큰 저장
        localStorage.setItem('accessToken', response.data.data.accessToken);
        console.log(response.data.data.accessToken);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);
        console.log(response.data.data.refreshToken);

        // 메인 페이지로 이동
        navigate('/');
      } catch (error: any) {
        console.error('로그인 실패:', error);
  
        if (error.response?.status === 401) {
          // 회원가입 페이지로 이동
          navigate('/signup');
        } else {
          alert('로그인 처리 중 오류가 발생했습니다.');
        }
      }
    };
  
    useEffect(() => {
      const code = getCodeFromUrl();
      if (code) {
        console.log('Google Authorization Code:', code);
        handleLogin(code);
      }
    }, []);
  
    return (
        <div>
            {/** 200이 오면 바로 로그인 페이지로  */}
        </div>
    );
};

export default OAuthPage;