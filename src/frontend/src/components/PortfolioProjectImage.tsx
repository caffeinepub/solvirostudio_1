import { useState } from 'react';

interface PortfolioProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PortfolioProjectImage({
  src,
  alt,
  className = '',
}: PortfolioProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Determine if the source is an external URL (Pinterest or other)
  const isExternalUrl = src.startsWith('http://') || src.startsWith('https://');

  // Fallback to a local portfolio image if external image fails
  const fallbackImage = '/assets/portfolio/user-portfolio-01.png';

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-solviro-orange border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={hasError ? fallbackImage : src}
        alt={alt}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        decoding="async"
        crossOrigin={isExternalUrl ? 'anonymous' : undefined}
      />
    </div>
  );
}
