import Link from "next/link";
import { ArrowRight, Mail, User, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnboardingSteps = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background z-0"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-card/40 backdrop-blur-md p-8 rounded-xl border border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-md shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient rounded-full text-white font-bold text-xl shadow-md">
                    1
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient">
                    Step 2: Channel Access (Step 2)
                  </h3>
                  <p className="text-base text-muted-foreground mb-5">
                    First, we need to be added to your YouTube Channel as a Channel Manager or Editor.
                    This gives us the necessary permissions to optimize your content and implement our growth strategies.
                  </p>

                  <div className="bg-background/60 backdrop-blur-md p-5 rounded-xl border border-border">
                    <h4 className="font-semibold text-lg mb-4 flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-primary" />
                      Add these emails to your YouTube channel:
                    </h4>
                    <div className="space-y-4 pl-7">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <p className="font-medium text-foreground">
                          <Link
                            href="mailto:monsterkongshorts@gmail.com"
                            className="text-primary hover:underline transition-all"
                          >
                            monsterkongshorts@gmail.com
                          </Link>
                        </p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <p className="font-medium text-foreground">
                          <Link
                            href="mailto:ytmonsterkong@gmail.com"
                            className="text-primary hover:underline transition-all"
                          >
                            ytmonsterkong@gmail.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Added below - see OnboardingYouTubeGuide component */}

            {/* Step 3 */}
            <div className="bg-card/40 backdrop-blur-md p-8 rounded-xl border border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-md shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient rounded-full text-white font-bold text-xl shadow-md">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient">
                    Complete Onboarding Form
                  </h3>
                  <p className="text-base text-muted-foreground mb-5">
                    After granting channel access, please complete our detailed onboarding form.
                    This helps us understand your goals, target audience, and content strategy to deliver optimal results.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdUyL0Yqxvvql-hKiatX288z1v4CXiHcPlBZquiHoXYqdbZUw/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gradient px-6 py-3 rounded-full w-full sm:w-auto shadow-md">
                        <FileText className="mr-2 h-5 w-5" />
                        Open Onboarding Form
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      Takes approximately 5 minutes to complete
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-card/40 backdrop-blur-md p-8 rounded-xl border border-secondary/20 transition-all duration-300 hover:border-secondary/40 hover:shadow-md shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient rounded-full text-white font-bold text-xl shadow-md">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient">
                    Strategy Call
                  </h3>
                  <p className="text-base text-muted-foreground mb-5">
                    Our team will schedule a strategy call to review your goals, answer questions, and establish a
                    customized growth roadmap for your channel. This call ensures we're aligned with your vision.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <Link
                      href="https://calendly.com/monsterkongmarketing/monsterkong60"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gradient px-6 py-3 rounded-full w-full sm:w-auto shadow-md">
                        <User className="mr-2 h-5 w-5" />
                        Schedule Strategy Call
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      60-minute video call with our growth specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
