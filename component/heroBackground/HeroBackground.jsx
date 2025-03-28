"use client";

import dynamic from "next/dynamic";

const HeroMobileEffect = dynamic(
  () => import("./HeroMobileEffect").then((mod) => mod.HeroMobileEffect),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen bg-gradient-to-b from-black/10 to-black/30"></div>
    ),
  }
);

export function HeroBackground() {
  return <HeroMobileEffect />;
}
