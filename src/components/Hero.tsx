import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Cloud, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart farming technology with digital monitoring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="inline-flex items-center gap-2 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <BarChart3 className="w-4 h-4" />
            Smart India Hackathon 2025
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Smart Crop Advisory</span>
            <br />
            <span className="bg-gradient-to-r from-farm-green to-success-green bg-clip-text text-transparent">
              for Every Farmer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered multilingual platform providing real-time crop advice, weather alerts, and personalized farming insights. Designed for small and marginal farmers with voice support for accessibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-farm-green to-success-green hover:shadow-lg transition-all duration-300 group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur border">
              <Smartphone className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Multilingual Support</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur border">
              <Cloud className="w-6 h-6 text-sky-blue" />
              <span className="text-sm font-medium">Weather Alerts</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur border">
              <BarChart3 className="w-6 h-6 text-success-green" />
              <span className="text-sm font-medium">AI Insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;