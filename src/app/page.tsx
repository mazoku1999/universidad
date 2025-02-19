'use client';

import { useState } from 'react';
import { GraduationCap, Lightbulb, School } from 'lucide-react';
import VideoButton, { getIconForQuestion } from '@/components/VideoButton';
import VideoPlayer from '@/components/VideoPlayer';
import { VideoProvider, useVideo } from '@/components/VideoContext';

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
    videoUrl: "/videos/1.mp4"
  },
  {
    id: 2,
    question: "What are the admission requirements?",
    answer: "Admission requirements vary depending on the applicant's background: Freshman Applicants: Typically need to submit high school transcripts and standardized test scores. Transfer Applicants: A minimum GPA of 2.0 is required. Applicants with fewer than 24 credits should also provide high school transcripts. RN to BS Nursing Applicants: Must have completed an associate degree or diploma program from an accredited institution and hold an active, unencumbered RN license. Provisional Applicants: Individuals over 25 who do not meet regular admission criteria may be considered on an individual basis. Placement scores in English and math are also required for both freshman and transfer students.",
    videoUrl: "/videos/2.mp4"
  },
  {
    id: 3,
    question: "Is there a financing plan available?",
    answer: "Yes, SWAU offers various financial aid options, including federal and state grants, loans, and scholarships. The Department of Student Financial Services can provide detailed information and assistance.",
    videoUrl: "/videos/3.mp4"
  },
  {
    id: 4,
    question: "What are the important dates for the admission and registration process?",
    answer: "For international students, application deadlines are May 1 for the fall semester and October 1 for the spring semester. Students must be fully admitted by June 1 for the fall semester and November 1 for the spring semester to allow sufficient time for obtaining an I-20 and student visa.",
    videoUrl: "/videos/4.mp4"
  },
  {
    id: 5,
    question: "Does the university offer scholarships or financial aid? If so, what are the application requirements?",
    answer: "SWAU provides over 140 internal scholarships to undergraduate students, with 80% of undergraduates receiving scholarships. Application requirements vary by scholarship; it's recommended to contact the Student Financial Services office for specific details.",
    videoUrl: "/videos/5.mp4"
  },
  {
    id: 6,
    question: "What is the application process for international students?",
    answer: "International applicants should submit their applications by the specified deadlines and ensure they are fully admitted by the dates mentioned above. Detailed admission requirements for international students can be found in the university's academic catalog.",
    videoUrl: "/videos/6.mp4"
  },
  {
    id: 7,
    question: "How can parents stay informed about their child's progress and well-being at the university?",
    answer: "Specific mechanisms for parental involvement are not outlined in the provided sources. Typically, universities offer parent portals or communication channels. For detailed information, please contact SWAU's student affairs or academic services departments.",
    videoUrl: "/videos/7.mp4"
  }
];

const WAITING_VIDEO_URL = "/videos/espera.mp4";

function HomeContent() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const { setVideo, resetVideo } = useVideo();

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600')] opacity-[0.02] bg-cover bg-center mix-blend-overlay" />

      <div className="relative flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg pt-4 pb-6 px-4 border-b border-slate-700/50">
          <div className="container mx-auto">
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500/10 to-violet-500/10 border border-sky-400/20">
                <School className="w-6 h-6 text-sky-400" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                Interactive <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Questions</span>
              </h1>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500/10 to-violet-500/10 border border-sky-400/20">
                <School className="w-12 h-12 text-sky-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Interactive<br />
                <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Questions</span>
              </h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Video Section - Always on top in mobile */}
            <div className="order-1 lg:order-2 lg:w-1/2 lg:sticky lg:top-[calc(2rem+100px)] lg:self-start">
              <div className="w-full max-w-sm mx-auto lg:max-w-md">
                <div className="rounded-xl overflow-hidden bg-black/40 border border-slate-700/50 shadow-[0_0_25px_rgba(56,189,248,0.15)]">
                  <VideoPlayer />
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="order-2 lg:order-1 lg:w-1/2 space-y-3">
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
