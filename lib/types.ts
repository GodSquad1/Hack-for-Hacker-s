// Backend integration types - ready for API implementation

export interface Internship {
  id: string
  title: string
  company: string
  location: string
  salary: string
  postedDate: Date
  tags: string[]
  level: "Beginner" | "Intermediate" | "Advanced"
  type: "Paid" | "Unpaid"
  rating: number
  verified: boolean
  description?: string
  applicationUrl?: string
}

export interface PracticeTask {
  id: string
  roleId: string
  week: number
  title: string
  description: string
  difficulty: "Easy" | "Medium" | "Hard"
  githubRepo?: string
  completed: boolean
  skills: string[]
}

export interface ResumeAnalysis {
  overallScore: number
  strongSkills: string[]
  missingSkills: Array<{
    skill: string
    demand: number
    priority: "High" | "Medium" | "Low"
  }>
  recommendations: string[]
  matchingInternships: string[]
}

export interface TrendData {
  skill: string
  demand: number
  change: number
  trend: "up" | "down" | "stable"
}

export interface Review {
  id: string
  internshipId: string
  company: string
  reviewer: string
  role: string
  rating: number
  date: Date
  verified: boolean
  helpful: number
  content: string
  tags: string[]
  warning?: boolean
}

// API endpoints structure for backend team
export const API_ENDPOINTS = {
  internships: {
    list: "/api/internships",
    get: (id: string) => `/api/internships/${id}`,
    search: "/api/internships/search",
    filter: "/api/internships/filter",
  },
  practice: {
    roles: "/api/practice/roles",
    tasks: (roleId: string) => `/api/practice/roles/${roleId}/tasks`,
    complete: "/api/practice/tasks/complete",
  },
  resume: {
    upload: "/api/resume/upload",
    analyze: "/api/resume/analyze",
  },
  trends: {
    skills: "/api/trends/skills",
    companies: "/api/trends/companies",
    timeline: "/api/trends/timeline",
  },
  reviews: {
    list: "/api/reviews",
    create: "/api/reviews",
    helpful: (id: string) => `/api/reviews/${id}/helpful`,
  },
} as const

