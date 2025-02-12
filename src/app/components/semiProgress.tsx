import { useEffect, useRef } from "react";

function setProgress(bar: HTMLElement, val: HTMLElement, perc: number) {
  bar.style.transform = `rotate(${45 + perc * 1.8}deg)`;
  val.innerText = `${perc}`;
}

interface SemiProgressProps {
  value: number;
}

export const SemiProgress = ({ value }: SemiProgressProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const valRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (barRef.current && valRef.current) {
      setProgress(barRef.current, valRef.current, value);
    }
  }, [value]);

  return (
    <div className="relative m-[4px] float-left text-center">
      <div className="relative overflow-hidden w-[180px] h-[90px] mb-[-28px]">
        <div
          ref={barRef}
          className="absolute top-0 left-0 w-[180px] h-[180px] rounded-[50%] box-border border-[#eee] border-[8px] border-solid border-r-[#335AF1] border-b-[#335AF1]"
        ></div>
      </div>
      <div className="flex flex-col">
        <span className="font-sans text-xl" ref={valRef}>
          {value}
        </span>
        <span className="font-sans text-xs">out of 100 points</span>
      </div>
    </div>
  );
};
