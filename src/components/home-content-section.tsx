import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ContentSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  ctaText?: string;
  ctaLink?: string;
}

interface HomeContentSectionProps {
  section: ContentSection;
}

export const HomeContentSection = ({ section }: HomeContentSectionProps) => {
  const isImageLeft = section.imagePosition === 'left';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${isImageLeft ? '' : 'md:grid-flow-dense'}`}>
          {/* Image */}
          <div className={`relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg ${isImageLeft ? '' : 'md:col-start-2'}`}>
            <Image
              src={section.image}
              alt={section.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text Content */}
          <div className={`space-y-6 ${isImageLeft ? '' : 'md:col-start-1 md:row-start-1'}`}>
            {section.subtitle && (
              <p className="text-[#0066FF] font-bold text-lg uppercase tracking-wide">
                {section.subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              {section.title}
            </h2>
            <p className="text-lg text-gray-700 leading-loose">
              {section.description}
            </p>
            {section.ctaText && section.ctaLink && (
              <div className="pt-4">
                <Link
                  href={section.ctaLink}
                  className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  {section.ctaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
