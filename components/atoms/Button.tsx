import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  const base = "px-4 py-2 rounded font-semibold";
  const styles = variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-200 text-black";

  return <button className={`${base} ${styles}`} {...props}>{children}</button>;
};
