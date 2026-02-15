import { Target, Palette, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import GradientCTAButton from '../GradientCTAButton';
import SectionShell from '../SectionShell';

const services = [
  {
    icon: Target,
    title: 'Meta Ads Management for Solar Companies',
    description:
      'Strategic campaign planning and execution on Facebook and Instagram to reach your ideal solar customers. We optimize every dollar spent to maximize your lead generation and conversion rates.',
  },
  {
    icon: Palette,
    title: 'Creative Design & Visual Campaigns',
    description:
      'Eye-catching ad creatives and visual content that stop the scroll and drive engagement. Our designs are tailored specifically for the solar industry to resonate with your target audience.',
  },
  {
    icon: TrendingUp,
    title: 'ROI-Focused Lead Generation',
    description:
      'Data-driven strategies that deliver measurable results and qualified leads for your solar business. We track every metric to ensure your marketing investment generates real returns.',
  },
];

export default function ServicesSection() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const headerOffset = 80;
      const elementPosition = portfolioSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <SectionShell id="services" title="Our Services" className="bg-gray-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-solviro-amber"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-solviro-yellow to-solviro-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <GradientCTAButton onClick={scrollToPortfolio} size="lg">
          Explore Services
        </GradientCTAButton>
      </div>
    </SectionShell>
  );
}
