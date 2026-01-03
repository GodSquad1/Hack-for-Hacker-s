"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, MessageSquare, ThumbsUp, AlertCircle, CheckCircle } from "lucide-react"

const reviews = [
  {
    id: 1,
    company: "Tech Startup Inc",
    reviewer: "Sarah K.",
    role: "Frontend Intern",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    helpful: 24,
    content:
      "Amazing experience! They actually gave me real projects to work on, not just busy work. The team was super supportive and I learned so much about React and TypeScript.",
    tags: ["Beginner Friendly", "Great Mentorship", "Real Projects"],
  },
  {
    id: 2,
    company: "Cloud Solutions",
    reviewer: "Mike T.",
    role: "Backend Intern",
    rating: 4,
    date: "1 month ago",
    verified: true,
    helpful: 18,
    content:
      "Good internship overall. Work was challenging but rewarding. Only downside was the interview process took a bit long. Would recommend!",
    tags: ["Challenging", "Good Pay", "Slow Process"],
  },
  {
    id: 3,
    company: "Shady Corp",
    reviewer: "Alex P.",
    role: "Full Stack Intern",
    rating: 2,
    date: "3 days ago",
    verified: true,
    helpful: 42,
    content:
      "Be careful with this one. They promised mentorship but I ended up working alone on unclear tasks. Payment was also delayed by 2 weeks.",
    tags: ["Poor Communication", "Payment Issues", "No Mentorship"],
    warning: true,
  },
]

export function CommunityReviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Community Reviews</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Real Reviews From{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Real Interns</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transparency is power. See what other interns experienced before you apply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, i) => (
            <Card
              key={review.id}
              className={`group transition-all duration-300 hover:scale-[1.02] animate-slide-up ${
                review.warning
                  ? "border-destructive/50 hover:shadow-xl hover:shadow-destructive/20"
                  : "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {review.reviewer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{review.reviewer}</div>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                  {review.verified && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <CardTitle className="text-lg">{review.company}</CardTitle>
                <CardDescription className="text-sm">{review.role}</CardDescription>

                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium">{review.rating}.0</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {review.warning && (
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-destructive">Community flagged: Proceed with caution</p>
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed">{review.content}</p>

                <div className="flex flex-wrap gap-2">
                  {review.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`text-xs ${review.warning ? "border-destructive/30 text-destructive" : ""}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  <Button variant="ghost" size="sm" className="gap-2 text-xs">
                    <ThumbsUp className="w-3 h-3" />
                    Helpful ({review.helpful})
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-xs">
                    <MessageSquare className="w-3 h-3" />
                    Reply
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group bg-transparent">
            View All Reviews
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

