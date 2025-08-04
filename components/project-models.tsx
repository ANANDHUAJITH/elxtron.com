"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Custom element typing for model-viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        autoRotate?: boolean | string;
        cameraControls?: boolean | string;
        shadowIntensity?: number | string;
        environmentImage?: string;
        disableZoom?: boolean | string;
        minCameraOrbit?: string;
        maxCameraOrbit?: string;
        interactionPrompt?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

// ✅ Dynamic import of model-viewer to prevent SSR issues
const loadModelViewer = () => import("@google/model-viewer");

interface ProjectModelProps {
  models: Array<{
    url: string;
    alt: string;
  }>;
  autoSlideInterval?: number;
  showArrows?: boolean;
}

const ProjectModel: React.FC<ProjectModelProps> = ({
  models,
  autoSlideInterval = 5000,
  showArrows = true,
}) => {
  const viewerRef = useRef<HTMLElement | null>(null);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isViewerReady, setIsViewerReady] = useState(false);

  // Load <model-viewer> dynamically in client
  useEffect(() => {
    loadModelViewer().then(() => setIsViewerReady(true));
  }, []);

  // Auto-slide timer
  useEffect(() => {
    if (!isAutoPlaying || models.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentModelIndex((prevIndex) =>
        prevIndex === models.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, models.length, autoSlideInterval]);

  // Disable zoom
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
    };

    viewer.addEventListener("wheel", onWheel, { passive: false });
    return () => viewer.removeEventListener("wheel", onWheel);
  }, []);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentModelIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentModelIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentModel = models[currentModelIndex];

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <h1 className="text-4xl font-bold text-black text-center tracking-wide">
          TOP PROJECTS
        </h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        {isViewerReady ? (
          <model-viewer
            ref={(el: HTMLElement | null) => {
              viewerRef.current = el;
            }}
            src={currentModel.url}
            alt={currentModel.alt}
            auto-rotate
            camera-controls
            shadow-intensity="1"
            environment-image="neutral"
            disable-zoom="true"
            interaction-prompt="when-focused"
            min-camera-orbit="auto auto 1m"
            max-camera-orbit="auto auto 4m"
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "transparent",
              overflow: "visible",
            }}
          />
        ) : (
          <div className="text-gray-600 text-sm">Loading viewer...</div>
        )}
      </div>

      {/* Navigation Arrows */}
      {showArrows && models.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 z-20 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
            aria-label="Previous model"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 z-20 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
            aria-label="Next model"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Model Info */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
        <p className="text-sm font-medium">{currentModel.alt}</p>
        <p className="text-xs text-gray-300">
          {currentModelIndex + 1} of {models.length}
        </p>
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isAutoPlaying ? "bg-green-400" : "bg-gray-400"
            }`}
          />
          <span className="text-xs">{isAutoPlaying ? "Auto" : "Manual"}</span>
        </div>
      </div>

      {/* Progress dots */}
      {models.length > 1 && (
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          {models.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentModelIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentModelIndex
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to model ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectModel;
