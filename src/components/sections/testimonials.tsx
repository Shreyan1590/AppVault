import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
    {
        quote: "AppVault is a revelation. We delivered a client's MVP in two weeks instead of three months. The ability to customize high-quality templates and export the code gives us the speed of no-code with the power of a custom stack. It's a complete game-changer for our agency.",
        name: "Jane Doe",
        title: "CTO, Innovate Solutions",
        avatarUrl: "https://placehold.co/100x100.png",
        avatarFallback: "JD"
    },
    {
        quote: "As a startup founder, time and capital are our most valuable assets. AppVault allowed us to launch and start getting feedback in days, not months. The template library saved us thousands in design and development costs.",
        name: "John Smith",
        title: "Founder, Tech Startup",
        avatarUrl: "https://placehold.co/100x100.png",
        avatarFallback: "JS"
    },
    {
        quote: "The white-labeling solution is incredible. We can now offer our clients fully branded, custom applications without hiring a massive development team. Our profit margins have never been better.",
        name: "Emily White",
        title: "Director, Digital Agency",
        avatarUrl: "https://placehold.co/100x100.png",
        avatarFallback: "EW"
    }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            What Our Customers Are Saying
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Real stories from teams who've launched with AppVault.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 group">
                <div className="p-1">
                 <Card className="bg-background/50 border-border/20 p-8 shadow-lg h-full transition-transform duration-300 group-hover:scale-105">
                    <CardContent className="p-0 text-left flex flex-col h-full">
                        <p className="text-lg italic text-foreground flex-grow">
                        “{testimonial.quote}”
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint="person" />
                                <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
