"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Zap, TrendingUp, Shield } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-slide-up">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-primary">Breaking gatekeeping since 2026</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[size:200%_auto]">
            Break Into Tech
          </span>
          <br />
          <span className="text-foreground">Without The Gatekeeping</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          The ultimate platform for finding ethical internships, building real experience, and landing your dream
          role—no connections required.
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative flex items-center gap-2 bg-card border border-border rounded-lg p-2">
              <Search className="w-5 h-5 text-muted-foreground ml-3" />
              <Input
                placeholder="Search internships by role, tech stack, or company..."
                className="border-0 bg-transparent focus-visible:ring-0 text-lg"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">Search</Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: TrendingUp, label: "10K+ Internships", desc: "Aggregated daily" },
            { icon: Shield, label: "100% Ethical", desc: "Verified sources only" },
            { icon: Zap, label: "Real Experience", desc: "Practice simulator" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

