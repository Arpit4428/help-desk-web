import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wheat, 
  Sprout, 
  Bug, 
  Beaker, 
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import cropIcon from "@/assets/crop-icon.jpg";

const CropAdvisory = () => {
  const crops = [
    {
      name: "Wheat",
      icon: <Wheat className="w-5 h-5" />,
      stage: "Flowering",
      health: "Good",
      nextAction: "Apply fertilizer in 3 days",
      priority: "medium"
    },
    {
      name: "Rice",
      icon: <Sprout className="w-5 h-5" />,
      stage: "Transplanting",
      health: "Excellent",
      nextAction: "Maintain water level",
      priority: "low"
    },
    {
      name: "Corn",
      icon: <Sprout className="w-5 h-5" />,
      stage: "Vegetative",
      health: "Needs Attention",
      nextAction: "Check for pest infestation",
      priority: "high"
    }
  ];

  const recommendations = [
    {
      title: "Fertilizer Application",
      description: "Apply NPK fertilizer for wheat crops based on soil test results",
      urgency: "This Week",
      type: "fertilizer"
    },
    {
      title: "Pest Control",
      description: "Monitor corn plants for aphid infestation, use organic pesticides",
      urgency: "Immediate",
      type: "pest"
    },
    {
      title: "Irrigation Schedule",
      description: "Reduce watering frequency due to upcoming rainfall",
      urgency: "Next 2 Days",
      type: "water"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning-orange';
      case 'low': return 'text-success-green';
      default: return 'text-muted-foreground';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4" />;
      case 'medium': return <Calendar className="w-4 h-4" />;
      case 'low': return <CheckCircle className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16" id="crops">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Crop Advisory System</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered insights and recommendations for your crops based on growth stage, weather, and soil conditions
          </p>
        </div>

        {/* Current Crops Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {crops.map((crop, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-2">
                  {crop.icon}
                  <CardTitle className="text-lg">{crop.name}</CardTitle>
                </div>
                <img src={cropIcon} alt={`${crop.name} monitoring`} className="w-8 h-8 rounded-full" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Growth Stage</span>
                    <Badge variant="outline">{crop.stage}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Health Status</span>
                    <span className={`text-sm font-medium ${getPriorityColor(crop.priority)}`}>
                      {crop.health}
                    </span>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-1">
                      {getPriorityIcon(crop.priority)}
                      <span className="text-sm font-medium">Next Action</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{crop.nextAction}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-success-green" />
                Today's Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">{rec.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {rec.urgency}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex items-center gap-2">
                    {rec.type === 'fertilizer' && <Beaker className="w-4 h-4 text-primary" />}
                    {rec.type === 'pest' && <Bug className="w-4 h-4 text-destructive" />}
                    {rec.type === 'water' && <Sprout className="w-4 h-4 text-sky-blue" />}
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Crop Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Farming Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-success-green/10 border border-success-green/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-success-green">This Week</span>
                    <CheckCircle className="w-4 h-4 text-success-green" />
                  </div>
                  <p className="text-sm">Wheat fertilizer application window</p>
                </div>
                
                <div className="p-3 rounded-lg bg-warning-orange/10 border border-warning-orange/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-warning-orange">Next Week</span>
                    <AlertCircle className="w-4 h-4 text-warning-orange" />
                  </div>
                  <p className="text-sm">Rice transplanting season begins</p>
                </div>

                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Month End</span>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm">Prepare for corn harvesting season</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CropAdvisory;