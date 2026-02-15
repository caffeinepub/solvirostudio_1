import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import GradientCTAButton from '../GradientCTAButton';
import SectionShell from '../SectionShell';

const portfolioProjects = [
  {
    image: '/assets/generated/portfolio-ad-01.dim_1200x900.png',
    goal: 'Generate qualified solar installation leads',
    results: {
      leads: '847 leads',
      cpl: '$12.50 CPL',
      roas: '4.2x ROAS',
    },
  },
  {
    image: '/assets/generated/portfolio-ad-02.dim_1200x900.png',
    goal: 'Increase brand awareness for residential solar',
    results: {
      reach: '125K reach',
      engagement: '8.5% CTR',
      conversions: '312 conversions',
    },
  },
  {
    image: '/assets/generated/portfolio-ad-03.dim_1200x900.png',
    goal: 'Drive solar consultation bookings',
    results: {
      bookings: '456 bookings',
      cpa: '$18.75 CPA',
      roi: '380% ROI',
    },
  },
  {
    image: '/assets/generated/portfolio-ad-04.dim_1200x900.png',
    goal: 'Launch new solar financing program',
    results: {
      applications: '623 applications',
      ctr: '6.8% CTR',
      roas: '5.1x ROAS',
    },
  },
  {
    image: '/assets/generated/portfolio-ad-05.dim_1200x900.png',
    goal: 'Promote commercial solar solutions',
    results: {
      leads: '234 B2B leads',
      cpl: '$45.20 CPL',
      meetings: '89 meetings',
    },
  },
  {
    image: '/assets/generated/portfolio-ad-07.dim_1200x900.png',
    goal: 'Seasonal solar panel promotion campaign',
    results: {
      sales: '1,247 sales',
      roas: '6.3x ROAS',
      revenue: '$2.1M revenue',
    },
  },
];

export default function PortfolioSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <SectionShell id="portfolio" title="Our Portfolio">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {portfolioProjects.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={`Portfolio project ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg text-gray-900">{project.goal}</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(project.results).map(([key, value]) => (
                  <Badge
                    key={key}
                    variant="secondary"
                    className="bg-gradient-to-r from-solviro-yellow/20 to-solviro-amber/20 text-solviro-orange border-solviro-amber"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <GradientCTAButton onClick={scrollToContact} size="lg">
          View Full Portfolio
        </GradientCTAButton>
      </div>
    </SectionShell>
  );
}
