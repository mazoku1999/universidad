'use client';

import { useState } from 'react';
import { School } from 'lucide-react';
import VideoButton from '@/components/VideoButton';
import VideoPlayer from '@/components/VideoPlayer';
import { VideoProvider, useVideo } from '@/components/VideoContext';
import Image from 'next/image';

interface VideoData {
  id: number;
  question: string;
  answer: string;
  videoUrl: string;
}

const videos: VideoData[] = [
  {
    id: 1,
    question: "What academic programs and degrees does the institution offer?",
    answer: "SWAU offers a variety of undergraduate and graduate programs across multiple disciplines, including liberal arts, sciences, education, and psychology. For a comprehensive list of programs and degrees, please refer to the university's academic catalog.",
    videoUrl: "https://res.cloudinary.com/djfiaa34u/video/upload/v1739932976/1_ggekoh.mp4"
  },
  {
    id: 2,
    question: "What are the admission requirements?",
    answer: "Admission requirements vary depending on the applicant's background: Freshman Applicants: Typically need to submit high school transcripts and standardized test scores. Transfer Applicants: A minimum GPA of 2.0 is required. Applicants with fewer than 24 credits should also provide high school transcripts. RN to BS Nursing Applicants: Must have completed an associate degree or diploma program from an accredited institution and hold an active, unencumbered RN license. Provisional Applicants: Individuals over 25 who do not meet regular admission criteria may be considered on an individual basis. Placement scores in English and math are also required for both freshman and transfer students.",
    videoUrl: "https://res.cloudinary.com/djfiaa34u/video/upload/v1739933006/2_d6eixj.mp4"
  },
  {
    id: 3,
    question: "Is there a financing plan available?",
    answer: "Yes, SWAU offers various financial aid options, including federal and state grants, loans, and scholarships. The Department of Student Financial Services can provide detailed information and assistance.",
    videoUrl: "https://res.cloudinary.com/djfiaa34u/video/upload/v1739932986/3_mgpjr0.mp4"
  },
  {
    id: 4,
    question: "What are the important dates for the admission and registration process?",
    answer: "For international students, application deadlines are May 1 for the fall semester and October 1 for the spring semester. Students must be fully admitted by June 1 for the fall semester and November 1 for the spring semester to allow sufficient time for obtaining an I-20 and student visa.",
    videoUrl: "https://res.cloudinary.com/djfiaa34u/video/upload/v1739932999/4_znvxta.mp4"
  },
  {
    id: 5,
    question: "Does the university offer scholarships or financial aid? If so, what are the application requirements?",
    answer: "SWAU provides over 140 internal scholarships to undergraduate students, with 80% of undergraduates receiving scholarships. Application requirements vary by scholarship; it's recommended to contact the Student Financial Services office for specific details.",
    videoUrl: "https://res.cloudinary.com/djfiaa34u/video/upload/v1739932986/5_nsahvb.mp4"
  },
  {
    id: 6,
    question: "What is the application process for international students?",
    answer: "International applicants should submit their applications by the specified deadlines and ensure they are fully admitted by the dates mentioned above. Detailed admission requirements for international students can be found in the university's academic catalog.",
    videoUrl: "https://res.cloudinary.com/djfiaa34u/video/upload/v1739932988/6_tezq8o.mp4"
  },
  {
    id: 7,
    question: "How can parents stay informed about their child's progress and well-being at the university?",
    answer: "Specific mechanisms for parental involvement are not outlined in the provided sources. Typically, universities offer parent portals or communication channels. For detailed information, please contact SWAU's student affairs or academic services departments.",
    videoUrl: "https://res.cloudinary.com/djfiaa34u/video/upload/v1739932994/7_jweozy.mp4"
  }
];

function HomeContent() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const { setVideo } = useVideo();

  const handleQuestionClick = (video: VideoData) => {
    console.log('🎥 Question clicked:', video.id);
    if (selectedVideo?.id === video.id) {
      console.log('⚠️ Same video clicked, ignoring');
      return;
    }
    console.log('🔄 Changing video to:', video.id);
    setSelectedVideo(video);
    setVideo(video.videoUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-950">
      {/* Efectos de fondo modernos */}
      <div className="absolute inset-0">
        {/* Gradiente base con efecto de viñeta */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-red-950" />

        {/* Efecto de luz superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-red-500/10 to-transparent" />

        {/* Destellos sutiles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(220,38,38,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,rgba(220,38,38,0.05),transparent)]" />

        {/* Patrón de puntos muy sutil */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_2px_at_center,rgb(255,255,255),transparent)_0_0/20px_20px]" />
      </div>

      <div className="relative flex flex-col min-h-screen">
        {/* Header más minimalista */}
        <header className="sticky top-0 z-50 bg-gradient-to-b from-red-950 to-red-950/80 pt-6 pb-4 px-4 border-b border-white/[0.02] shadow-xl shadow-red-950/50">
          <div className="container mx-auto">
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-center">
              <a href="/" className="text-white transform hover:scale-105 transition-transform duration-300">
                <Image src="/logo.svg" alt="SWAU Logo" width={160} height={45} className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-center">
              <a href="/" className="text-white transform hover:scale-105 transition-transform duration-300">
                <Image src="/logo.svg" alt="SWAU Logo" width={200} height={56} className="h-14 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </header>

        {/* Main Content con más espacio y mejor organización */}
        <main className="flex-1 container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Video Section con sombras más sutiles */}
            <div className="order-1 lg:order-2 lg:w-1/2 lg:sticky lg:top-[calc(2rem+100px)] lg:self-start">
              <div className="w-full max-w-sm mx-auto lg:max-w-md">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-sm border border-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <VideoPlayer />
                </div>
              </div>
            </div>

            {/* Questions List con más espacio entre elementos */}
            <div className="order-2 lg:order-1 lg:w-1/2 space-y-4">
              {videos.map((video) => (
                <VideoButton
                  key={video.id}
                  video={video}
                  onClick={() => handleQuestionClick(video)}
                  isActive={selectedVideo?.id === video.id}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <VideoProvider>
      <HomeContent />
    </VideoProvider>
  );
}
