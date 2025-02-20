'use client';

import {
    ChevronRight,
    GraduationCap,
    DollarSign,
    Calendar,
    Plane,
    Users,
    School,
    Heart
} from 'lucide-react';

interface VideoData {
    id: number;
    question: string;
    answer: string;
    videoUrl: string;
}

interface VideoButtonProps {
    video: VideoData;
    onClick: () => void;
    isActive?: boolean;
}

export const getIconForQuestion = (id: number) => {
    const commonClasses = "w-4 h-4";
    switch (id) {
        case 1:
            return <School className={commonClasses} />;
        case 2:
            return <GraduationCap className={commonClasses} />;
        case 3:
            return <DollarSign className={commonClasses} />;
        case 4:
            return <Calendar className={commonClasses} />;
        case 5:
            return <Heart className={commonClasses} />;
        case 6:
            return <Plane className={commonClasses} />;
        case 7:
            return <Users className={commonClasses} />;
        default:
            return <School className={commonClasses} />;
    }
};

const VideoButton = ({ video, onClick, isActive }: VideoButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`group relative w-full p-4 ${isActive
                ? 'bg-red-800 border-red-700'
                : 'bg-black/40 hover:bg-red-900 border-transparent'
                } border transition-all duration-300 rounded-lg flex items-center gap-4`}
        >
            {/* Línea indicadora lateral */}
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[calc(100%-24px)] rounded-full transition-all duration-300 ${isActive ? 'bg-red-400' : 'bg-transparent group-hover:bg-red-500'
                }`} />

            {/* Icono */}
            <div className={`flex-shrink-0 transition-all duration-300 ${isActive ? 'text-red-300' : 'text-red-400/70 group-hover:text-red-300'
                }`}>
                {getIconForQuestion(video.id)}
            </div>

            {/* Texto */}
            <div className="flex-1 min-w-0">
                <h3 className={`text-[15px] leading-relaxed transition-all duration-300 text-left ${isActive ? 'text-white font-medium' : 'text-gray-100 group-hover:text-white'
                    }`}>
                    {video.question}
                </h3>
            </div>

            {/* Flecha */}
            <div className={`flex-shrink-0 transition-transform duration-300 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                }`}>
                <ChevronRight className="w-4 h-4 text-red-300" />
            </div>
        </button>
    );
};

export default VideoButton; 