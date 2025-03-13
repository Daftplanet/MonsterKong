import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-background z-0"></div>

      {/* Growth background image */}
      <div className="absolute top-0 right-0 w-full h-full opacity-70 md:opacity-60 overflow-hidden z-0">
        <Image
          src="/images/business-growth-background.jpg"
          alt="YouTube Growth"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Become</span>
              <span className="text-gradient">YouTube Famous</span>
              <span className="block">Fast</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Entrepreneurs, Coaches, Creators & Influencers
            </p>

            <div className="relative flex items-center">
              <div className="w-14 h-14 relative mr-4">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gradient">MK</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">MonsterKong</h2>
                <p className="text-muted-foreground">Beyond your expectations!</p>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border mt-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                We Guarantee, <span className="text-primary">20k+ Organic Subscribers</span> Within The First 360 Days
              </h3>
              <p className="text-muted-foreground">
                No bots, no fake followers and 100% TOS compliant.
              </p>
            </div>

            <div className="pt-4">
              <Link href="https://calendly.com/monsterkongmarketing/monsterkong60">
                <Button className="btn-primary text-xl px-10 py-7">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Right side column - intentionally left empty */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
