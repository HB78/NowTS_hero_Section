import Image from "next/image";
import GoeyNav from "./../component/GooeyNav/GooeyNav";
import logo from "./../public/logo.svg";

const items = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Login", href: "#" },
];

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-evenly mt-3 min-lg:flex-row">
      <div className="flex flex-row">
        {" "}
        <Image
          src={logo}
          alt="Logo"
          width={24}
          height={24}
          priority
          className=""
        />
        <p className="text-yellow-500 text-xl font-bold ml-3 max-lg:mb-3">
          NOW.TS
        </p>
      </div>
      <GoeyNav
        items={items}
        animationTime={500}
        pCount={15}
        minDistance={20}
        maxDistance={42}
        maxRotate={75}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        timeVariance={300}
      />
    </header>
  );
};

export default Header;
