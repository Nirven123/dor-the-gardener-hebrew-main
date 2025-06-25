
import { Card, CardContent } from "@/components/ui/card";
import { Flower, Droplet, Trees, Wrench, Leaf, Sun } from "lucide-react";

const services = [
  {
    title: "עיצוב ותכנון גינות",
    description: "התאמה אישית לפי סגנון ותקציב",
    icon: Flower,
    color: "text-green-600"
  },
  {
    title: "תחזוקת גינות",
    description: "גיזום, דישון, ניקוי שוטף",
    icon: Leaf,
    color: "text-emerald-600"
  },
  {
    title: "מערכות השקיה",
    description: "התקנה ותחזוקה מקצועית",
    icon: Droplet,
    color: "text-blue-600"
  },
  {
    title: "טיפולים עונתיים",
    description: "הכנת הגינה לחורף/קיץ",
    icon: Sun,
    color: "text-yellow-600"
  },
  {
    title: "דשא טבעי או סינתטי",
    description: "ייעוץ, הכנה והתקנה",
    icon: Trees,
    color: "text-green-700"
  },
  {
    title: "שיקום גינות",
    description: "חידוש גינות ישנות ומוזנחות",
    icon: Wrench,
    color: "text-gray-600"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-garden-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-green mb-4">
            השירותים שלי
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-white border-0 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <service.icon className={`w-12 h-12 mx-auto ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-garden-green mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
