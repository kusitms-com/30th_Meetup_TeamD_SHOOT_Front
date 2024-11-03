import { Link } from 'react-router-dom';
import shootLogo from '../assets/shootLogo.png';
import colors from '../styles/color';
import typography from '../styles/typography';
import googleLogo from '../assets/googleLogo.png';

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img 
                src={shootLogo} 
                alt="shootLogo" 
                style={{ width: "315px", height: "66.23px" }} 
            />
            <div className='flex flex-col mt-[15.54px] w-[494px]' >
                <div style={typography.title.medium}>Sign in to your account</div>
                <button 
                    className="flex items-center justify-center mt-[12px] gap-[8px]"
                    style={{ 
                        width: '100%', 
                        height: '53px', 
                        backgroundColor: colors.grayscale[80],
                        ...typography.title.small
                    }}
                >
                    <img src={googleLogo} alt='googleLogo' style={{ width: '24px', height: '24px', top: '300px' }} />
                    <span style={typography.title.small}>Continue With Google</span>
                </button>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mt-[16px]'>
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
