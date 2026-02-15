import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import GradientCTAButton from '../GradientCTAButton';
import SectionShell from '../SectionShell';
import { useSubmitContactForm } from '../../hooks/useQueries';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const submitMutation = useSubmitContactForm();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      await submitMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message,
      });

      toast.success('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <SectionShell id="contact" title="Contact Us" className="bg-gray-50">
      <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Ready to solve your solar business marketing challenges and see measurable results? Contact SolviroStudio today!
      </p>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="border-2 border-solviro-amber/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-solviro-orange" />
                <span>Email Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:solvirostudio@gmail.com"
                className="text-lg text-solviro-orange hover:underline"
              >
                solvirostudio@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-solviro-amber/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-solviro-orange" />
                <span>Call Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">+1 (555) 123-4567</p>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-br from-solviro-yellow via-solviro-amber to-solviro-orange p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Grow Together</h3>
            <p className="text-white/90 leading-relaxed">
              Whether you're looking to launch your first Meta Ads campaign or scale your existing efforts, we're here to help. Get in touch today and let's discuss how we can drive real results for your solar business.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border-2 border-solviro-amber/30">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your solar business and marketing goals..."
                  rows={5}
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>

              <GradientCTAButton
                type="submit"
                className="w-full"
                disabled={submitMutation.isPending}
              >
                {submitMutation.isPending ? (
                  'Sending...'
                ) : (
                  <>
                    Contact Me
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </GradientCTAButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
