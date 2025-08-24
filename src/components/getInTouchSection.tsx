import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const GetInTouchSection = () => {
  const { theme } = useTheme();

  return (
    <div id="get-in-touch" className="animate-fade-in [animation-delay:2200ms]">
      <div
        id="socials"
        className="flex items-center gap-3 px-5 lg:px-10 justify-between text-sm md:text-base"
      >
        <Link
          href={""}
          className="transition-all duration-200 hover:text-foreground hover:scale-105"
        >
          twitter / x
        </Link>
        <Link
          href={""}
          className="transition-all duration-200 hover:text-foreground hover:scale-105"
        >
          github
        </Link>
        <Link
          href={""}
          className="transition-all duration-200 hover:text-foreground hover:scale-105"
        >
          linkedin
        </Link>
        <Link
          href={""}
          className="transition-all duration-200 hover:text-foreground hover:scale-105"
        >
          email
        </Link>
      </div>
      <div className="mt-10 lg:mt-16 flex justify-end relative">
        <Image
          src="/signature-light.png"
          alt="signature"
          width="120"
          height="120"
          className="transition-opacity duration-200 hover:opacity-80 dark:hidden"
        />
        <Image
          src="/signature-dark.png"
          alt="signature"
          width="120"
          height="120"
          className="transition-opacity duration-200 hover:opacity-80 hidden dark:block"
        />
      </div>
    </div>
  );
};
