import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Image as ImageIcon, Video, Megaphone, Link2, Radio } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Search Engine Optimization",
      description: "By regularly updating video titles, descriptions, and tags, we enhance discoverability and viewer engagement. Our strategic approach helps maintain a competitive edge in a dynamic digital landscape, boosting both viewer retention and potential for monetization."
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-primary" />,
      title: "Thumbnails",
      description: "Thumbnails play a critical role in the success of video content, especially on platforms like YouTube. We focus on clarity, relevance, and visual appeal to grab attention quickly, increasing click-through rates and viewer engagement."
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Shorts",
      description: "We use YouTube Shorts as part of our integrated marketing strategy. These Shorts are also available for clients to publish across other social media platforms. By aligning these Shorts with SEO best practices, we enhance their discoverability and appeal."
    },
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Advertising",
      description: "We utilize targeted advertising to boost growth and generate leads, crafting campaigns that effectively reach our clients' audiences. By focusing on strategic ad placements and tailored messaging, we enhance visibility and engagement."
    },
    {
      icon: <Link2 className="h-10 w-10 text-primary" />,
      title: "Backlinks",
      description: "We create backlinks in blog posts on our own websites and highly reputable platforms like Medium, Tumblr, Blogspot, WordPress, and more to enhance the visibility of your YouTube Videos, helping signal to Google that your content is credible and relevant."
    },
    {
      icon: <Radio className="h-10 w-10 text-primary" />,
      title: "24/7 Live Streaming",
      description: "Live streaming offers real-time audience engagement, and when we manage it for your channel, the impact is significant. We handle all technical aspects to ensure a professional-quality stream, boosting brand loyalty and viewer retention."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How We Help <span className="text-gradient">Our Customers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex justify-center items-center h-16 w-16 rounded-lg bg-primary/10 mx-auto">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-center">
                {service.description}
              </p>

              <div className="mt-6 flex justify-center">
                <Link href="https://calendly.com/monsterkong/strategy-call">
                  <Button className="bg-gradient text-white font-semibold px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Example YouTube Thumbnails */}
        <div className="mt-24">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="relative w-64 h-36 rounded-lg overflow-hidden border-2 border-primary/50 transform hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-lg font-bold text-center px-4 drop-shadow-lg">Risk It All, Win Everything</h4>
              </div>
            </div>

            <div className="relative w-64 h-36 rounded-lg overflow-hidden border-2 border-secondary/50 transform hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-lg font-bold text-center px-4 drop-shadow-lg">Overcoming Adversity, Inspiring Change</h4>
              </div>
            </div>

            <div className="relative w-64 h-36 rounded-lg overflow-hidden border-2 border-accent/50 transform hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-lg font-bold text-center px-4 drop-shadow-lg">YouTube Secrets You Won't Believe</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="https://calendly.com/monsterkong/strategy-call">
            <Button className="btn-primary text-lg px-8 py-6">
              Claim Your Spot Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
