import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.title': 'Smart Crop Advisory',
    'header.dashboard': 'Dashboard',
    'header.weather': 'Weather',
    'header.crops': 'Crops',
    'header.alerts': 'Alerts',
    'header.voiceMode': 'Voice Mode',
    'header.language': 'Language',
    
    // Hero
    'hero.badge': 'Smart India Hackathon 2025',
    'hero.title': 'Smart Crop Advisory',
    'hero.subtitle': 'for Every Farmer',
    'hero.description': 'AI-powered multilingual platform providing real-time crop advice, weather alerts, and personalized farming insights. Designed for small and marginal farmers with voice support for accessibility.',
    'hero.getStarted': 'Get Started',
    'hero.learnMore': 'Learn More',
    'hero.multilingualSupport': 'Multilingual Support',
    'hero.weatherAlerts': 'Weather Alerts',
    'hero.aiInsights': 'AI Insights',
    
    // Weather Dashboard
    'weather.title': 'Weather Intelligence',
    'weather.subtitle': 'Real-time weather monitoring and forecasting to help you make informed farming decisions',
    'weather.currentWeather': 'Current Weather',
    'weather.humidity': 'Humidity',
    'weather.windSpeed': 'Wind Speed',
    'weather.alerts': 'Weather Alerts',
    'weather.forecast': '3-Day Forecast',
    'weather.fromYesterday': 'from yesterday',
    'weather.lightBreeze': 'Light breeze',
    'weather.warning': 'Warning',
    'weather.info': 'Info',
    'weather.today': 'Today',
    'weather.tomorrow': 'Tomorrow',
    'weather.day3': 'Day 3',
    'weather.partlyCloudy': 'Partly Cloudy',
    'weather.rainy': 'Rainy',
    'weather.sunny': 'Sunny',
    'weather.heavyRainfallAlert': 'Heavy rainfall expected in next 48 hours',
    'weather.delayHarvesting': 'Delay harvesting operations',
    'weather.optimalTemp': 'Optimal temperature for wheat growth',
    'weather.continueWatering': 'Continue regular watering schedule',
    
    // Crop Advisory
    'crops.title': 'Crop Advisory System',
    'crops.subtitle': 'AI-powered insights and recommendations for your crops based on growth stage, weather, and soil conditions',
    'crops.wheat': 'Wheat',
    'crops.rice': 'Rice',
    'crops.corn': 'Corn',
    'crops.flowering': 'Flowering',
    'crops.transplanting': 'Transplanting',
    'crops.vegetative': 'Vegetative',
    'crops.good': 'Good',
    'crops.excellent': 'Excellent',
    'crops.needsAttention': 'Needs Attention',
    'crops.growthStage': 'Growth Stage',
    'crops.healthStatus': 'Health Status',
    'crops.nextAction': 'Next Action',
    'crops.applyFertilizer': 'Apply fertilizer in 3 days',
    'crops.maintainWater': 'Maintain water level',
    'crops.checkPest': 'Check for pest infestation',
    'crops.recommendations': "Today's Recommendations",
    'crops.farmingCalendar': 'Farming Calendar',
    'crops.fertilizerApplication': 'Fertilizer Application',
    'crops.pestControl': 'Pest Control',
    'crops.irrigationSchedule': 'Irrigation Schedule',
    'crops.viewDetails': 'View Details',
    'crops.thisWeek': 'This Week',
    'crops.nextWeek': 'Next Week',
    'crops.monthEnd': 'Month End',
    'crops.wheatFertilizer': 'Wheat fertilizer application window',
    'crops.riceTransplanting': 'Rice transplanting season begins',
    'crops.cornHarvesting': 'Prepare for corn harvesting season',
    
    // Feedback
    'feedback.title': 'Community & Feedback',
    'feedback.subtitle': 'Join thousands of farmers using our platform and help us improve by sharing your experience',
    'feedback.activeFarmers': 'Active Farmers',
    'feedback.cropsMonitored': 'Crops Monitored',
    'feedback.languagesSupported': 'Languages Supported',
    'feedback.shareExperience': 'Share Your Feedback',
    'feedback.rateExperience': 'Rate your experience',
    'feedback.feedbackPlaceholder': 'Tell us about your experience with the Smart Crop Advisory system...',
    'feedback.submitFeedback': 'Submit Feedback',
    'feedback.farmerStories': 'Farmer Stories',
    
    // Footer
    'footer.copyright': '© 2025 Smart Crop Advisory System. Built for Smart India Hackathon.',
    'footer.tagline': 'Empowering farmers with AI-driven insights and multilingual support.',
  },
  
  hi: {
    // Header
    'header.title': 'स्मार्ट फसल सलाहकार',
    'header.dashboard': 'डैशबोर्ड',
    'header.weather': 'मौसम',
    'header.crops': 'फसलें',
    'header.alerts': 'अलर्ट',
    'header.voiceMode': 'वॉयस मोड',
    'header.language': 'भाषा',
    
    // Hero
    'hero.badge': 'स्मार्ट इंडिया हैकथॉन 2025',
    'hero.title': 'स्मार्ट फसल सलाहकार',
    'hero.subtitle': 'हर किसान के लिए',
    'hero.description': 'AI-संचालित बहुभाषी प्लेटफॉर्म जो वास्तविक समय फसल सलाह, मौसम अलर्ट, और व्यक्तिगत कृषि अंतर्दृष्टि प्रदान करता है। छोटे और सीमांत किसानों के लिए पहुंच के साथ आवाज समर्थन के साथ डिज़ाइन किया गया।',
    'hero.getStarted': 'शुरू करें',
    'hero.learnMore': 'और जानें',
    'hero.multilingualSupport': 'बहुभाषी समर्थन',
    'hero.weatherAlerts': 'मौसम अलर्ट',
    'hero.aiInsights': 'AI अंतर्दृष्टि',
    
    // Weather Dashboard
    'weather.title': 'मौसम बुद्धिमत्ता',
    'weather.subtitle': 'सूचित कृषि निर्णय लेने में मदद के लिए वास्तविक समय मौसम निगरानी और पूर्वानुमान',
    'weather.currentWeather': 'वर्तमान मौसम',
    'weather.humidity': 'आर्द्रता',
    'weather.windSpeed': 'हवा की गति',
    'weather.alerts': 'मौसम अलर्ट',
    'weather.forecast': '3-दिन का पूर्वानुमान',
    'weather.fromYesterday': 'कल से',
    'weather.lightBreeze': 'हल्की हवा',
    'weather.warning': 'चेतावनी',
    'weather.info': 'जानकारी',
    'weather.today': 'आज',
    'weather.tomorrow': 'कल',
    'weather.day3': 'दिन 3',
    'weather.partlyCloudy': 'आंशिक बादल',
    'weather.rainy': 'बारिश',
    'weather.sunny': 'धूप',
    'weather.heavyRainfallAlert': 'अगले 48 घंटों में भारी बारिश की उम्मीद',
    'weather.delayHarvesting': 'कटाई कार्यों में देरी करें',
    'weather.optimalTemp': 'गेहूं की वृद्धि के लिए अनुकूल तापमान',
    'weather.continueWatering': 'नियमित पानी देने का कार्यक्रम जारी रखें',
    
    // Crop Advisory
    'crops.title': 'फसल सलाहकार प्रणाली',
    'crops.subtitle': 'वृद्धि चरण, मौसम और मिट्टी की स्थिति के आधार पर आपकी फसलों के लिए AI-संचालित अंतर्दृष्टि और सिफारिशें',
    'crops.wheat': 'गेहूं',
    'crops.rice': 'चावल',
    'crops.corn': 'मक्का',
    'crops.flowering': 'फूल आना',
    'crops.transplanting': 'रोपाई',
    'crops.vegetative': 'वनस्पति',
    'crops.good': 'अच्छा',
    'crops.excellent': 'उत्कृष्ट',
    'crops.needsAttention': 'ध्यान की जरूरत',
    'crops.growthStage': 'वृद्धि चरण',
    'crops.healthStatus': 'स्वास्थ्य स्थिति',
    'crops.nextAction': 'अगली कार्रवाई',
    'crops.applyFertilizer': '3 दिन में उर्वरक डालें',
    'crops.maintainWater': 'पानी का स्तर बनाए रखें',
    'crops.checkPest': 'कीट संक्रमण की जांच करें',
    'crops.recommendations': 'आज की सिफारिशें',
    'crops.farmingCalendar': 'कृषि कैलेंडर',
    'crops.fertilizerApplication': 'उर्वरक अनुप्रयोग',
    'crops.pestControl': 'कीट नियंत्रण',
    'crops.irrigationSchedule': 'सिंचाई कार्यक्रम',
    'crops.viewDetails': 'विवरण देखें',
    'crops.thisWeek': 'इस सप्ताह',
    'crops.nextWeek': 'अगले सप्ताह',
    'crops.monthEnd': 'महीने का अंत',
    'crops.wheatFertilizer': 'गेहूं उर्वरक अनुप्रयोग विंडो',
    'crops.riceTransplanting': 'चावल रोपाई का मौसम शुरू',
    'crops.cornHarvesting': 'मक्का कटाई के मौसम की तैयारी करें',
    
    // Feedback
    'feedback.title': 'समुदाय और प्रतिक्रिया',
    'feedback.subtitle': 'हमारे प्लेटफॉर्म का उपयोग करने वाले हजारों किसानों से जुड़ें और अपने अनुभव साझा करके हमें बेहतर बनाने में मदद करें',
    'feedback.activeFarmers': 'सक्रिय किसान',
    'feedback.cropsMonitored': 'निगरानी की गई फसलें',
    'feedback.languagesSupported': 'समर्थित भाषाएं',
    'feedback.shareExperience': 'अपनी प्रतिक्रिया साझा करें',
    'feedback.rateExperience': 'अपने अनुभव को रेट करें',
    'feedback.feedbackPlaceholder': 'स्मार्ट फसल सलाहकार सिस्टम के साथ अपने अनुभव के बारे में बताएं...',
    'feedback.submitFeedback': 'प्रतिक्रिया सबमिट करें',
    'feedback.farmerStories': 'किसान कहानियां',
    
    // Footer
    'footer.copyright': '© 2025 स्मार्ट फसल सलाहकार प्रणाली। स्मार्ट इंडिया हैकथॉन के लिए निर्मित।',
    'footer.tagline': 'AI-संचालित अंतर्दृष्टि और बहुभाषी समर्थन के साथ किसानों को सशक्त बनाना।',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};