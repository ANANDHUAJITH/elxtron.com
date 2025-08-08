'use client';

import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), {
  ssr: false,});
export default function GridDemo() {
  // Set this to false to hide grid labels for production
  const showGridLabels = false

  return (
    <div id="home" className="min-h-screen">
      <div className="parent">
        <div className="div1 z-20">
          {showGridLabels && <span className="text-xs text-gray-400 font-light">R1-5 C1</span>}
        </div>
        <div className="div2 z-20">
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

        {/* ASCII Banner - positioned between R1 and R2 */}
        <div className="ascii-banner">
          <pre className="ascii-text">
            {`  ░██     ░██                       ░██       ░██                         ░██████████                                                                                            ░████████              ░██░██        ░██ ░██                         ░██████████                  ░██                               
  ░██     ░██                       ░██                                       ░██                                                                                                ░██    ░██                ░██        ░██                                 ░██                      ░██                               
  ░██     ░██  ░██████    ░███████  ░██    ░██░██░████████   ░████████        ░██     ░███████  ░█████████████   ░███████  ░██░████ ░██░████  ░███████  ░██    ░██    ░██        ░██    ░██  ░██    ░██ ░██░██  ░████████ ░██░████████   ░████████        ░██     ░███████   ░████████  ░██████   ░██    ░██         
  ░██████████       ░██  ░██    ░██ ░██   ░██ ░██░██    ░██ ░██    ░██        ░██    ░██    ░██ ░██   ░██   ░██ ░██    ░██ ░███     ░███     ░██    ░██ ░██    ░██    ░██        ░████████   ░██    ░██ ░██░██ ░██    ░██ ░██░██    ░██ ░██    ░██        ░██    ░██    ░██ ░██    ░██       ░██  ░██    ░██         
  ░██     ░██  ░███████  ░██        ░███████  ░██░██    ░██ ░██    ░██        ░██    ░██    ░██ ░██   ░██   ░██ ░██    ░██ ░██      ░██      ░██    ░██  ░██  ░████  ░██         ░██     ░██ ░██    ░██ ░██░██ ░██    ░██ ░██░██    ░██ ░██    ░██        ░██    ░██    ░██ ░██    ░██  ░███████  ░██    ░██         
  ░██     ░██ ░██   ░██  ░██    ░██ ░██   ░██ ░██░██    ░██ ░██   ░███        ░██    ░██    ░██ ░██   ░██   ░██ ░██    ░██ ░██      ░██      ░██    ░██   ░██░██ ░██░██          ░██     ░██ ░██   ░███ ░██░██ ░██   ░███ ░██░██    ░██ ░██   ░███        ░██    ░██    ░██ ░██   ░███ ░██   ░██  ░██   ░███         
  ░██     ░██  ░█████░██  ░███████  ░██    ░██░██░██    ░██  ░█████░██        ░██     ░███████  ░██   ░██   ░██  ░███████  ░██      ░██       ░███████     ░███   ░███    ░██    ░█████████   ░█████░██ ░██░██  ░█████░██ ░██░██    ░██  ░█████░██        ░██     ░███████   ░█████░██  ░█████░██  ░█████░██    ░██  
                                                                  ░██                                                                                                     ░█                                                                  ░██                                                       ░██         
                                                            ░███████                                                                                                     ░█                                                             ░███████                                                  ░███████          `}
          </pre>
        </div>

        {/* Sketchfab 3D Model - positioned over C2 through C5 columns */}
        <div className="sketchfab-container">
          <div className="sketchfab-embed-wrapper">
            <div className="min-h-screen flex flex-col items-center justify-center ">
              <ModelViewer />
              </div>
          </div>
        </div>

        {/* Transparent overlay for C2 column */}
        <div className="c2-overlay"></div>

        {/* Transparent overlay for C5 column */}
        <div className="c5-overlay"></div>
      </div>
    </div>
  )
}
