import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
    {
        name: "Shreyan S",
        title: "Founder & CEO",
        bio: "Shreyan built his first app at 12 and hasn't stopped shipping since.",
        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
        dataAiHint: "man professional"
    },
    {
        name: "M.Tamizhvendhan",
        title: "CTO",
        bio: "A connoisseur of clean code and a master of scaling complex systems.",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
        dataAiHint: "woman professional"
    }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            The Human Touch Behind the Tech
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We're a small team passionate about making app development accessible to everyone.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-2xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden group">
                <div className="aspect-square relative">
                  <Image
                    src={member.photoUrl}
                    alt={`Headshot of ${member.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={member.dataAiHint}
                  />
                </div>
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                <p className="text-primary">{member.title}</p>
                <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
