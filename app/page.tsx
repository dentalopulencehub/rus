import { Hero } from '@/components/home/Hero';
import { ServicesIndustrySection } from '@/components/home/ServicesIndustrySection';
import { CompanyIntro } from '@/components/home/CompanyIntro';
import { ReviewsSlider } from '@/components/home/ReviewsSlider';
import { IntegrationSection } from '@/components/home/IntegrationSection';
import { CTASimple } from '@/components/home/CTASimple';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { InsightsPreview } from '@/components/home/InsightsPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesIndustrySection />
      <CompanyIntro />
      <ReviewsSlider />
      <IntegrationSection />
      <CTASimple />
      <WhyChooseUs />
      <InsightsPreview />
    </>
  );
}
