import colors from '../../../styles/color';
import typography from '../../../styles/typography';

interface SignupMainProps {
    onButtonClick: () => void;
}

const ConnectFigma: React.FC<SignupMainProps> = ({ onButtonClick }) => {
    return (
        <div className='flex flex-col items-center justify-center mt-[15.54px] w-[494px] gap-[80px]'>
            <div style={typography.links.large}>SHOOT integrating with your FIGMA account</div>
            <button 
                onClick={onButtonClick}
                style={{ 
                    width: '100%', 
                    height: '53px', 
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
