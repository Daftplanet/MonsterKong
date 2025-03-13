import Image from "next/image";

const OnboardingHero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-background z-0"></div>

      {/* Background image - subtle opacity */}
      <div className="absolute top-0 right-0 w-full h-full opacity-40 md:opacity-30 overflow-hidden z-0">
        <Image
          src="/images/neon-gorilla-wireframe.jpg"
          alt="MonsterKong Onboarding"
          fill
          className="object-cover object-center blur-[1px]"
          priority
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Welcome to <span className="text-gradient">MonsterKong</span>
          </h1>

          <div className="bg-card/60 backdrop-blur-md p-8 rounded-xl border border-primary/20 mt-6 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Client <span className="text-primary">Onboarding</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-2">
              Our mission is to help you grow your YouTube Channel and reach your goals.
            </p>

            <p className="text-base text-muted-foreground mb-6">
              Follow the steps below to get started with our YouTube growth services.
            </p>

            <div className="inline-flex items-center justify-center px-6 py-3 bg-accent/10 rounded-full border border-accent/20 mb-2">
              <p className="text-sm font-medium text-accent-foreground">
                This process typically takes less than 10 minutes to complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingHero;
