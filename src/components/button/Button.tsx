"use client"
import * as React from "react";
import { type ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  theme?: "primary" | "secondary" | "cancel" | "cancel-secondary" | "white";
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
      className={`${className} ${isWidthFull ? "w-full" : "w-fit"}`}
      onFocus={() => {}}
    >
      {theme === "primary" && (
        <div
          className={`${className} p-2 rounded-lg hover:border hover:border-primary hover:bg-white hover:text-primary bg-primary text-white`}
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
    </button>
  );
}

export default Button;