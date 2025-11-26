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
        "row-span-1 rounded-xl overflow-hidden group/bento hover:shadow-lg transition duration-200 shadow-input dark:shadow-input-dark bg-zinc-50 dark:bg-zinc-900 border justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {title && (
        <div className="group-hover/bento:translate-x-2 transition duration-200 p-3 pb-0">
          <div className="font-mono font-medium text-neutral-600 dark:text-neutral-50">
            {title}
          </div>
        </div>
      )}
      <div className="bg-white dark:bg-zinc-900 dark:text-neutral-50 border-t rounded-2xl">{children}</div>
    </div>
  );
};
