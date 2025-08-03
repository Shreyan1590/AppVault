import Image from 'next/image';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { GenerateTeamMemberHeadshotsOutput } from '@/ai/flows/generate-team-member-headshots';

interface TeamSectionProps {
  headshots: GenerateTeamMemberHeadshotsOutput['headshots'];
}

const teamBios: { [key: string]: string } = {
  'John Smith': "Founder – Ex-Lead Dev at SaaS Co.",
  'Sarah Lee': "CTO – Built 50+ Apps for Enterprises",
};

export default function TeamSection({ headshots }: TeamSectionProps) {
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
          {headshots.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.photoDataUri}
                    alt={`Headshot of ${member.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                <p className="text-primary">{teamBios[member.name]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
