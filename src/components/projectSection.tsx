import Link from "next/link";
import Separator from "./ui/separator";

export const projectsArray = [
  {
    id: "1",
    title: "nomoretutorials",
    description:
      "I got tired of jumping from one tutorial to another without actually building anything. So I created NoMoreTutorials, a place where you learn by making real projects, step by step, instead of getting stuck in the tutorial loop.",
    githubLink: "",
    liveLink: "",
  },
  {
    id: "2",
    title: "npx better-auth",
    description:
      "Setting up auth has always been a pain — too much boilerplate for something that should be simple. With npx better-auth, you run one command and get authentication wired up instantly, so you can get back to actually building.",
    githubLink: "",
    liveLink: "",
  },
];

export const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-start justify-center gap-10 animate-fade-in [animation-delay:1200ms]"
    >
      <div className="space-y-1">
        <h2 className="text-foreground font-semibold text-xl md:text-2xl transition-colors duration-200 hover:text-muted-foreground">
          Projects
        </h2>
        <p className="text-muted-foreground text-sm md:text-base md:font-normal font-light">
          These projects are the solutions to problems i have faced, and might
          be helpful to others also.
        </p>
      </div>
      <div className="space-y-5 lg:space-y-7">
        {projectsArray.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col items-start justify-center gap-3 animate-fade-in"
            style={{ animationDelay: `${1400 + index * 200}ms` }}
          >
            <div className="flex items-center justify-between w-full">
              <h3 className="font-medium underline italic transition-all duration-200 hover:no-underline hover:text-foreground md:text-lg lg:text-xl">
                {item.title}
              </h3>
              <p>
                <span className="text-xs text-muted-foreground italic">
                  <Link
                    href={item.githubLink}
                    className="underline underline-offset-2 transition-all duration-200 hover:no-underline hover:text-foreground md:text-sm"
                  >
                    github
                  </Link>{" "}
                  |{" "}
                  <Link
                    href={item.liveLink}
                    className="underline underline-offset-2 transition-all duration-200 hover:no-underline hover:text-foreground md:text-sm"
                  >
                    live link
                  </Link>
                </span>
              </p>
            </div>
            <p className="text-xs md:text-base  text-muted-foreground transition-colors duration-200 hover:text-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <Separator className="my-7 animate-fade-in [animation-delay:2000ms]" />
    </div>
  );
};
