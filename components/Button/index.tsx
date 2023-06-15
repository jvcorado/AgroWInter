import React from "react";

interface ButtonProps {
  bg: string;
}

export const Button = ({ bg }: ButtonProps) => {
  return (
    <button
      className={`${bg} agendar shadow-2xl w-full px-8 py-3 lg:px-16 lg:py-6 rounded-md text-white font-semibold hover:scale-110 transition-transform`}
    >
      Agendar Reunião
    </button>
  );
};
