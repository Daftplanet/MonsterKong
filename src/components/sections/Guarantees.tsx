import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, UserCheck, Star, BadgeCheck, HeartHandshake } from "lucide-react";

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "50,000+ Views",
      description: "Guaranteed engagement with your existing audience, new growth, leads and potential sales"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "1,000+ Subscribers",
      description: "Guaranteed subscriber growth each month through our proven strategies"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "50,000+ Impressions",
      description: "Rank organically for exact keyword search terms on YouTube"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "15 YouTube Shorts",
      description: "Get views, watchtime, subscriber growth, engagement & monetization income"
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Quality Backlinks",
      description: "Multiple quality backlinks to enhance your SEO and online presence"
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "24/7 Live Streaming",
      description: "Continuous broadcasting & YouTube growth to maximize your channel's potential"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-card/30 z-0"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What We Can <span className="text-gradient">Guarantee</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each month we guarantee to maximize your channel's visibility and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {guarantee.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
            Plus with quality backlinks to enhance your SEO, we ensure comprehensive growth and increased reach month after month
          </p>
          <Link href="https://calendly.com/monsterkongmarketing/monsterkong60">
            <Button className="btn-primary">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
