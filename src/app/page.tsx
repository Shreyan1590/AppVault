
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ProblemSolutionSection from '@/components/sections/problem-solution';
import FeaturesSection from '@/components/sections/features';
import HowItWorksSection from '@/components/sections/how-it-works';
import UseCasesSection from '@/components/sections/use-cases';
import OfferingsSection from '@/components/sections/offerings';
import TractionSection from '@/components/sections/traction';
import TeamSection from '@/components/sections/team';
import FaqSection from '@/components/sections/faq';
import { ScrollAnimation } from '@/components/scroll-animation';
import ContactSection from '@/components/sections/contact';
import CtaSection from '@/components/sections/cta';

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ScrollAnimation>
          <ProblemSolutionSection />
        </ScrollAnimation>
        <ScrollAnimation animation="slideInRight">
          <FeaturesSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <HowItWorksSection />
        </ScrollAnimation>
        <ScrollAnimation animation="slideInLeft">
          <UseCasesSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <OfferingsSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn">
          <TractionSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <TeamSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn">
          <FaqSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <CtaSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn">
          <ContactSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
