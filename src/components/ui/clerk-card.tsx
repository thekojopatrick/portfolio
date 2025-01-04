import { cn } from "@lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({ className, title, children }: CardProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl overflow-hidden group/bento hover:shadow-lg transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-zinc-50 border justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {title && (
        <div className="group-hover/bento:translate-x-2 transition duration-200 p-3 pb-0">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        </div>
      )}
      <div className="bg-white border-t rounded-2xl">{children}</div>
    </div>
  );
};
