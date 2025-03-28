import OrbGroup from "@/component/OrbGroup/OrbGroup";
import { Rocket } from "lucide-react";
import dynamic from "next/dynamic";
import GradientText from "../component/GradientText/GradientText";
import Header from "../component/Header";
import ShinyText from "../component/ShinyText/ShinyText";
import { Tooltip } from "../component/tolltip/Tooltip";

const HeroMobileEffect = dynamic(
  () =>
    import("../component/heroBackground/HeroMobileEffect").then(
      (mod) => mod.HeroMobileEffect
    ),
  {
    ssr: false, // Désactive le rendu côté serveur
  }
);

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="w-full h-screen absolute">
        <HeroMobileEffect />{" "}
      </div>
      <main className="w-full h-full relative p-5 flex flex-col">
        <section className="flex flex-col items-center justify-between h-[90%] w-full min-lg:flex-row">
          <article className="flex-1 min-lg:max-w-[60%] w-full">
            <div className="flex gap-6 flex-col text-center justify-center ml-3 min-lg:gap-3 min-lg:justify-start min-lg:flex-row">
              <ShinyText
                text="Mise à jour vers Next.js 15"
                disabled={false}
                speed={10}
                className="animate-shine text-sm text-gray-300 border border-gray-500 p-3 rounded-full bg-black whitespace-nowrap overflow-hidden"
              />
              <ShinyText
                text="Adapté pour l'IA et Cursor"
                disabled={false}
                speed={3}
                className="text-sm border border-orange-200 p-3 rounded-full text-orange-300 whitespace-nowrap overflow-hidden animate-shine"
              />
            </div>
            <h1 className="p-3 font-caption scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl !leading-tight max-sm:text-3xl max-lg:text-center">
              Transforme ton idée en application de{" "}
              <span className="text-yellow-500 rounded-2xl">PRO,</span> <br />{" "}
              <span className="italic">Quelle que soit ton expérience</span>
            </h1>
            <h2 className="text-lg text-muted-foreground font-normal text-gray-300 p-3 max-lg:text-center">
              De l'idée à l'implémentation, NOW.TS t'accompagne. Profite d'une
              world-class <br /> template adapté à l'IA avec une formation pour
              t'aider à déployer ton application.
            </h2>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={7}
              showBorder={true}
              className="flex justify-center items-center animate-gradient mx-auto my-6 p-4 rounded-full min-lg:my-4 min-lg:ml-4"
            >
              <div className="flex items-center justify-center gap-3 w-full">
                <Rocket color="white" />
                <p className="text-yellow-500">Rejoints maintenant</p>
              </div>
            </GradientText>
            <div className="flex justify-center items-center ml-3 text-lg gap-1 font-medium text-green-400 italic min-lg:justify-start">
              <p className="none rounded-full bg-green-400 animate-pulse min-lg:h-6 min-lg:w-6"></p>
              <p className="text-md min-lg:text-xl">
                -203€ pour les 740 premiers membres. (plus que 5 places
                restantes)
              </p>
            </div>
            <div className="flex flex-col items-center gap-9 mt-3 min-lg:flex-row">
              <Tooltip />
              <p className="text-md font-semibold min-lg:text-lg ">
                735 personnes codent avec NOW.TS
              </p>
            </div>
          </article>
          {/* //OrbGroup */}
          <OrbGroup />
        </section>
      </main>
    </div>
  );
}
