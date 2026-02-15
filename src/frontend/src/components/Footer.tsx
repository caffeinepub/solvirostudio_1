import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'solvirostudio'
  );

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/assets/solvirostudio-logo.png"
              alt="SolviroStudio"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400">
              Meta Ads & Creative Design for Solar Companies
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-solviro-yellow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-solviro-yellow transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-solviro-yellow transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-solviro-yellow transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:solvirostudio@gmail.com"
                  className="hover:text-solviro-yellow transition-colors"
                >
                  solvirostudio@gmail.com
                </a>
              </li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center space-x-2">
            <span>© {currentYear} SolviroStudio. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-solviro-yellow hover:underline"
              >
                caffeine.ai
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
