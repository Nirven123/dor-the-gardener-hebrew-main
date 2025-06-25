
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-bl from-green-50 to-green-100 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-green-700/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-garden-green mb-6 leading-tight">
            הגינה שתמיד חלמת עליה –{" "}
            <span className="text-gradient">מתחילה כאן</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-garden-accent mb-8 font-medium">
            גננות מקצועית ואמינה עם תשוקה לטבע
          </p>
          
          <Button 
            size="lg"
            className="bg-garden-green hover:bg-garden-accent text-white px-8 py-4 text-lg rounded-full shadow-2xl hover-lift transition-all duration-300"
            onClick={() => window.open('https://docs.google.com/forms/d/1AjGLvmH3-PW5439zowEz7xcu6hmjB1yURXxTa9OfgW8/edit', '_blank')}
          >
            להשארת פרטים
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
