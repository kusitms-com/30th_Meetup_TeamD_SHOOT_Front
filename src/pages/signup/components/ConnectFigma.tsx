import colors from '../../../styles/color';
import typography from '../../../styles/typography';
import shootLogo from '../../../assets/shoot/shootLogo.png';
interface SignupMainProps {
    onButtonClick: () => void;
}

const ConnectFigma: React.FC<SignupMainProps> = ({ onButtonClick }) => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-full mt-[15.54px] '>
            <img src={shootLogo} className='h-[66px] mb-[55px]'/>
            <div style={typography.links.large}>SHOOT integrating with your FIGMA account</div>
            <button 
                className="flex items-center justify-center mt-[12px] gap-[8px] rounded-lg bg-[colors.grayscale[80]] w-full h-[53px] hover:border-[1px] hover:border-[#9CFFBF]"
                onClick={onButtonClick}
                style={{ 
                    width: '494px', 
                    height: '53px', 
                    marginTop: '80px',
                    backgroundColor: colors.grayscale[80],
                    ...typography.title.xsmall
                }}
            >
                Connect FIGMA
            </button>
        </div>
    );
};

export default ConnectFigma;
