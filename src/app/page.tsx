
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ProblemSolutionSection from '@/components/sections/problem-solution';
import FeaturesSection from '@/components/sections/features';
import DemoVideoSection from '@/components/sections/demo-video';
import TestimonialsSection from '@/components/sections/testimonials';
import PricingSection from '@/components/sections/pricing';
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
        <ScrollAnimation animation="slideInRight">
          <FeaturesSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <DemoVideoSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn">
          <TestimonialsSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <PricingSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <TeamSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn">
          <FaqSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
