import Image from "next/image";
import Link from "next/link";

const handleEmailClick = (e) => {
  e.preventDefault();

  const mailtoLink =
    "mailto:kediaronit.21@gmail.com?subject=Hello%20Ronit&body=Hi%20Ronit,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards";

  const tempLink = document.createElement("a");
  tempLink.href = mailtoLink;
  tempLink.click();

  setTimeout(() => {
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&to=kediaronit.21@gmail.com&su=Hello%20Ronit&body=Hi%20Ronit,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards";
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  }, 500);
};

export const GetInTouchSection = () => {
  return (
    <div id="get-in-touch" className="animate-fade-in [animation-delay:2200ms]">
      <div
        id="socials"
        className="flex items-center gap-3 px-5 lg:px-10 justify-between text-sm md:text-base"
      >
        <Link
          href={"https://x.com/ronitk21"}
          className="transition-all duration-200 hover:text-foreground hover:scale-105"
        >
          twitter / x
        </Link>
        <Link
          href={"https://github.com/ronitk21"}
          className="transition-all duration-200 hover:text-foreground hover:scale-105"
        >
          github
        </Link>
        <Link
          href={"https://www.linkedin.com/in/ronit-kedia-48201130b/"}
          className="transition-all duration-200 hover:text-foreground hover:scale-105"
        >
          linkedin
        </Link>
        <Link
          href="https://mail.google.com/mail/?view=cm&to=kediaronit.21@gmail.com&su=Hello%20Ronit&body=Hi%20Ronit,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-200 hover:text-foreground hover:scale-105"
        >
          email
        </Link>
      </div>
      <div className="mt-10 lg:mt-16 flex justify-end relative">
        <Image
          src="/signature-light.png"
          alt="signature"
          width="160"
          height="240"
          className="w-16 h-auto sm:w-20 md:w-24 transition-opacity duration-200 hover:opacity-80 dark:hidden"
        />
        <Image
          src="/signature-dark.png"
          alt="signature"
          width="160"
          height="240"
          className="w-16 h-auto sm:w-20 md:w-24 transition-opacity duration-200 hover:opacity-80 hidden dark:block"
        />
      </div>
    </div>
  );
};
