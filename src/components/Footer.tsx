
export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-garden-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">דור - גננות מקצועית</h3>
            <p className="text-green-100">
              הגשמת חלומות גינה עם תשוקה לטבע
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">ניווט</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-green-100 hover:text-white transition-colors cursor-pointer"
              >
                בית
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-green-100 hover:text-white transition-colors cursor-pointer"
              >
                אודות
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-green-100 hover:text-white transition-colors cursor-pointer"
              >
                שירותים
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-green-100 hover:text-white transition-colors cursor-pointer"
              >
                צור קשר
              </button>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">יצירת קשר</h4>
            <div className="space-y-2 text-green-100">
              <p>טלפון: 054-315-5703</p>
              <p>מייל: dorginon123@gmail.com</p>
              <p>אזור פעילות: כל הארץ</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-400 pt-8 text-center text-green-100">
          <p>© כל הזכויות שמורות לדור – גינון מקצועי</p>
        </div>
      </div>
    </footer>
  );
};
