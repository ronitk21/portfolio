"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { ProjectSection } from "@/components/projectSection";
import { GetInTouchSection } from "@/components/getInTouchSection";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between animate-fade-in">
        <span className="text-lg md:text-xl font-medium text-foreground tracking-wide transition-colors duration-200 hover:text-muted-foreground">
          rk
        </span>
        <ModeToggle />
      </div>
      <div className="mt-24 flex flex-col items-start justify-center gap-8 md:gap-6 animate-fade-in [animation-delay:200ms]">
        <h1 className="text-[21px] md:text-3xl lg:text-4xl font-semibold text-muted-foreground sm:leading-8 md:leading-10 max-w-full sm:max-w-[40ch] md:max-w-[60ch] text-balance">
          Hey There 👋,
          <span className="font-bold text-foreground transition-colors duration-300 hover:text-muted-foreground">
            {" "}
            I&apos;m Ronit,
          </span>
          <br className="hidden md:inline" /> trying to solve my own problems
          using technology.
        </h1>
        <div className="text-muted-foreground space-y-0.5 animate-fade-in [animation-delay:600ms]">
          <p className="text-sm md:text-base">
            Currently in{" "}
            <span className="underline transition-all duration-200 hover:no-underline hover:text-foreground">
              Bangalore, KA
            </span>
          </p>
          <p className="text-sm md:text-base">
            Pursuing{" "}
            <span className="underline transition-all duration-200 hover:no-underline hover:text-foreground">
              B.Sc. CS - Bits Pilani
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-2 animate-fade-in [animation-delay:800ms]">
          <div className="flex items-center gap-2">
            <div className="status-indicator"></div>
            <span className="transition-colors duration-200 hover:text-foreground animate-pulse-subtle">
              Open to Work
            </span>
          </div>
          <ArrowRight className="size-4 transition-transform duration-300 hover:translate-x-1" />
          <Button
            className="bg-card border border-card-border cursor-pointer hover-lift active:scale-95"
            onClick={() => {
              document.getElementById("get-in-touch")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className="hover:underline-offset-1 transition-all duration-200">
              Get in Touch
            </span>
          </Button>
        </div>
      </div>
      <Separator className="my-10 animate-fade-in [animation-delay:1000ms]" />
      <ProjectSection />
      <GetInTouchSection />
    </div>
  );
}
