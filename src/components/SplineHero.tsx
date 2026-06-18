'use client';

import { useEffect } from 'react';

interface SplineHeroProps {
  splineUrl: string;
}

export function SplineHero({ splineUrl }: SplineHeroProps) {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.97/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="w-full h-full bg-paper">
      {/* @ts-ignore - spline-viewer is a custom web component */}
      <spline-viewer url={splineUrl} />
    </div>
  );
}
