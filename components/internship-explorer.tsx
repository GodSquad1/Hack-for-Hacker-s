"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, DollarSign, Calendar, Star, ExternalLink, Filter } from "lucide-react"

// Mock data structure - ready for backend integration
const mockInternships = [
  {
    id: 1,
    title: "Frontend Engineering Intern",
    company: "Tech Startup Inc",
    location: "Remote",
    salary: "$25/hr",
    posted: "2 days ago",
    tags: ["React", "TypeScript", "Next.js"],
    level: "Beginner",
    type: "Paid",
    rating: 4.8,
    verified: true,
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "Cloud Solutions",
    location: "San Francisco, CA",
    salary: "$30/hr",
    posted: "5 days ago",
    tags: ["Node.js", "Python", "AWS"],
    level: "Intermediate",
    type: "Paid",
    rating: 4.9,
    verified: true,
  },
  {
    id: 3,
    title: "Full Stack Intern",
    company: "Innovation Labs",
    location: "Remote",
    salary: "$28/hr",
    posted: "1 week ago",
    tags: ["JavaScript", "MongoDB", "React"],
    level: "Beginner",
    type: "Paid",
    rating: 4.6,
    verified: true,
  },
]

export function InternshipExplorer() {
  const [selectedLevel, setSelectedLevel] = useState("all")

  return (
    <section id="explore" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Internship Explorer</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Discover Your Next{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Opportunity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse thousands of verified internships from ethical sources. Filter by tech stack, experience level, and
            more.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="all">All Internships</TabsTrigger>
              <TabsTrigger value="beginner">Beginner Friendly</TabsTrigger>
              <TabsTrigger value="remote">Remote Only</TabsTrigger>
            </TabsList>

            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </Button>
          </div>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockInternships.map((internship, i) => (
                <Card
                  key={internship.id}
                  className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 bg-card animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {internship.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium">{internship.company}</CardDescription>
                      </div>
                      {internship.verified && (
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                          Verified
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {internship.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {internship.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4 text-accent" />
                      {internship.salary} • {internship.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Posted {internship.posted}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{internship.rating}</span>
                      <Badge variant="secondary" className="text-xs ml-auto">
                        {internship.level}
                      </Badge>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beginner">
            <div className="text-center py-12 text-muted-foreground">
              Beginner-friendly internships will appear here
            </div>
          </TabsContent>

          <TabsContent value="remote">
            <div className="text-center py-12 text-muted-foreground">Remote internships will appear here</div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="group bg-transparent">
            Load More Internships
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

