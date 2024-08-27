"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

// Define the type for props
interface MyTimerProps {
  durationDays: number; // Duration in days
}

export const MyTimer: React.FC<MyTimerProps> = ({ durationDays }) => {
  // Calculate the expiry timestamp based on the duration
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(
    expiryTimestamp.getSeconds() + durationDays * 24 * 60 * 60
  );

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex items-center gap-3">
      <div className="text-center text-[24px]">
        <p className="text-[12px] font-semibold">Days</p>
        <span className="font-bold text-[32px] text-black">{days}</span>
      </div>
      <span className="text-[32px] text-[#E07575] mt-2">:</span>
      <div className="text-center text-[24px]">
        <p className="text-[12px] font-semibold">Hours</p>
        <span className="font-bold text-[32px] text-black">{hours}</span>
      </div>
      <span className="text-[32px] text-[#E07575] mt-2">:</span>
      <div className="text-center text-[24px]">
        <p className="text-[12px] font-semibold">Minutes</p>
        <span className="font-bold text-[32px] text-black">{minutes}</span>
      </div>
      <span className="text-[32px] text-[#E07575] mt-2">:</span>
      <div className="text-center text-[24px]">
        <p className="text-[12px] font-semibold">Seconds</p>
        <span className="font-bold text-[32px] text-black">{seconds}</span>
      </div>
    </div>
  );
};

export default MyTimer;
