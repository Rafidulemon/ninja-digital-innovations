"use client"
import * as React from "react";
import { type ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  theme?: "primary" | "secondary" | "cancel" | "cancel-secondary" | "white" | "dark";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isWidthFull?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = (props: Props) => {
  const {
    children,
    className,
    theme = "primary",
    onClick,
    isWidthFull = false,
    type = "button",
  } = props;

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const lastClickTimestamp = React.useRef<number>(0);

  const debouncedOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const now = Date.now();
      if (now - lastClickTimestamp.current > 200) {
        if (onClick) {
          onClick(e);
        }
      }
      lastClickTimestamp.current = now;
    },
    [onClick]
  );

  useEffect(() => {
    if (isClicked) {
      const timeout = setTimeout(() => {
        setIsClicked(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isClicked]);

  return (
    <button
      type={type}
      onClick={(e) => {
        setIsClicked(true);
        debouncedOnClick(e);
      }}
      className={`${className} ${isWidthFull ? "w-full" : "w-fit"} cursor-pointer`}
      onFocus={() => {}}
    >
      {theme === "primary" && (
        <div
          className={`${className} p-2 rounded-lg hover:border hover:border-primary hover:bg-white bg-primary text-white`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "secondary" && (
        <div
          className={`${className} p-2 rounded-lg border border-primary bg-white text-primary hover:bg-primary hover:text-white`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "cancel" && (
        <div
          className={`${className} p-2 rounded-lg hover:border hover:border-[#D20D0D] hover:bg-white hover:text-[#D20D0D] bg-[#D20D0D] text-white`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "cancel-secondary" && (
        <div
          className={`${className} p-2 rounded-lg border border-[#D20D0D] bg-white text-[#D20D0D] hover:bg-[#D20D0D] hover:text-white`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "white" && (
        <div
          className={`${className} p-2 rounded-lg bg-white text-black hover:scale-105`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "dark" && (
        <div
          className={`${className} p-2 rounded-lg border border-[#1937d6] bg-[#1937d6] text-white shadow-[0_12px_24px_rgba(25,55,214,0.28)] transition hover:-translate-y-0.5 hover:bg-[#2343eb] hover:shadow-[0_16px_32px_rgba(25,55,214,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b8cff]`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}
    </button>
  );
}

export default Button;
