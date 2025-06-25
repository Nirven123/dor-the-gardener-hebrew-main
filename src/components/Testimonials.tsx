
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "דור מקצוען אמיתי – הפך לנו את החצר לגן עדן!",
    author: "משפחת כהן"
  },
  {
    text: "תמיד זמין, תמיד מחייך, ומעל הכל – יודע מה הוא עושה.",
    author: "שרה ל."
  },
  {
    text: "ממליצים עליו בלב שלם. תודה על גינה מושלמת!",
    author: "דוד ומרים"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-garden-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-garden-green mb-4">
            מה הלקוחות אומרים?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift bg-white border-0 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl text-garden-green mb-4">"</div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="text-garden-accent font-semibold">
                  — {testimonial.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
