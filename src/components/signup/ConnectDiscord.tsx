import colors from '../../styles/color';
import typography from '../../styles/typography';

const ConnectDiscord = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[15.54px] w-[494px]'>
            <div style={typography.title.medium}> 
                <p className='text-center' >
                    SHOOT intergrating with your DISCORD account
                </p>
                <p className='text-center'>
                    to get alarm from SHOOT
                </p>
            </div>
            <button 
                style={{ 
                    width: '100%', 
                    height: '53px', 
                    marginTop: '80px', 
                    backgroundColor: colors.grayscale[80],
                    ...typography.title.xsmall
                }}
            >
                Connect DISCORD
            </button>
            <button 
                style={{ 
                    width: '100%', 
                    height: '53px', 
                    marginTop: '40px', 
                    backgroundColor: colors.primary[50],
                    ...typography.title.xsmall,
                    color: colors.grayscale[90]
                }}
            >
                Do it later
            </button>
        </div>
    );
};

export default ConnectDiscord;