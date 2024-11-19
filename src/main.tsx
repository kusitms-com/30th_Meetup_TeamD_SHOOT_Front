// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter만 임포트
import App from './App.tsx';
import Header from './components/Header.tsx';
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>  {/* 이곳에서만 BrowserRouter를 사용 */}
        <Header />
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
