
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "AppVault is a revelation. We delivered a client's MVP in two weeks instead of three months. The ability to customize high-quality templates and export the code gives us the speed of no-code with the power of a custom stack. It's a complete game-changer for our agency.",
        name: "Jane Doe",
        title: "CTO, Innovate Solutions",
        avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
        avatarFallback: "JD"
    },
    {
        quote: "As a startup founder, time and capital are our most valuable assets. AppVault allowed us to launch and start getting feedback in days, not months. The template library saved us thousands in design and development costs.",
        name: "John Smith",
        title: "Founder, Tech Startup",
        avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
        avatarFallback: "JS"
    }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Loved by Teams Worldwide
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
                 <Card key={index} className="bg-background/50 border-border/20 p-8 shadow-lg">
                    <CardContent className="p-0 text-left flex flex-col h-full">
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                            ))}
                        </div>
                        <p className="text-lg italic text-foreground flex-grow">
                        “{testimonial.quote}”
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
