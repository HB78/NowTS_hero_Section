// /assets/logos/index.js

// Import individuel de chaque logo
import betterauth from "../assets/logo/betterauth.png";
import next from "../assets/logo/next.jpg";
import now from "../assets/logo/now.png";
import postgresql from "../assets/logo/postgresql.png";
import prisma from "../assets/logo/prisma.jpg";
import resend from "../assets/logo/resend.png";
import shadcn from "../assets/logo/shadcn.png";
import stripe from "../assets/logo/stripe.png";
import tailwind from "../assets/logo/tailwind.png";

// Export groupé avec des noms significatifs
export const logos = {
  next,
  resend,
  prisma,
  tailwind,
  postgresql,
  stripe,
  shadcn,
  betterauth,
  now,
};

// Export individuel pour plus de flexibilité
export {
  betterauth,
  next,
  now,
  postgresql,
  prisma,
  resend,
  shadcn,
  stripe,
  tailwind,
};

// Export par défaut si besoin
export default logos;
