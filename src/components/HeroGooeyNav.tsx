'use client';

import GooeyNav from './GooeyNav';

const navigationItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function HeroGooeyNav() {
  return (
    <div className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[90vw] md:max-w-none px-4 md:px-0 pointer-events-none">
      <div className="flex justify-center pointer-events-auto">
        <GooeyNav
          items={navigationItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          className="backdrop-blur-md"
        />
      </div>
    </div>
  );
}