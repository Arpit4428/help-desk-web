import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mic, MicOff, Globe, Settings, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' }
  ];

  const currentLanguageInfo = languages.find(lang => lang.code === language);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-farm-green to-success-green flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">{t('header.title')}</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('header.dashboard')}
          </a>
          <a href="#weather" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('header.weather')}
          </a>
          <a href="#crops" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('header.crops')}
          </a>
          <a href="#alerts" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('header.alerts')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLanguageInfo?.nativeName}</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="bg-card border border-border shadow-lg z-50 min-w-[140px]"
            >
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as 'en' | 'hi')}
                  className={`cursor-pointer hover:bg-muted ${
                    language === lang.code ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{lang.nativeName}</span>
                    {language === lang.code && (
                      <div className="w-2 h-2 rounded-full bg-primary ml-2" />
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button
            variant={isVoiceMode ? "default" : "outline"}
            size="sm"
            onClick={() => setIsVoiceMode(!isVoiceMode)}
            className="flex items-center gap-2"
          >
            {isVoiceMode ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            <span className="hidden sm:inline">{t('header.voiceMode')}</span>
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