import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  platform: "Android" | "iOS";
  href: string;
  className?: string;
}

export const DownloadButton = ({ platform, href, className }: DownloadButtonProps) => {
  return (
    <a
      href={href}
      className={cn(
        "group relative px-8 py-4 bg-white/10 backdrop-blur-md rounded-xl",
        "border border-white/20 shadow-lg transition-all duration-300",
        "hover:shadow-xl hover:scale-105 hover:bg-white/20",
        "flex items-center gap-3",
        className
      )}
    >
      <Download className="w-5 h-5 text-gray-900 group-hover:scale-110 transition-transform" />
      <span className="font-medium text-gray-900">
        Download for {platform}
      </span>
    </a>
  );
};