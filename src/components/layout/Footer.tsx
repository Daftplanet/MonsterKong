import Link from "next/link";
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-16 border-t border-border relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card opacity-50 z-0"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">MonsterKong</h3>
            <p className="text-muted-foreground mb-6">
              MonsterKong is a results-driven YouTube growth agency that connects brands, experts, and entrepreneurs with massive organic growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="https://monsterkong.marketing/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/monsterkongmarketing/monsterkong60"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Case Study</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://calendly.com/monsterkongmarketing/monsterkong60"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book demo
                </Link>
              </li>
              <li>
                <Link href="https://monsterkong.com/fulfilmentpolicy" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <p className="text-muted-foreground mb-4">
              2554 Lincoln Blvd. #757 <br />
              Venice, CA 90291 <br />
              Tel +1-310-467-1002
            </p>

            <h3 className="text-lg font-bold mb-3 mt-6">Follow us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/MonsterKongMarketing1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-background hover:bg-primary/20 transition-colors"
              >
                <Facebook size={18} className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link
                href="https://www.youtube.com/@MonsterKongYT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-background hover:bg-primary/20 transition-colors"
              >
                <Youtube size={18} className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link
                href="https://www.instagram.com/monsterkongmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-background hover:bg-primary/20 transition-colors"
              >
                <Instagram size={18} className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link
                href="https://x.com/MonsterKongO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-background hover:bg-primary/20 transition-colors"
              >
                <Twitter size={18} className="text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="https://monsterkong.com/fulfilmentpolicy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/money-back-guarantee" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              100% Money Back Guarantee
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            Copyright © {currentYear} MonsterKong | Powered by MonsterKong
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
