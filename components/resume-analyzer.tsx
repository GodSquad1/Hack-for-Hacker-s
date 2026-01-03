"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"

export function ResumeAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalyzed(true)
    }, 2000)
  }

  return (
    <section id="analyzer" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">AI Resume Analyzer</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Know Exactly What{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              You're Missing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Upload your resume and get instant feedback on what skills to learn next, powered by real internship data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-2xl">Upload Your Resume</CardTitle>
              <CardDescription>We'll analyze it against thousands of real internship requirements</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="w-12 h-12 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">Drop your resume here</h3>
                <p className="text-sm text-muted-foreground mb-6">Supports PDF, DOCX, or TXT files</p>

                <Button size="lg" className="gap-2" onClick={handleAnalyze} disabled={isAnalyzing}>
                  {isAnalyzing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      Choose File
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card
            className={`transition-all duration-500 ${analyzed ? "border-primary shadow-xl shadow-primary/20" : "opacity-50"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Your Skill Analysis</CardTitle>
              <CardDescription>
                {analyzed ? "Based on your resume and current market demands" : "Upload a resume to see results"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {analyzed ? (
                <>
                  {/* Overall Score */}
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">Readiness Score</span>
                      <Badge className="bg-primary text-primary-foreground">Good Match</Badge>
                    </div>
                    <div className="flex items-end gap-4">
                      <div className="text-5xl font-bold text-primary">72%</div>
                      <div className="flex items-center gap-2 text-sm text-accent mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Ready for Frontend roles</span>
                      </div>
                    </div>
                  </div>

                  {/* Strong Skills */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold">Strong Skills</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["React", "JavaScript", "HTML/CSS", "Git"].map((skill) => (
                        <Badge key={skill} className="bg-accent/10 text-accent border-accent/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Missing Skills */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Skills to Develop</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        { skill: "TypeScript", demand: 85, priority: "High" },
                        { skill: "Testing (Jest/React Testing Library)", demand: 70, priority: "Medium" },
                        { skill: "API Integration", demand: 90, priority: "High" },
                      ].map((item) => (
                        <div key={item.skill} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{item.skill}</span>
                            <Badge
                              variant="outline"
                              className={item.priority === "High" ? "text-primary border-primary" : ""}
                            >
                              {item.priority} Priority
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                                style={{ width: `${item.demand}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground w-12">{item.demand}% demand</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Actions */}
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <h4 className="font-semibold mb-2 text-accent">Recommended Next Steps</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">→</span>
                        <span>Complete the TypeScript practice internship (Week 1-4)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">→</span>
                        <span>Build a project that integrates with REST APIs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">→</span>
                        <span>Apply to 12 internships that match your current skills</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Upload a resume to see your personalized analysis</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

