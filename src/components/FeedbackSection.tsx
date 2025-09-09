import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Send,
  Users,
  BarChart3,
  Globe
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const { t } = useLanguage();

  const stats = [
    {
      label: t('feedback.activeFarmers'),
      value: "12,450+",
      icon: <Users className="w-5 h-5" />,
      color: "text-success-green"
    },
    {
      label: t('feedback.cropsMonitored'),
      value: "8,200+",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "text-primary"
    },
    {
      label: t('feedback.languagesSupported'),
      value: "12",
      icon: <Globe className="w-5 h-5" />,
      color: "text-sky-blue"
    }
  ];

  const testimonials = [
    {
      name: "राज कुमार",
      location: "मध्य प्रदेश",
      text: "इस ऐप से मुझे बहुत मदद मिली है। मौसम की जानकारी सही समय पर मिलती है।",
      rating: 5
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      text: "Voice mode is very helpful. Now I can get crop advice without reading.",
      rating: 5
    },
    {
      name: "মিনা খাতুন",
      location: "West Bengal",
      text: "ধানের জন্য যে পরামর্শ দেওয়া হয়েছে, তা খুবই কার্যকর।",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('feedback.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('feedback.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                {t('feedback.shareExperience')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">{t('feedback.rateExperience')}</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`p-1 rounded ${
                        star <= rating ? 'text-warning-orange' : 'text-muted-foreground'
                      } hover:text-warning-orange transition-colors`}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Your feedback (English, हिंदी, या कोई भी भाषा)
                </label>
                <Textarea
                  placeholder={t('feedback.feedbackPlaceholder')}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" disabled={!feedback.trim() || rating === 0}>
                  <Send className="w-4 h-4 mr-2" />
                  {t('feedback.submitFeedback')}
                </Button>
                <Button variant="outline" size="icon">
                  <ThumbsUp className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ThumbsDown className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-warning-orange" />
                {t('feedback.farmerStories')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 rounded-lg bg-card border">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-warning-orange text-warning-orange" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;