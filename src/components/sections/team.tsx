import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
    {
        name: "John Smith",
        title: "Founder – Ex-Lead Dev at SaaS Co.",
        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Sarah Lee",
        title: "CTO – Built 50+ Apps for Enterprises",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
    }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            The minds behind AppVault.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-2xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.photoUrl}
                    alt={`Headshot of ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                <p className="text-primary">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
