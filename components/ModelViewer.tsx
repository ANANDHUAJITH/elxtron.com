'use client';

import '@google/model-viewer';
import React, { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
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

const ModelViewer = () => {
  const viewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const onWheel = (e: WheelEvent) => {
      const scaledEvent = new WheelEvent('wheel', {
        ...e,
        deltaY: e.deltaY * 0.3,
        bubbles: true,
        cancelable: true,
      });

      e.preventDefault();
      viewer.dispatchEvent(scaledEvent);
    };

    viewer.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      viewer.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'visible' }}>
      <model-viewer
        ref={(el: HTMLElement | null) => (viewerRef.current = el)}
        src="https://anandhuajith.github.io/CDN/inside_drone.glb"
        alt="Drone Model"
        auto-rotate
        camera-controls
        camera-orbit="0deg 75deg 0.1m"
        shadow-intensity="2"
        environment-image="neutral"
        disable-zoom={false}
        interaction-prompt="when-focused"
        min-camera-orbit="auto auto 0.2m"
        max-camera-orbit="auto auto 1m"
        style={{
          width: '150vw',
          height: '100vh',
          marginLeft: '-25vw',
          backgroundColor: 'transparent',
          overflow: 'visible',
        }}
      />
    </div>
  );
};

export default ModelViewer;
