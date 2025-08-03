
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ProblemSolutionSection from '@/components/sections/problem-solution';
import OfferingsSection from '@/components/sections/offerings';
import TractionSection from '@/components/sections/traction';
import TeamSection from '@/components/sections/team';
import FaqSection from '@/components/sections/faq';
import { ScrollAnimation } from '@/components/scroll-animation';

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ScrollAnimation>
          <ProblemSolutionSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <OfferingsSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <TractionSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <TeamSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <FaqSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
