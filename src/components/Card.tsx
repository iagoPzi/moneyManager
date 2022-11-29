import { ReactNode } from "react";


interface CardProps {

    type: string,
    icon: ReactNode,
    value: number
    color: string
}

export function Card({ type, icon, value, color }:CardProps) {
  return (
    <div className={`flex-1 ${color} max-w-[15rem] min-w-[9rem] px-3 py-5 rounded-md text-white`}>
      <div className="flex items-center justify-between">
        <p>{type}</p>
        {icon}
      </div>
      <p className="font-bold text-2xl">R$ {value}</p>
    </div>
  );
}
