import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import GradientCTAButton from '../GradientCTAButton';
import SectionShell from '../SectionShell';
import PortfolioProjectImage from '../PortfolioProjectImage';

// Portfolio projects configuration
// You can use either local asset paths (e.g., '/assets/portfolio/image.png')
// or external Pinterest image URLs (e.g., 'https://i.pinimg.com/...')
const portfolioProjects = [
  {
    // Example: Local asset path
    image: '/assets/portfolio/image-7-1.png',
    // Example: Pinterest URL (replace with your Pinterest image URL)
    // image: 'https://i.pinimg.com/originals/xx/xx/xx/xxxxxx.jpg',
    title: 'Multi-Campaign Solar Lead Generation',
    goal: 'Drive qualified leads across multiple solar campaigns',
    resultsText: 'Managed a comprehensive multi-campaign strategy generating thousands of qualified leads with optimized cost per result across various solar products and services, achieving consistent performance across all campaign objectives.',
    results: {
      campaigns: '15+ campaigns',
      totalSpend: '£100K+ spend',
      avgCPR: '£20-30 CPR',
    },
  },
  {
    image: '/assets/portfolio/image-7-2.png',
    title: 'Solar Installation Campaign Portfolio',
    goal: 'Scale solar installation lead generation',
    resultsText: 'Successfully scaled multiple solar installation campaigns with strategic budget allocation, delivering high-quality leads at competitive costs while maintaining strong engagement rates across all active campaigns.',
    results: {
      activeAds: '20+ active ads',
      reach: '500K+ reach',
      engagement: 'High CTR',
    },
  },
  {
    image: '/assets/portfolio/image-8-1.png',
    title: 'Residential Solar Conversion Campaign',
    goal: 'Maximize residential solar conversions',
    resultsText: 'Executed a data-driven residential solar campaign with precise targeting and optimization, achieving exceptional cost per result metrics while scaling budget efficiently across multiple ad sets.',
    results: {
      results: '1000+ results',
      efficiency: 'Optimized CPR',
      scale: 'Multi-ad strategy',
    },
  },
  {
    image: '/assets/portfolio/image-8-2.png',
    title: 'Solar Product Launch Campaign',
    goal: 'Launch new solar product line',
    resultsText: 'Orchestrated a successful product launch campaign with strategic ad placement and budget management, generating strong initial traction and qualified interest across target demographics.',
    results: {
      launch: 'Successful launch',
      adSets: '10+ ad sets',
      performance: 'Strong metrics',
    },
  },
  {
    image: '/assets/portfolio/image-9.png',
    title: 'High-ROAS Solar Purchase Campaign',
    goal: 'Drive solar panel purchases with maximum ROI',
    resultsText: 'Delivered exceptional return on ad spend with purchase conversion values reaching £26,601 and ROAS metrics up to 4.78x, while maintaining efficient cost per purchase across multiple campaign segments.',
    results: {
      roas: '4.78x ROAS',
      conversionValue: '£26.6K value',
      purchases: '280 purchases',
    },
  },
  {
    image: '/assets/portfolio/image-10.png',
    title: 'Solar Conversion Optimization Campaign',
    goal: 'Optimize conversion rates and purchase efficiency',
    resultsText: 'Achieved outstanding conversion performance with website purchase ROAS reaching 3.13x and total conversion value of £40,666, demonstrating expert campaign optimization and audience targeting.',
    results: {
      roas: '3.13x ROAS',
      totalValue: '£40.7K value',
      cpc: '£14.72 CPC',
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
              <PortfolioProjectImage
                src={project.image}
                alt={`${project.title} - Portfolio project`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-xl text-gray-900">{project.title}</h3>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">
                  <span className="text-solviro-orange">Goal:</span> {project.goal}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.resultsText}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
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
