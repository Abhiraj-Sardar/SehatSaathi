import { useState, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
} from "lucide-react";

const VideoPage = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Clean Environment, Healthy Living",
      summary:
        "Discover how maintaining a clean environment reduces pollution, prevents diseases, and supports overall community health. Learn simple steps individuals can take to protect nature and promote sustainable living.",
      url: "https://media.istockphoto.com/id/2061014598/video/water-polluted-with-blue-green-algae.mp4?s=mp4-640x640-is&k=20&c=TqP8xm_2V1G2VJYurdiFoh27v_niDKO5bDpSbqIdb_U=",
      isPlaying: false,
      isMuted: false,
      currentTime: 0,
      duration: 0,
    },
    {
      id: 2,
      title: "Understanding Blood Sugar Levels",
      summary:
        "Learn how blood sugar affects energy, metabolism, and overall health. Discover the importance of balanced glucose levels in preventing diabetes and maintaining long-term wellness.",
      url: "https://cdn.pixabay.com/video/2022/12/23/144006-784164313_tiny.mp4",
      isPlaying: false,
      isMuted: false,
      currentTime: 0,
      duration: 0,
    },
    {
      id: 3,
      title: "Exercise for a Healthy Lifestyle",
      summary:
        "Discover how regular physical activity improves cardiovascular health, builds strength, enhances flexibility, and reduces stress. Learn the importance of exercise in maintaining overall wellness and boosting daily energy levels.",

      url: "https://cdn.pixabay.com/video/2022/12/18/143431-782373969_tiny.mp4",
      isPlaying: false,
      isMuted: false,
      currentTime: 0,
      duration: 0,
    },
    {
      id: 4,
      title: "Prioritizing Mental Health",
      summary:
        "Learn the importance of mental well-being in daily life. Explore how stress management, mindfulness, and emotional awareness contribute to resilience, happiness, and overall health.",
      url: "https://cdn.pixabay.com/video/2016/07/28/4054-176749025_tiny.mp4",
      isPlaying: false,
      isMuted: false,
      currentTime: 0,
      duration: 0,
    },
    {
      id: 5,
      title: "The Role of Blood Cells in Health",
      summary:
        "Explore the vital functions of red blood cells, white blood cells, and platelets. Understand how they transport oxygen, fight infections, and heal the body, making them essential for human survival.",
      url: "https://cdn.pixabay.com/video/2023/11/18/189681-886028714_tiny.mp4",
      isPlaying: false,
      isMuted: false,
      currentTime: 0,
      duration: 0,
    },
    {
      id: 6,
      title: "Understanding Human Genetics",
      summary:
        "Dive into the fascinating world of genetics and learn how DNA shapes our traits, influences health, and impacts future generations. Explore the role of genes in personalized medicine and preventive healthcare.",
      url: "https://cdn.pixabay.com/video/2020/06/03/40967-427876030_large.mp4",
      isPlaying: false,
      isMuted: false,
      currentTime: 0,
      duration: 0,
    },
  ]);

  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    setVideos((prev) =>
      prev.map((v) => {
        if (v.id === id) {
          if (v.isPlaying) {
            video.pause();
            return { ...v, isPlaying: false };
          } else {
            video.play();
            return { ...v, isPlaying: true };
          }
        }
        return v;
      })
    );
  };

  const toggleMute = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    setVideos((prev) =>
      prev.map((v) => {
        if (v.id === id) {
          video.muted = !v.isMuted;
          return { ...v, isMuted: !v.isMuted };
        }
        return v;
      })
    );
  };

  const toggleFullscreen = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const restartVideo = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    video.currentTime = 0;
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, currentTime: 0 } : v))
    );
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleTimeUpdate = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    setVideos((prev) =>
      prev.map((v) =>
        v.id === id
          ? {
              ...v,
              currentTime: video.currentTime,
              duration: video.duration || 0,
            }
          : v
      )
    );
  };

  const handleSeek = (id, value) => {
    const video = videoRefs.current[id];
    if (!video) return;

    video.currentTime = value;
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, currentTime: value } : v))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Video Learning Center
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master new skills with our comprehensive video tutorials featuring
            interactive controls and detailed summaries
          </p>
        </header>

        <div className="space-y-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
                    <video
                      ref={(el) => (videoRefs.current[video.id] = el)}
                      className="w-full aspect-video object-cover"
                      onTimeUpdate={() => handleTimeUpdate(video.id)}
                      onLoadedMetadata={() => handleTimeUpdate(video.id)}
                    >
                      <source src={video.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Video Overlay Controls */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <button
                        onClick={() => togglePlay(video.id)}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-200"
                      >
                        {video.isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Custom Controls */}
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 space-y-3">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max={video.duration || 0}
                        value={video.currentTime}
                        onChange={(e) =>
                          handleSeek(video.id, parseFloat(e.target.value))
                        }
                        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${
                            (video.currentTime / video.duration) * 100
                          }%, #4b5563 ${
                            (video.currentTime / video.duration) * 100
                          }%, #4b5563 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-300">
                        <span>{formatTime(video.currentTime)}</span>
                        <span>{formatTime(video.duration)}</span>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => togglePlay(video.id)}
                          className="bg-purple-600 hover:bg-purple-700 rounded-lg p-2 transition-all duration-200"
                        >
                          {video.isPlaying ? (
                            <Pause className="w-5 h-5 text-white" />
                          ) : (
                            <Play className="w-5 h-5 text-white" />
                          )}
                        </button>

                        <button
                          onClick={() => restartVideo(video.id)}
                          className="bg-gray-600 hover:bg-gray-700 rounded-lg p-2 transition-all duration-200"
                        >
                          <RotateCcw className="w-5 h-5 text-white" />
                        </button>

                        <button
                          onClick={() => toggleMute(video.id)}
                          className="bg-gray-600 hover:bg-gray-700 rounded-lg p-2 transition-all duration-200"
                        >
                          {video.isMuted ? (
                            <VolumeX className="w-5 h-5 text-white" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-white" />
                          )}
                        </button>
                      </div>

                      <button
                        onClick={() => toggleFullscreen(video.id)}
                        className="bg-gray-600 hover:bg-gray-700 rounded-lg p-2 transition-all duration-200"
                      >
                        <Maximize className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Video Information */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {video.title}
                    </h2>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-500/30">
                      <h3 className="text-lg font-semibold text-purple-200 mb-3">
                        Video Summary
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {video.summary}
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        {Math.floor(video.duration / 60) || 0}m
                      </div>
                      <div className="text-sm text-gray-400">Duration</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">
                        HD
                      </div>
                      <div className="text-sm text-gray-400">Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default VideoPage;