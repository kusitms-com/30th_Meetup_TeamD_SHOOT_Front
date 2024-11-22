import React from 'react';

const PopUp = ({ isOpen, onDisconnect, onClose }: { 
    isOpen: boolean; 
    onDisconnect: () => void; 
    onClose: () => void; 
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-[#2C2D2E] rounded-2xl w-[300px] overflow-hidden shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Popup Title */}
                <div className="py-6 text-[17px] font-medium text-center text-white">
                    DISCONNECT THIS<br /> ACCOUNT?
                </div>
                
                {/* Button Container */}
                <div className="flex border-t border-[#525658]">
                    {/* Disconnect Button */}
                    <button
                        className="flex-1 py-4 text-[#D82356] text-base font-medium border-r border-[#3E3F40] hover:bg-[#3E3F40] transition-colors"
                        onClick={onDisconnect}
                    >
                        Disconnect
                    </button>
                    
                    {/* No Button */}
                    <button
                        className="flex-1 py-4 text-white text-base font-medium hover:bg-[#3E3F40] transition-colors"
                        onClick={onClose}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
