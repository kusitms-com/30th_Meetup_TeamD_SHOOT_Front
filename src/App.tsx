// App.tsx
import {Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import MainPage from './pages/main/MainPage';
import OAuthCallback from './services/OAuthCallback';



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* <Route path="/oauth" element={<OAuthCallback />} /> OAuthCallback 경로 */}
        </Routes>
    );
};

export default App;
