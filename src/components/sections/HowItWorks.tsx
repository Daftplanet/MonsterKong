import Link from "next/link";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Create a customized video content strategy",
      description: "that aligns with your brand and Objectives."
    },
    {
      number: "2",
      title: "Create compelling and unforgettable short-form video",
      description: "content that connects with your audience and distinguishes you from the Competition."
    },
    {
      number: "3",
      title: "Promote your videos",
      description: "in our mass marketing campaign which brings views, watchtime and a massive influx of subscribers and leads."
    },
    {
      number: "4",
      title: "Efficiently oversee",
      description: "your YouTube Channel with precision and attention, allowing you to concentrate on your strengths."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Does It <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with your audience, grow & reach thousands daily...
          </p>
          <Link href="https://calendly.com/monsterkongmarketing/monsterkong60" className="mt-8 inline-block">
            <Button className="btn-primary text-xl px-10 py-6 mt-6">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
