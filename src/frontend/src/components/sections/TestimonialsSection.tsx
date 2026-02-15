import { Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import GradientCTAButton from '../GradientCTAButton';
import SectionShell from '../SectionShell';

const testimonials = [
  {
    quote:
      "SolviroStudio transformed our Meta Ads strategy. We went from struggling to get leads to generating over 500 qualified solar leads per month. Their creative designs and targeting expertise are unmatched.",
    author: 'Michael Chen',
    company: 'SunPower Solutions',
    initials: 'MC',
  },
  {
    quote:
      "The ROI we've seen from working with SolviroStudio is incredible. Our cost per lead dropped by 60% while our conversion rate doubled. They truly understand the solar industry.",
    author: 'Sarah Martinez',
    company: 'Bright Energy Co.',
    initials: 'SM',
  },
  {
    quote:
      "Their creative campaigns don't just look beautiful—they perform. We've seen a 4.5x ROAS consistently across all our Meta Ads campaigns. SolviroStudio is a game-changer for solar marketing.",
    author: 'David Thompson',
    company: 'EcoSolar Systems',
    initials: 'DT',
  },
  {
    quote:
      "Working with SolviroStudio has been the best decision for our marketing. They helped us scale from $10K to $100K in monthly ad spend while maintaining profitability. Highly recommended!",
    author: 'Jennifer Lee',
    company: 'Green Future Solar',
    initials: 'JL',
  },
  {
    quote:
      "The team at SolviroStudio delivers results, period. Our lead quality improved dramatically, and we're now closing 3x more solar installations than before. Their expertise in Meta Ads is exceptional.",
    author: 'Robert Williams',
    company: 'Solar Innovations Inc.',
    initials: 'RW',
  },
];

export default function TestimonialsSection() {
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
    <SectionShell id="testimonials" title="What Our Clients Say">
      <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Our clients love the results we deliver – from creative campaigns to lead generation.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-solviro-amber"
          >
            <CardContent className="p-6 space-y-4">
              <Quote className="h-10 w-10 text-solviro-orange opacity-50" />
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-3 pt-4">
                <Avatar className="h-12 w-12 bg-gradient-to-br from-solviro-yellow to-solviro-orange">
                  <AvatarFallback className="text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <GradientCTAButton onClick={scrollToContact} size="lg">
          Start Your Success Story
        </GradientCTAButton>
      </div>
    </SectionShell>
  );
}
