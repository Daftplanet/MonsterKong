import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const OnboardingYouTubeGuide = () => {
  return (
    <section className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-background/90 to-background z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/40 backdrop-blur-md p-8 rounded-xl shadow-lg border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-gradient">Step 1:</span> Watch How to Add MonsterKong as Your Channel Manager
            </h2>
            
            <div className="mb-6">
              <p className="text-muted-foreground">
                Before proceeding with any other steps, please watch this short tutorial to learn how to add MonsterKong as a manager to your YouTube channel. 
                This is a required first step before we can start optimizing your channel.
              </p>
            </div>
            
            <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary/20 shadow-md">
              <iframe 
                src="https://www.youtube.com/embed/vOmzB_b2iZU?si=C9Vb6LmP01B7rS58" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-6 p-5 bg-background/40 backdrop-blur-sm rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-gradient flex items-center justify-center text-white mr-2 text-xs">1</span>
                Sign in to your YouTube account
              </h3>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-gradient flex items-center justify-center text-white mr-2 text-xs">2</span>
                Go to YouTube Studio Settings → Channel → Permissions
              </h3>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-gradient flex items-center justify-center text-white mr-2 text-xs">3</span>
                Add our emails as "Manager" or "Editor"
              </h3>
              <h3 className="text-lg font-semibold flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-gradient flex items-center justify-center text-white mr-2 text-xs">4</span>
                Send the invitation and we'll accept it within 24 hours
              </h3>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Having trouble? Contact us at <Link href="mailto:support@monsterkong.com" className="text-primary hover:underline">support@monsterkong.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingYouTubeGuide;
