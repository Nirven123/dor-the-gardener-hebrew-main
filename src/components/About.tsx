export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-garden-green mb-4">
              קצת עליי
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p className="text-lg">
                  נעים מאוד, אני דור. עובד בתחום הגננות משנת 2023.
                </p>
                <p>
                  תמיד התחברתי לטבע ולעבודה בגינה, וגם כנער עבדתי בזה עם המון אהבה.
                </p>
                <p>
                  לאחר שירות של כ-10 שנים בצה"ל כקצין, יצאתי סוף סוף להגשים את החלום שלי – 
                  ולעזור גם לכמ להגשים את החלום לגינה המושלמת.
                </p>
                <p className="text-garden-green font-semibold">
                  בין אם זו גינה קטנה או חצר גדולה, אני כאן כדי לעצב, לטפל ולשמור עליה חיה ומטופחת לאורך כל השנה.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative">
                <img 
                  src="/lovable-uploads/profile dor.jpeg"
                  alt="דור - גנן מקצועי"
                  className="rounded-2xl shadow-2xl hover-lift w-full max-w-[350px] h-[480px] object-cover mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-garden-green/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
