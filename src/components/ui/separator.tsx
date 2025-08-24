import React from "react";

type SeparatorProps = {
  className?: string;
};

export default function Separator({ className }: SeparatorProps) {
  return (
    <div
      className={`w-full border-t border-muted-foreground/10 ${
        className || ""
      }`}
    />
  );
}
