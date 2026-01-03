import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen dark">
      <Hero />

      {/* Quick Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm text-muted-foreground mt-2">Internships</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-2">Companies</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-sm text-muted-foreground mt-2">Success Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

