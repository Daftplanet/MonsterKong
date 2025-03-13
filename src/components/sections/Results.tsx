import Link from "next/link";
import { Button } from "@/components/ui/button";

const ResultsSection = () => {
  const metrics = [
    {
      value: "8 Billion+",
      label: "Organic Views Generated on YouTube"
    },
    {
      value: "5+ Years",
      label: "Working with Top Creators and Brands"
    },
    {
      value: "150+",
      label: "Content Pieces Published for 1 Client Per Month"
    },
    {
      value: "5M+",
      label: "Subscribers Gained for Our Clients"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card/30">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Results We've <span className="text-gradient">Generated</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven strategies have delivered exceptional results for brands and creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-8 text-center transition-all duration-300 hover:translate-y-[-5px]"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">
                {metric.value}
              </h3>
              <p className="text-lg text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="https://calendly.com/monsterkongmarketing/monsterkong60">
            <Button className="btn-primary">
              Apply To See If You Qualify
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
