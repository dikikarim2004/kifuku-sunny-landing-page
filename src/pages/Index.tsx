import { PhoneMockup } from "@/components/PhoneMockup";
import { DownloadButton } from "@/components/DownloadButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/sunrise-beach.jpg")',
        }} 
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-morning-peach/80 via-morning-blue/70 to-morning-gold/80 backdrop-blur-[10px]" />
      
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

        {/* Phone Carousel */}
        <div className="w-full max-w-md mx-auto mb-8">
          <Carousel className="relative w-full">
            <CarouselContent className="flex items-center justify-center h-[600px]">
              <CarouselItem className="flex items-center justify-center h-full">
                <div className="animate-slide-up h-full flex items-center" style={{ animationDelay: "0.2s" }}>
                  <PhoneMockup platform="andro1" />
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center h-full">
                <div className="animate-slide-up h-full flex items-center" style={{ animationDelay: "0.3s" }}>
                  <PhoneMockup platform="andro2" />
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center h-full">
                <div className="animate-slide-up h-full flex items-center" style={{ animationDelay: "0.4s" }}>
                  <PhoneMockup platform="andro3" />
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center h-full">
                <div className="animate-slide-up h-full flex items-center" style={{ animationDelay: "0.5s" }}>
                  <PhoneMockup platform="andro4" />
                </div>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center h-full">
                <div className="animate-slide-up h-full flex items-center" style={{ animationDelay: "0.6s" }}>
                  <PhoneMockup platform="andro5" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Download Button */}
        <div className="mb-16 animate-slide-up">
          <p className="font-serif italic text-2xl text-kifuku-primary/80 animate-float" 
             style={{ 
               textShadow: '0 2px 4px rgba(0,0,0,0.1)',
               letterSpacing: '0.05em'
             }}>
            Coming Soon
          </p>
          
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