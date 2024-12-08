import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  platform: "android" | "ios";
  className?: string;
}

export const PhoneMockup = ({ platform, className }: PhoneMockupProps) => {
  return (
    <div
      className={cn(
        "relative w-64 h-[500px] rounded-[3rem] border-[14px] border-gray-900 overflow-hidden shadow-xl",
        "bg-white transition-transform duration-500 hover:scale-105",
        "animate-float",
        className
      )}
    >
      {platform === "ios" && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl" />
      )}
      <div className="h-full w-full bg-gradient-to-br from-morning-peach via-morning-blue to-morning-gold opacity-90">
        <div className="flex items-center justify-center h-full">
          <img
            src={`/${platform}-screen.png`}
            alt={`${platform} screen`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};