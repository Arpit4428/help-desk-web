import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WeatherDashboard from "@/components/WeatherDashboard";
import CropAdvisory from "@/components/CropAdvisory";
import FeedbackSection from "@/components/FeedbackSection";

const Index = () => {
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
            <p>© 2025 Smart Crop Advisory System. Built for Smart India Hackathon.</p>
            <p className="mt-2">Empowering farmers with AI-driven insights and multilingual support.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
