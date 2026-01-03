"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus, Calendar, Building2 } from "lucide-react"

const trendingSkills = [
  { name: "TypeScript", change: 24, trend: "up", demand: 92 },
  { name: "React", change: 18, trend: "up", demand: 95 },
  { name: "Python", change: 15, trend: "up", demand: 88 },
  { name: "Node.js", change: 0, trend: "stable", demand: 82 },
  { name: "AWS", change: 30, trend: "up", demand: 79 },
  { name: "Docker", change: -5, trend: "down", demand: 71 },
]

const hiringCompanies = [
  { name: "Tech Startups", count: 234, growth: 45 },
  { name: "Enterprise", count: 156, growth: 12 },
  { name: "Agencies", count: 98, growth: -8 },
]

export function TrendsDashboard() {
  return (
    <section id="trends" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Market Intelligence</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Know What's{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Trending Now</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real-time insights from thousands of internship postings. Stay ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Most In-Demand Skills */}
          <Card className="lg:col-span-2 border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl">Most Requested Skills This Month</CardTitle>
              <CardDescription>Based on 10,000+ recent internship postings</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {trendingSkills.map((skill, i) => {
                const TrendIcon = skill.trend === "up" ? TrendingUp : skill.trend === "down" ? TrendingDown : Minus
                const trendColor =
                  skill.trend === "up"
                    ? "text-accent"
                    : skill.trend === "down"
                      ? "text-destructive"
                      : "text-muted-foreground"

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group animate-slide-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold group-hover:text-primary transition-colors">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                          <span className={`text-sm font-medium ${trendColor}`}>
                            {skill.change > 0 ? "+" : ""}
                            {skill.change}%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                            style={{ width: `${skill.demand}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-12">{skill.demand}%</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Who's Hiring */}
          <Card className="border-accent/20 hover:shadow-xl hover:shadow-accent/10 transition-all">
            <CardHeader>
              <CardTitle>Who's Hiring</CardTitle>
              <CardDescription>Company types posting most internships</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {hiringCompanies.map((company, i) => (
                <div
                  key={company.name}
                  className="space-y-2 animate-slide-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="font-medium">{company.name}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        company.growth > 0
                          ? "text-accent border-accent/30"
                          : company.growth < 0
                            ? "text-muted-foreground"
                            : ""
                      }
                    >
                      {company.growth > 0 ? "+" : ""}
                      {company.growth}%
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                        style={{ width: `${(company.count / 234) * 100}%` }}
                      />
                    </div>
                    <span className="w-16 text-right">{company.count} posts</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Best Time to Apply */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Best Time to Apply</CardTitle>
                <CardDescription>Based on historical hiring patterns</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                <div className="text-3xl font-bold text-primary mb-2">Jan - Mar</div>
                <div className="text-sm text-muted-foreground">Peak summer internship hiring season</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                <div className="text-3xl font-bold text-accent mb-2">Aug - Sep</div>
                <div className="text-sm text-muted-foreground">Fall recruitment window opens</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                <div className="text-3xl font-bold text-chart-3 mb-2">Year-round</div>
                <div className="text-sm text-muted-foreground">Startups hire continuously</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

