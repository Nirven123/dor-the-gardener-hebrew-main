
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "ההודעה נשלחה בהצלחה!",
      description: "אחזור אליך בהקדם האפשרי.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-green mb-4">
            בואו נדבר
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            מחפש פתרון ירוק? רוצה ייעוץ מקצועי לגינה שלך?<br />
            שלחו לי הודעה או השאירו פרטים בטופס – ואחזור אליכם בהקדם.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <Card className="hover-lift bg-garden-light border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-garden-green mb-4">פרטי קשר</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <span className="text-garden-green font-semibold">טלפון:</span>
                      <a href="tel:054-315-5703" className="text-gray-700 hover:text-garden-green transition-colors">
                        054-315-5703
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <span className="text-garden-green font-semibold">מייל:</span>
                      <a href="mailto:dorginon123@gmail.com" className="text-gray-700 hover:text-garden-green transition-colors">
                        dorginon123@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <span className="text-garden-green font-semibold">אזור פעילות:</span>
                      <span className="text-gray-700">כל הארץ</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-garden-green hover:bg-garden-accent text-white px-8 py-4 text-lg rounded-full shadow-xl hover-lift"
                  onClick={() => window.open('https://docs.google.com/forms/d/1AjGLvmH3-PW5439zowEz7xcu6hmjB1yURXxTa9OfgW8/edit', '_blank')}
                >
                  למילוי טופס מקוון
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="hover-lift bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-garden-green mb-6">טופס יצירת קשר</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="שם מלא"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-garden-light focus:border-garden-green"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="מספר טלפון"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-garden-light focus:border-garden-green"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="איך אוכל לעזור לך?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="border-garden-light focus:border-garden-green resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-garden-green hover:bg-garden-accent text-white py-3 rounded-lg font-semibold transition-all duration-300 hover-lift"
                  >
                    שלח הודעה
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
