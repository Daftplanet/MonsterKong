"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, Phone, Calendar, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Create the form schema with validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  channelUrl: z.string().url({
    message: "Please enter a valid YouTube channel URL.",
  }).optional().or(z.literal("")),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const OnboardingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      channelUrl: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-background to-background/90 z-0"></div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Need Assistance?</span>
              </h2>
              <p className="text-base text-muted-foreground mb-8">
                If you have specific questions about our YouTube growth services or need help with the onboarding process,
                our team is here to assist you.
              </p>

              <Card className="border-primary/20 bg-card/40 backdrop-blur-md shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Contact Us</CardTitle>
                  <CardDescription>We'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your name"
                                  {...field}
                                  className="bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="your.email@example.com"
                                  {...field}
                                  className="bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="channelUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>YouTube Channel URL (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://youtube.com/c/yourchannel"
                                {...field}
                                className="bg-background/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your questions or comments..."
                                className="min-h-[120px] resize-none bg-background/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-gradient py-6 shadow-md"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </span>
                        )}
                      </Button>

                      {isSuccess && (
                        <div className="bg-green-500/20 border border-green-500/30 rounded-md p-4 text-center">
                          <p className="text-green-400 font-medium">Message sent successfully! We'll be in touch soon.</p>
                        </div>
                      )}
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Resources */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Quick</span> Resources
              </h2>

              <div className="space-y-6">
                <Card className="border-accent/20 bg-card/40 backdrop-blur-md hover:border-accent/40 transition-all duration-300 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Phone className="mr-2 h-5 w-5 text-primary" />
                      Direct Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Need immediate assistance with your YouTube channel growth? Contact our support team:
                    </p>
                    <p className="font-medium">
                      <Link
                        href="mailto:support@monsterkong.com"
                        className="text-primary hover:underline transition-all"
                      >
                        support@monsterkong.com
                      </Link>
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-card/40 backdrop-blur-md hover:border-accent/40 transition-all duration-300 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      Book a Strategy Call
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Schedule a 1-on-1 call with our YouTube growth experts to discuss your channel's strategy:
                    </p>
                    <Link
                      href="https://calendly.com/monsterkongmarketing/monsterkong60"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="bg-gradient w-full flex items-center justify-center py-6 shadow-md">
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule Your Call
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-card/40 backdrop-blur-md hover:border-accent/40 transition-all duration-300 shadow-lg overflow-hidden">
                  <div className="h-40 relative">
                    <Image
                      src="/images/neon-gorilla-headphones.jpg"
                      alt="MonsterKong Support"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <CardTitle className="text-xl text-white mb-2">Resources & Policies</CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-4">
                      Find answers to common questions about our YouTube growth services:
                    </p>
                    <div className="flex flex-col space-y-2">
                      <Link
                        href="https://monsterkong.com/fulfilmentpolicy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Fulfillment Policy
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center text-primary hover:underline"
                      >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Growth Strategy Guide
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center text-primary hover:underline"
                      >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        YouTube Best Practices
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingForm;
