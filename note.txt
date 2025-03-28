// "use client";
// import { useEffect, useState } from "react";
// import Lightning from "./../Lightning/Lightning";
// import { HeroMobileEffect } from "./HeroMobileEffect";

// const HeroBackground = () => {
//   const [isDesktop, setIsDesktop] = useState(true);

//   useEffect(() => {
//     const checkSize = () => {
//       setIsDesktop(window.innerWidth >= 768); // Si la largeur est supérieure ou égale à 768px
//     };

//     checkSize(); // Vérification initiale
//     window.addEventListener("resize", checkSize); // Mise à jour lors du redimensionnement

//     return () => window.removeEventListener("resize", checkSize); // Cleanup
//   }, []);

//   return (
//     <>
//       {isDesktop ? (
//         <Lightning />
//       ) : (
//         <div className="w-full h-screen absolute">
//           <HeroMobileEffect />
//         </div>
//       )}
//     </>
//   );
// };

// export default HeroBackground;
