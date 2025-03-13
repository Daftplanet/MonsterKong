"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface VideoData {
  id: string;
  thumbnail: string;
  title: string;
}

const Testimonials = () => {
  const defaultVideos: VideoData[] = [
    {
      id: "https://www.youtube.com/watch?v=bb89CfCcSUk&list=PLLT7Kpfct3EuMblqlwf6IkTYqmj367fdp&index=1&pp=iAQB",
      thumbnail: "/images/testimonials/video-1.jpg",
      title: "Andy Dane Carter"
    },
    {
      id: "https://www.youtube.com/watch?v=TwqgL-EDr78&list=PLLT7Kpfct3EuMblqlwf6IkTYqmj367fdp&index=4&pp=iAQB",
      thumbnail: "/images/testimonials/video-2.jpg",
      title: "Preston Smiles"
    },
    {
      id: "https://www.youtube.com/watch?v=mFpuiQ9quys&list=PLLT7Kpfct3EuMblqlwf6IkTYqmj367fdp&index=6&pp=iAQB",
      thumbnail: "/images/testimonials/video-3.jpg",
      title: "Carmelia Ray"
    },
    {
      id: "https://www.youtube.com/watch?v=qfhS6TTE43Q",
      thumbnail: "/images/testimonials/video-4.jpg",
      title: "Clark Bartram"
    }
  ];

  const [videos, setVideos] = useState<VideoData[]>(defaultVideos);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Function to extract YouTube ID from URL
  const getYoutubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : url;
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden bg-card/30">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Listen to what our clients have to say about their experience working with MonsterKong
          </p>
        </div>

        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-10 right-0 text-white hover:text-primary"
                onClick={() => setActiveVideo(null)}
              >
                Close
              </button>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${getYoutubeId(activeVideo)}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="relative group">
              <div
                className="relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 border-border group-hover:border-primary/50 transition-all"
                onClick={() => setActiveVideo(video.id)}
              >
                <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/30 z-10"></div>
                {video.thumbnail ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-card/80 flex items-center justify-center">
                    <span className="text-muted-foreground">Thumbnail</span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-medium text-center">{video.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium">Join our long list of successful clients</p>
          <p className="text-muted-foreground mb-8">Experience the MonsterKong difference today</p>
          <Link
            href="https://calendly.com/monsterkongmarketing/monsterkong60"
            className="btn-primary inline-block px-8 py-4"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
