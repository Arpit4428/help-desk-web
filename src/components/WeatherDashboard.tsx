import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CloudRain, 
  Sun, 
  Thermometer, 
  Wind, 
  Droplets, 
  AlertTriangle,
  TrendingUp,
  Calendar
} from "lucide-react";
import weatherIcon from "@/assets/weather-icon.jpg";

const WeatherDashboard = () => {
  const weatherData = {
    current: {
      temperature: 28,
      humidity: 72,
      windSpeed: 12,
      condition: "Partly Cloudy",
      rainfall: 0
    },
    alerts: [
      {
        type: "warning",
        message: "Heavy rainfall expected in next 48 hours",
        impact: "Delay harvesting operations"
      },
      {
        type: "info", 
        message: "Optimal temperature for wheat growth",
        impact: "Continue regular watering schedule"
      }
    ],
    forecast: [
      { day: "Today", temp: 28, condition: "Partly Cloudy", rain: 20 },
      { day: "Tomorrow", temp: 25, condition: "Rainy", rain: 80 },
      { day: "Day 3", temp: 30, condition: "Sunny", rain: 0 },
    ]
  };

  return (
    <section className="py-16 bg-muted/30" id="weather">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Weather Intelligence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time weather monitoring and forecasting to help you make informed farming decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Current Weather */}
          <Card className="bg-gradient-to-br from-sky-blue/10 to-sky-blue/5 border-sky-blue/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Weather</CardTitle>
              <Sun className="h-4 w-4 text-sky-blue" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{weatherData.current.temperature}°C</div>
                  <p className="text-sm text-muted-foreground">{weatherData.current.condition}</p>
                </div>
                <img src={weatherIcon} alt="Weather condition" className="w-12 h-12 rounded-full" />
              </div>
            </CardContent>
          </Card>

          {/* Humidity */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Humidity</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weatherData.current.humidity}%</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +2% from yesterday
              </p>
            </CardContent>
          </Card>

          {/* Wind Speed */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
              <Wind className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weatherData.current.windSpeed} km/h</div>
              <p className="text-xs text-muted-foreground">Light breeze</p>
            </CardContent>
          </Card>
        </div>

        {/* Weather Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning-orange" />
                Weather Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {weatherData.alerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Badge variant={alert.type === 'warning' ? 'destructive' : 'secondary'} className="mt-0.5">
                    {alert.type === 'warning' ? 'Warning' : 'Info'}
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.impact}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 3-Day Forecast */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                3-Day Forecast
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="font-medium">{day.day}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{day.condition}</span>
                    <div className="flex items-center gap-1 text-sky-blue">
                      <Droplets className="w-3 h-3" />
                      <span className="text-xs">{day.rain}%</span>
                    </div>
                    <span className="font-semibold">{day.temp}°C</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherDashboard;