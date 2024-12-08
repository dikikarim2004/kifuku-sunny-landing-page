import { PhoneMockup } from "@/components/PhoneMockup";
import { DownloadButton } from "@/components/DownloadButton";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-morning-peach via-morning-blue to-morning-gold">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[50px]" />
      
      <main className="relative container mx-auto px-6 py-12 min-h-screen flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Kifuku
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience the freshness of a Japanese morning with our Telegram mini app
          </p>
        </div>

        {/* Phones Display */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center mb-16">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <PhoneMockup platform="android" />
            <div className="mt-8 flex justify-center">
              <DownloadButton
                platform="Android"
                href="https://t.me/KifukuBot"
              />
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <PhoneMockup platform="ios" />
            <div className="mt-8 flex justify-center">
              <DownloadButton
                platform="iOS"
                href="https://t.me/KifukuBot"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 text-center text-gray-600">
          <p>© 2024 Kifuku. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;