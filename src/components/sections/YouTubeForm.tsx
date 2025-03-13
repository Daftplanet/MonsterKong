"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface VideoData {
  id: string;
  title: string;
  url: string;
}

const YouTubeForm = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [error, setError] = useState("");

  // Extract YouTube ID from various URL formats
  const extractYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newVideoUrl.trim() || !newVideoTitle.trim()) {
      setError("Please enter both a title and URL for your video");
      return;
    }

    const videoId = extractYouTubeId(newVideoUrl);

    if (!videoId) {
      setError("Please enter a valid YouTube URL");
      return;
    }

    setVideos([
      ...videos,
      {
        id: videoId,
        title: newVideoTitle,
        url: newVideoUrl
      }
    ]);

    // Reset form
    setNewVideoUrl("");
    setNewVideoTitle("");
    setError("");
  };

  const handleRemove = (index: number) => {
    const updatedVideos = [...videos];
    updatedVideos.splice(index, 1);
    setVideos(updatedVideos);
  };

  return (
    <section id="youtube-form" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Add Your <span className="text-gradient">YouTube Videos</span>
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Add Video Testimonials</CardTitle>
              <CardDescription>
                Enter your YouTube video URLs and titles to showcase on your site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="videoTitle">Video Title</Label>
                    <Input
                      id="videoTitle"
                      value={newVideoTitle}
                      onChange={(e) => setNewVideoTitle(e.target.value)}
                      placeholder="My YouTube Success Story"
                    />
                  </div>

                  <div>
                    <Label htmlFor="videoUrl">YouTube Video URL</Label>
                    <Input
                      id="videoUrl"
                      value={newVideoUrl}
                      onChange={(e) => setNewVideoUrl(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Paste any YouTube URL (e.g., youtube.com/watch?v=XXXXXXXXXXX or youtu.be/XXXXXXXXXXX)
                    </p>
                  </div>
                </div>

                {error && (
                  <div className="text-destructive text-sm">{error}</div>
                )}

                <Button
                  type="submit"
                  className="bg-gradient w-full"
                >
                  Add Video
                </Button>
              </form>

              {videos.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Your Videos</h3>
                  <div className="space-y-4">
                    {videos.map((video, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{video.title}</h4>
                          <p className="text-sm text-muted-foreground truncate max-w-xs">
                            {video.url}
                          </p>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRemove(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YouTubeForm;
