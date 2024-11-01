import colors from '../../../styles/color';
import typography from '../../../styles/typography';

const ConnectFigma = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[15.54px] w-[494px] gap-[80px]'>
            <div style={typography.links.large}>SHOOT integrating with your FIGMA account</div>
            <button 
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
