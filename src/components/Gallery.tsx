import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    src: "/lovable-uploads/WhatsApp Image 2025-06-24 at 21.52.34.jpeg",
    alt: "גינה מעוצבת עם דשא ירוק ופרחים צבעוניים"
  },
  {
    src: "/lovable-uploads/WhatsApp Image 2025-06-24 at 21.53.06.jpeg",
    alt: "פינת ישיבה בגינה עם עציצים מרהיבים"
  },
  {
    src: "/lovable-uploads/WhatsApp Image 2025-06-24 at 21.54.15.jpeg",
    alt: "שביל אבן טבעית בין צמחיה ירוקה"
  },
  {
    src: "/lovable-uploads/WhatsApp Image 2025-06-24 at 21.54.16.jpeg",
    alt: "עיצוב גינה עם תאורה מיוחדת ועצי נוי"
  }
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-garden-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-green mb-4">
            קצת מהעבודות שלי
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            הצצה לכמה מהפרויקטים שלי. גינות ירוקות, מטופחות ומותאמות בדיוק למה שהלקוח חלם 🌿
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem 
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative group overflow-hidden rounded-2xl bg-white shadow-xl hover-lift animate-fade-in transition-all duration-700">
                    <div 
                      className="aspect-[4/3] bg-gradient-to-br from-garden-light to-garden-green/10"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-garden-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Text overlay that appears on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm font-medium drop-shadow-lg">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 bg-white/90 hover:bg-white border-garden-green/20 hover:border-garden-green text-garden-green hover:text-garden-accent shadow-lg backdrop-blur-sm" />
            <CarouselNext className="hidden md:flex -right-6 bg-white/90 hover:bg-white border-garden-green/20 hover:border-garden-green text-garden-green hover:text-garden-accent shadow-lg backdrop-blur-sm" />
          </Carousel>
          
          {/* Mobile swipe indicator */}
          <div className="flex justify-center items-center mt-8 md:hidden">
            <div className="flex items-center space-x-2 text-garden-green/60 text-sm">
              <span>החליקו לצפייה בעוד תמונות</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-garden-green/30 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-garden-green/50"></div>
                <div className="w-2 h-2 rounded-full bg-garden-green/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-6">
            רוצים לראות עוד? יש לי הרבה יותר פרויקטים לשתף איתכם
          </p>
          <a
            href="https://docs.google.com/forms/d/1AjGLvmH3-PW5439zowEz7xcu6hmjB1yURXxTa9OfgW8/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-garden-green text-white font-semibold rounded-full hover:bg-garden-accent transition-all duration-300 hover-lift shadow-lg"
          >
            בואו נתחיל לתכנן את הגינה שלכם
          </a>
        </div>
      </div>
    </section>
  );
};
