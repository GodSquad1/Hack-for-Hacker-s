"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, GitBranch, CheckCircle2, Play, Trophy } from "lucide-react"

const roles = [
  {
    id: "frontend",
    title: "Frontend Developer",
    icon: Code2,
    color: "text-primary",
    tasks: 12,
    completed: 0,
    skills: ["React", "CSS", "Accessibility"],
  },
  {
    id: "backend",
    title: "Backend Engineer",
    icon: GitBranch,
    color: "text-accent",
    tasks: 15,
    completed: 0,
    skills: ["Node.js", "APIs", "Database"],
  },
  {
    id: "fullstack",
    title: "Full Stack",
    icon: Trophy,
    color: "text-chart-2",
    tasks: 20,
    completed: 0,
    skills: ["Frontend", "Backend", "DevOps"],
  },
]

export function PracticeSimulator() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <section id="practice" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Practice Simulator</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Gain Real Experience{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Before You Apply
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            No experience? No problem. Complete real-world tasks, build your GitHub profile, and get ready for your
            first internship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {roles.map((role, i) => {
            const Icon = role.icon
            return (
              <Card
                key={role.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up ${
                  selectedRole === role.id
                    ? "border-primary shadow-xl shadow-primary/20 bg-primary/5"
                    : "hover:border-accent/50 hover:shadow-accent/10"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
                onClick={() => setSelectedRole(role.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-card border border-border group-hover:border-primary/50 transition-colors ${selectedRole === role.id ? "border-primary/50" : ""}`}
                    >
                      <Icon className={`w-8 h-8 ${role.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {role.tasks} Tasks
                    </Badge>
                  </div>

                  <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                  <CardDescription>Complete real-world challenges and build your portfolio</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        {role.completed}/{role.tasks}
                      </span>
                    </div>

                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                        style={{ width: `${(role.completed / role.tasks) * 100}%` }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {role.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {selectedRole && (
          <Card className="border-2 border-primary/50 shadow-2xl shadow-primary/20 animate-slide-up bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Your Practice Internship Journey</CardTitle>
              <CardDescription>Complete weekly tasks to build real experience and GitHub history</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {[
                { week: 1, task: "Set up development environment", status: "available" },
                { week: 2, task: "Fix a critical bug in user authentication", status: "locked" },
                { week: 3, task: "Build a new feature: dark mode toggle", status: "locked" },
                { week: 4, task: "Write comprehensive unit tests", status: "locked" },
                { week: 5, task: "Optimize application performance", status: "locked" },
              ].map((item) => (
                <div
                  key={item.week}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                    item.status === "available"
                      ? "border-primary bg-primary/5 hover:shadow-lg hover:shadow-primary/20"
                      : "border-border bg-muted/50 opacity-60"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      item.status === "available"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    W{item.week}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.task}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.status === "available" ? "Ready to start" : "Complete previous tasks to unlock"}
                    </p>
                  </div>

                  {item.status === "available" ? (
                    <Button className="gap-2">
                      <Play className="w-4 h-4" />
                      Start Task
                    </Button>
                  ) : (
                    <CheckCircle2 className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {!selectedRole && (
          <div className="text-center py-12 border-2 border-dashed border-border rounded-xl">
            <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-pulse" />
            <p className="text-lg text-muted-foreground">Select a role above to start your practice internship</p>
          </div>
        )}
      </div>
    </section>
  )
}

