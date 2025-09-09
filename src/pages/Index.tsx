import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WeatherDashboard from "@/components/WeatherDashboard";
import CropAdvisory from "@/components/CropAdvisory";
import FeedbackSection from "@/components/FeedbackSection";
import { useLanguage } from "@/contexts/LanguageContext";

const IndexContent = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WeatherDashboard />
        <CropAdvisory />
        <FeedbackSection />
      </main>
      <footer className="border-t bg-muted/30 py-8">
        <div className="container px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>{t('footer.copyright')}</p>
            <p className="mt-2">{t('footer.tagline')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
