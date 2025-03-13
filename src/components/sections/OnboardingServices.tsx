import { Check } from "lucide-react";

const OnboardingServices = () => {
  const services = [
    "SEO",
    "Titles",
    "Descriptions",
    "Timestamps",
    "Hashtags",
    "Tags",
    "Thumbnails",
    "Community Posts",
    "Advertising Traffic with Google Ads",
    "Shared Trending Topics on Niche",
    "24/7 Live Streams Always Active",
    "Engagement Team",
    "Backlinks (YouTube)",
    "15 Shorts per month"
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-background to-background/90 z-0"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="text-primary">What We Do</span> For Your Channel
          </h2>

          <div className="bg-card/40 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-background/40 backdrop-blur-sm p-4 rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-md hover:shadow-primary/20"
                >
                  <div className="bg-gradient rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-center">
                What we do in a <span className="text-gradient">nutshell</span>
              </h3>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                We optimize every aspect of your YouTube channel to maximize growth,
                engagement, and visibility. Our holistic approach ensures your content
                reaches the right audience and converts viewers into subscribers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingServices;
