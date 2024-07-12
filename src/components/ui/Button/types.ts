import type { HTMLAttributes } from "astro/types";

export interface Props extends HTMLAttributes<"a"> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  text?: string;
  icon?: string | { name: string; position?: "left" | "right" };
  classes?: Record<string, string>;
  type?: "button" | "submit" | "reset";
}
