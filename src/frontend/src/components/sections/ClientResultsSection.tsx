import GradientCTAButton from '../GradientCTAButton';
import SectionShell from '../SectionShell';

const resultImages = [
  '/assets/generated/client-results-01.dim_1400x900.png',
  '/assets/generated/client-results-02.dim_1400x900.png',
  '/assets/generated/client-results-03.dim_1400x900.png',
  '/assets/generated/client-results-04.dim_1400x900.png',
];

export default function ClientResultsSection() {
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
    <SectionShell id="client-results" title="Client Results" className="bg-gray-50">
      <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
        We deliver measurable results for solar companies. Here's what our clients achieved with SolviroStudio:
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {resultImages.map((image, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={image}
              alt={`Client results ${index + 1}`}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-solviro-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <div className="text-center">
        <GradientCTAButton onClick={scrollToContact} size="lg">
          Get Your Results
        </GradientCTAButton>
      </div>
    </SectionShell>
  );
}
