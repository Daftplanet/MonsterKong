"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-10">
            <Image
              src="/images/monster-kong-logo-new.jpg"
              alt="MonsterKong Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/about-us"
            className="text-foreground hover:text-primary transition-colors"
          >
            About us
          </Link>
          <Link
            href="/#pricing"
            className="text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/onboarding"
            className="text-foreground hover:text-primary transition-colors"
          >
            Onboarding
          </Link>
          <Link
            href="https://monsterkong.marketing/"
            className="text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </Link>
          <Link
            href="https://calendly.com/monsterkongmarketing/monsterkong60"
            className="text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </Link>
          <Link
            href="https://calendly.com/monsterkongmarketing/monsterkong60"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-gradient font-semibold rounded-full px-6"
            >
              Book demo
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-black z-40">
          <nav className="container mx-auto py-6 flex flex-col space-y-6">
            <Link
              href="/about-us"
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/#pricing"
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/onboarding"
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Onboarding
            </Link>
            <Link
              href="https://monsterkong.marketing/"
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
            <Link
              href="https://calendly.com/monsterkongmarketing/monsterkong60"
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </Link>
            <Link
              href="https://calendly.com/monsterkongmarketing/monsterkong60"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-gradient font-semibold rounded-full w-full py-6 text-lg"
              >
                Book demo
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
