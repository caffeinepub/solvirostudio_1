import { ArrowRight } from 'lucide-react';
import GradientCTAButton from '../GradientCTAButton';
import SectionShell from '../SectionShell';

export default function AboutSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <SectionShell id="about" title="About SolviroStudio">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            At SolviroStudio, we specialize in Meta Ads and Creative Design to help solar companies overcome marketing challenges and achieve measurable growth.
          </p>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our team combines data-driven strategies with stunning creative execution to deliver campaigns that don't just look good—they perform. We understand the unique challenges solar companies face in a competitive market, and we're here to help you stand out, generate quality leads, and grow your business.
          </p>

          <div className="pt-4">
            <GradientCTAButton onClick={scrollToServices}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </GradientCTAButton>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/generated/team-illustration.dim_1400x900.png"
              alt="SolviroStudio Team"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Decorative accent */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-solviro-yellow to-solviro-orange rounded-full blur-3xl opacity-30 -z-10" />
        </div>
      </div>
    </SectionShell>
  );
}
