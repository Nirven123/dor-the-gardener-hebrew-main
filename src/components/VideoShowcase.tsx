
export const VideoShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-green mb-4">
            סרטון תדמית
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            הכירו את העבודה שלי דרך הסרטון - תראו איך אני הופך חלומות לגינות אמיתיות
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl hover-lift bg-gradient-to-br from-garden-light to-garden-green/10">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster="/placeholder-video-poster.jpg"
            >
              <source src="/lovable-uploads/סרטון תדמית.mp4" type="video/mp4" />
              הדפדפן שלך לא תומך בהצגת וידאו.
            </video>
            
            {/* Decorative overlay for before play */}
            <div className="absolute inset-0 bg-gradient-to-t from-garden-green/20 via-transparent to-transparent pointer-events-none" />
          </div>
          
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-gray-600 mb-6">
              מוכנים להתחיל? בואו נצור יחד את הגינה המושלמת שלכם
            </p>
            <a
              href="https://docs.google.com/forms/d/1AjGLvmH3-PW5439zowEz7xcu6hmjB1yURXxTa9OfgW8/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-garden-green text-white font-semibold rounded-full hover:bg-garden-accent transition-all duration-300 hover-lift shadow-lg"
            >
              צרו קשר עכשיו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
