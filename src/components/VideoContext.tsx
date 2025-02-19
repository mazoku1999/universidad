'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface VideoContextType {
    currentSrc: string;
    isPlaying: boolean;
    isWaitingVideo: boolean;
    key: number;
    setVideo: (src: string) => void;
    setPlaying: (playing: boolean) => void;
    resetVideo: () => void;
}

const VideoContext = createContext<VideoContextType | null>(null);

export const useVideo = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error('useVideo must be used within a VideoProvider');
    }
    return context;
};

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentSrc, setCurrentSrc] = useState('/videos/espera.mp4');
    const [isPlaying, setIsPlaying] = useState(false);
    const [key, setKey] = useState(0);

    const setVideo = useCallback((src: string) => {
        console.log('🎥 Setting video source:', src);
        setKey(prev => prev + 1);
        setCurrentSrc(src);
        setIsPlaying(true);
    }, []);

    const setPlaying = useCallback((playing: boolean) => {
        console.log('⏯️ Setting playing state:', playing);
        setIsPlaying(playing);
    }, []);

    const resetVideo = useCallback(() => {
        console.log('🔄 Resetting video');
        setCurrentSrc('/videos/espera.mp4');
        setIsPlaying(false);
        setKey(prev => prev + 1);
    }, []);

    const value = {
        currentSrc,
        isPlaying,
        isWaitingVideo: currentSrc.includes('espera.mp4'),
        key,
        setVideo,
        setPlaying,
        resetVideo
    };

    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    );
}; 