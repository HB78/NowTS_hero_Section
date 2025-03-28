"use client";
import Orb from "@/component/Orb/Orb";
import {
  betterauth,
  next,
  now,
  postgresql,
  prisma,
  resend,
  shadcn,
  stripe,
  tailwind,
} from "@/lib/index";
import { useEffect, useState } from "react";

// Composant Skeleton pour remplacer l'Orb pendant le chargement
const OrbSkeleton = ({ width, height }) => {
  return (
    <div
      className="rounded-full bg-gray-800/20 animate-pulse flex items-center justify-center"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="w-1/2 h-1/2 rounded-full bg-gray-700/30 animate-pulse"></div>
    </div>
  );
};

const OrbGroup = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [imagesError, setImagesError] = useState({});

  // Configuration du cercle
  const centerSize = 150; // Taille de l'orbe centrale (si vous en voulez une)
  const orbitRadius = 150; // Rayon du cercle d'orbes
  const orbSize = 100; // Taille de chaque orbe

  // Liste des logos
  const logos = [
    { src: next.src, name: "next", hue: 210 },
    { src: postgresql.src, name: "postgresql", hue: 230 },
    { src: prisma.src, name: "prisma", hue: 250 },
    { src: resend.src, name: "resend", hue: 270 },
    { src: shadcn.src, name: "shadcn", hue: 290 },
    { src: stripe.src, name: "stripe", hue: 310 },
    { src: tailwind.src, name: "tailwind", hue: 330 },
    { src: betterauth.src, name: "betterauth", hue: 350 },
  ];

  const centerLogo = { src: now.src, name: "now", hue: 180 };

  // Précharger toutes les images
  useEffect(() => {
    logos.forEach((logo) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded((prev) => ({
          ...prev,
          [logo.name]: true,
        }));
      };
      img.onerror = () => {
        console.error(`Erreur lors du chargement de l'image: ${logo.name}`);
        setImagesError((prev) => ({
          ...prev,
          [logo.name]: true,
        }));
      };
      img.src = logo.src;
    });
  }, []);

  return (
    <article
      className="flex-none relative max-lg:mt-9"
      style={{
        width: `${2 * (orbitRadius + orbSize)}px`,
        height: `${2 * (orbitRadius + orbSize)}px`,
      }}
    >
      {/* Cercle invisible (optionnel pour le débogage) */}
      <div
        className="absolute rounded-full border border-dashed border-gray-800/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${2 * orbitRadius}px`,
          height: `${2 * orbitRadius}px`,
        }}
      />

      {/* Orbes disposées en cercle */}
      {logos.map((logo, index) => {
        // Calcul de la position sur le cercle
        const angle = index * (360 / logos.length) * (Math.PI / 180);
        const x = Math.cos(angle) * orbitRadius;
        const y = Math.sin(angle) * orbitRadius;

        return (
          <div
            key={logo.name}
            className="absolute"
            style={{
              transform: `translate(-50%, -50%)`,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: `${orbSize}px`,
              height: `${orbSize}px`,
              // Ajout d'une transition pour un effet plus fluide
              transition: "all 0.5s ease-in-out",
            }}
          >
            {!imagesLoaded[logo.name] ? (
              <OrbSkeleton width={orbSize} height={orbSize} />
            ) : (
              <Orb
                width={orbSize}
                height={orbSize}
                hue={logo.hue}
                hoverIntensity={0.3}
                imageSrc={imagesError[logo.name] ? null : logo.src}
                imageOpacity={0.9}
                imageScale={0.5}
                forceHoverState={false}
              />
            )}
          </div>
        );
      })}

      {/* Orbe centrale (optionnelle) - si vous voulez une orbe au centre */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${centerSize}px`,
          height: `${centerSize}px`,
        }}
      >
        {!imagesLoaded["next"] ? (
          <OrbSkeleton width={centerSize} height={centerSize} />
        ) : (
          <Orb
            width={centerSize}
            height={centerSize}
            logo={centerLogo}
            hue={180}
            hoverIntensity={0.3}
            imageSrc={imagesError["next"] ? null : now.src}
            imageOpacity={0.8}
            imageScale={0.7}
            forceHoverState={false}
          />
        )}
      </div>
    </article>
  );
};

export default OrbGroup;
