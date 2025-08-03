"use client"

import "@google/model-viewer"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        autoRotate?: boolean | string
        cameraControls?: boolean | string
        shadowIntensity?: number | string
        environmentImage?: string
        disableZoom?: boolean | string
        minCameraOrbit?: string
        maxCameraOrbit?: string
        interactionPrompt?: string
        style?: React.CSSProperties
      }
    }
  }
}

interface ProjectModelProps {
  models: Array<{
    url: string
    alt: string
  }>
  autoSlideInterval?: number // in milliseconds
  showArrows?: boolean
}

const ProjectModel: React.FC<ProjectModelProps> = ({
  models,
  autoSlideInterval = 5000, // 5 seconds
  showArrows = true,
}) => {
  const viewerRef = useRef<HTMLElement | null>(null)
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || models.length <= 1) return

    const interval = setInterval(() => {
      setCurrentModelIndex((prevIndex) => (prevIndex === models.length - 1 ? 0 : prevIndex + 1))
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, models.length, autoSlideInterval])

  // Disable zoom functionality
  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault() // Completely prevent zoom
    }

    viewer.addEventListener("wheel", onWheel, { passive: false })

    return () => {
      viewer.removeEventListener("wheel", onWheel)
    }
  }, [])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentModelIndex((prevIndex) => (prevIndex === 0 ? models.length - 1 : prevIndex - 1))
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentModelIndex((prevIndex) => (prevIndex === models.length - 1 ? 0 : prevIndex + 1))
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentModel = models[currentModelIndex]

  return (
    <div className="relative w-full h-screen ">
       <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <h1 className="text-4xl font-bold text-black text-center tracking-wide">TOP PROJECTS</h1>
      </div>
      {/* Model Viewer */}
      <div className="w-full h-full flex items-center justify-center">
        <model-viewer
          ref={(el) => (viewerRef.current = el)}
          src={currentModel.url}
          alt={currentModel.alt}
          auto-rotate
          camera-controls
          shadow-intensity="1"
          environment-image="neutral"
          disable-zoom={true}
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
      </div>

      {/* Navigation Arrows */}
      {showArrows && models.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 z-[20] rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
            aria-label="Previous model"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 z-[20] rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
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

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400" : "bg-gray-400"}`} />
          <span className="text-xs">{isAutoPlaying ? "Auto" : "Manual"}</span>
        </div>
      </div>

      {/* Progress indicators */}
      {models.length > 1 && (
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          {models.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentModelIndex(index)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 10000)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentModelIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to model ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectModel
 