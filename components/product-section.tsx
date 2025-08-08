"use client"

import ProjectModel from "@/components/project-models"



export default function Products() {
  // Set this to false to hide grid labels for production
  const showGridLabels = false;
  const modelList = [
    {
      url: "https://anandhuajith.github.io/CDN/inside_drone.glb",
      alt: "Inside Drone Model",
    },
    {
      url: "https://anandhuajith.github.io/CDN/arduino_uno_r3_elegoo.glb",
      alt: "arduino",
    },
    
  ]
  return (
    <section id="projects" className="min-h-screen">
      <div className="parent">
        <div className="div1">
          {showGridLabels && <span className="text-xs text-gray-400 font-light">R1-5 C1</span>}
        </div>
        <div className="div2">
          {showGridLabels && <span className="text-xs text-gray-400 font-light">R1-5 C6</span>}
        </div>
        <div className="div3">{showGridLabels && <span className="text-xs text-gray-400 font-light">R1 C2</span>}</div>
        <div className="div4">{showGridLabels && <span className="text-xs text-gray-400 font-light">R1 C3</span>}</div>
        <div className="div5">{showGridLabels && <span className="text-xs text-gray-400 font-light">R1 C4</span>}</div>
        <div className="div6">{showGridLabels && <span className="text-xs text-gray-400 font-light">R1 C5</span>}</div>
        <div className="div7">{showGridLabels && <span className="text-xs text-gray-400 font-light">R2 C2</span>}</div>
        <div className="div8">{showGridLabels && <span className="text-xs text-gray-400 font-light">R2 C3</span>}</div>
        <div className="div9">{showGridLabels && <span className="text-xs text-gray-400 font-light">R2 C4</span>}</div>
        <div className="div10">{showGridLabels && <span className="text-xs text-gray-400 font-light">R2 C5</span>}</div>
        <div className="div11">{showGridLabels && <span className="text-xs text-gray-400 font-light">R3 C2</span>}</div>
        <div className="div12">{showGridLabels && <span className="text-xs text-gray-400 font-light">R3 C3</span>}</div>
        <div className="div13">{showGridLabels && <span className="text-xs text-gray-400 font-light">R3 C4</span>}</div>
        <div className="div14">{showGridLabels && <span className="text-xs text-gray-400 font-light">R3 C5</span>}</div>
        <div className="div15">{showGridLabels && <span className="text-xs text-gray-400 font-light">R4 C2</span>}</div>
        <div className="div16">{showGridLabels && <span className="text-xs text-gray-400 font-light">R4 C3</span>}</div>
        <div className="div17">{showGridLabels && <span className="text-xs text-gray-400 font-light">R4 C4</span>}</div>
        <div className="div18">{showGridLabels && <span className="text-xs text-gray-400 font-light">R4 C5</span>}</div>
        <div className="div19">{showGridLabels && <span className="text-xs text-gray-400 font-light">R5 C2</span>}</div>
        <div className="div20">{showGridLabels && <span className="text-xs text-gray-400 font-light">R5 C3</span>}</div>
        <div className="div21">{showGridLabels && <span className="text-xs text-gray-400 font-light">R5 C4</span>}</div>
        <div className="div22">{showGridLabels && <span className="text-xs text-gray-400 font-light">R5 C5</span>}</div>

        <div className="sketchfab-container">
          <div className="sketchfab-embed-wrapper">
            <div className="min-h-screen flex flex-col items-center justify-center ">
              <ProjectModel
        models={modelList}
        autoSlideInterval={6000} // 6 seconds
        showArrows={true}
      />
              </div>
          </div>
        </div>
        {/* Transparent overlay for C2 column */}
        <div className="c2-overlay"></div>

        {/* Transparent overlay for C5 column */}
        <div className="c5-overlay"></div>
      </div>
    </section>
  )
}
