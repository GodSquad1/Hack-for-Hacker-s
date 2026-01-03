"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold">InternHub</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Breaking down barriers to entry in tech, one internship at a time.
            </p>
            <Badge className="bg-accent/10 text-accent border-accent/20">Open Source</Badge>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#explore" className="hover:text-primary transition-colors">
                  Explore Internships
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-primary transition-colors">
                  Practice Simulator
                </a>
              </li>
              <li>
                <a href="#analyzer" className="hover:text-primary transition-colors">
                  Resume Analyzer
                </a>
              </li>
              <li>
                <a href="#trends" className="hover:text-primary transition-colors">
                  Market Trends
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contributing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub Discussions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
            <span>for hackers</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

