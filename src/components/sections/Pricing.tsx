import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "YouTube Live Stream",
      price: "$600",
      period: "Month",
      description: "Perfect for creators looking to grow through live streaming",
      features: [
        "Grow by 2,000 subscribers per month",
        "100+ Viewers on stream daily",
        "Visual Increase in views & watchtime on new videos published",
        "Live Stream Server"
      ],
      color: "primary",
      image: "neon-gorilla-1.jpg",
      link: "https://buy.stripe.com/5kAfZ3fT24y3cZa29P" // Updated payment link
    },
    {
      name: "Growth Lite Package",
      price: "$1,500",
      period: "Month",
      description: "Ideal for creators starting their YouTube growth journey",
      features: [
        "Grow by 2,000 subscribers using proven organic SEO strategies",
        "x8 YouTube SEO Videos with Thumbnails per month",
        "Keyword optimization for search rankings",
        "Compelling video descriptions & optimized titles",
        "High-quality thumbnails to increase click-through rates"
      ],
      color: "secondary",
      image: "neon-gorilla-2.jpg",
      link: "https://buy.stripe.com/bIY8wB9uE0hN3oA9BG",
      popular: false
    },
    {
      name: "Growth Pro Package",
      price: "$3,000",
      period: "Month",
      description: "For serious creators wanting significant channel growth",
      features: [
        "Grow by 4,000 subscribers using proven organic SEO strategies",
        "x12 YouTube SEO Videos with Thumbnails per month",
        "Keyword optimization, descriptions & titles",
        "Hashtags for enhanced visibility",
        "Live Stream Server with 100+ daily viewers"
      ],
      color: "secondary",
      image: "neon-gorilla-headphones.jpg",
      link: "https://buy.stripe.com/dR60059uEc0v5wI01K",
      popular: true
    },
    {
      name: "Massive Package",
      price: "$6,000",
      period: "Month",
      description: "For professionals demanding maximum growth and monetization",
      features: [
        "Grow by 10,000 subscribers using proven organic SEO strategies",
        "x24 YouTube SEO Videos with Thumbnails per month",
        "Advanced keyword optimization & descriptions",
        "Optimized titles & hashtags for maximum visibility",
        "Live Stream Server with 100+ daily viewers"
      ],
      color: "accent",
      image: "neon-gorilla-eyes.jpg",
      link: "https://buy.stripe.com/fZeeUZ4ak7Kf5wIaGp"
    }
  ];

  const metrics = ["SUBSCRIBERS", "VIEWS", "ENGAGEMENT", "SEO RANKING"];

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="text-gradient">Pricing</span> & Packages
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16">
          Choose the perfect growth package for your YouTube channel and start seeing real results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex flex-col">
              <Card className={`bg-card/50 backdrop-blur-sm border-${plan.color}/30 h-full flex flex-col ${plan.popular ? 'ring-2 ring-secondary scale-105 my-4' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-secondary text-white text-sm font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-2 flex items-baseline">
                    <span className={`text-3xl font-bold text-${plan.color}`}>{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/ {plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {metrics.map((metric, i) => (
                      <div key={i} className="flex items-center justify-center h-10">
                        <div className={`w-3 h-3 rounded-full bg-${plan.color} mr-2`}></div>
                        <span className="text-xs font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`h-5 w-5 flex-shrink-0 text-${plan.color} mr-2 mt-0.5`} />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Link href={plan.link} className="w-full">
                    <Button
                      className={`w-full bg-gradient font-semibold hover:opacity-90 transition-opacity`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to <span className="text-gradient">dominate</span> YouTube?
              </h3>
              <p className="text-muted-foreground">
                Start growing your channel today with our proven strategies.
              </p>
            </div>

            <Link href="https://calendly.com/monsterkongmarketing/monsterkong60">
              <Button className="btn-primary text-lg px-8 py-6 whitespace-nowrap">
                Book a Free Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
