'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useVideo } from './VideoContext';
import type ReactPlayer from 'react-player';

// Importar ReactPlayer dinámicamente sin SSR
const ReactPlayerComponent = dynamic(() => import('react-player/lazy'), {
    ssr: false,
});

interface VideoPlayerProps {
    className?: string;
}

const VideoPlayer = ({ className }: VideoPlayerProps) => {
    const { currentSrc, isPlaying, isWaitingVideo, key, setPlaying, resetVideo } = useVideo();
    const playerRef = useRef<ReactPlayer>(null);

    useEffect(() => {
        console.log('🎬 VideoPlayer mounted/updated:', {
            currentSrc,
            isWaitingVideo,
            isPlaying
        });
        if (playerRef.current) {
            playerRef.current.seekTo(0);
        }
    }, [currentSrc, isPlaying, isWaitingVideo]);

    const handlePause = () => {
        console.log('⏸️ Video paused');
        if (playerRef.current) {
            playerRef.current.seekTo(0);
        }
        setPlaying(false);
    };

    const handleEnded = () => {
        console.log('🔴 Video ended');
        if (!isWaitingVideo) {
            console.log('🔄 Resetting to waiting video');
            resetVideo();
        }
    };

    const handleReady = () => {
        console.log('✅ Video ready:', { currentSrc, isWaitingVideo });
    };

    const handleError = (error: Error) => {
        console.error('❌ Video error:', error);
    };

    return (
        <div className={`w-full aspect-[3/4] bg-black ${className || ''}`}>
            <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
                </div>
            }>
                <ReactPlayerComponent
                    key={key}
                    ref={playerRef}
                    url={currentSrc}
                    width="100%"
                    height="100%"
                    playing={isPlaying || isWaitingVideo}
                    controls={false}
                    muted={isWaitingVideo}
                    loop={isWaitingVideo}
                    onEnded={handleEnded}
                    onPause={handlePause}
                    onReady={handleReady}
                    onError={handleError}
                    playsinline
                    stopOnUnmount={true}
                    config={{
                        file: {
                            attributes: {
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }
                            },
                            forceVideo: true
                        }
                    }}
                />
            </Suspense>
        </div>
    );
};

export default VideoPlayer;