import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Globe, Settings } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languages = ["English", "हिंदी", "বাংলা", "தமிழ்", "ગુજરાતી"];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-farm-green to-success-green flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Smart Crop Advisory</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#weather" className="text-muted-foreground hover:text-foreground transition-colors">
            Weather
          </a>
          <a href="#crops" className="text-muted-foreground hover:text-foreground transition-colors">
            Crops
          </a>
          <a href="#alerts" className="text-muted-foreground hover:text-foreground transition-colors">
            Alerts
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="hidden sm:flex items-center gap-2">
            <Globe className="w-3 h-3" />
            {currentLanguage}
          </Badge>
          
          <Button
            variant={isVoiceMode ? "default" : "outline"}
            size="sm"
            onClick={() => setIsVoiceMode(!isVoiceMode)}
            className="flex items-center gap-2"
          >
            {isVoiceMode ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            <span className="hidden sm:inline">Voice Mode</span>
          </Button>

          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;