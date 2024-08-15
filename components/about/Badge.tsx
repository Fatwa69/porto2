"use client";
import CountUp from "react-countup";

interface BadgeProps {
  endCountNum: number;
  endCountText: string;
}

const Badge: React.FC<BadgeProps> = ({ endCountNum, endCountText }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-x-2">
        <div className="text-4xl leading-none font-bold">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
