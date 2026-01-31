'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Brain, Zap, Heart, Microscope, Cpu, Activity, Waves, Wand2, Shield } from 'lucide-react'

export default function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4">
        {/* Animated background elements - biotech aesthetic */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm hover:border-primary/60 transition-colors">
              <div className="relative">
                <Brain className="w-5 h-5 text-primary" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm -z-10"></div>
              </div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">N.E.R.V.E. Systems</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-balance leading-tight">
              Neural <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Enhancement</span> 
              <br /> & <span className="text-secondary">Robotic Vital</span> Systems
            </h1>
          </div>

          <p className="text-lg md:text-xl text-foreground/75 max-w-3xl mx-auto text-balance leading-relaxed font-light">
            Transforming human potential at the intersection of bioengineering, robotics, and neuroscience. Groundbreaking neural interfaces, AI-adaptive FES systems, and digital muscle twins redefining what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
              Explore Technology
            </button>
            <button className="px-8 py-4 border-2 border-primary/50 text-primary rounded-lg font-semibold hover:border-primary hover:bg-primary/10 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-7 h-7 text-primary/60" />
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-32 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Breakthrough Technology</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance mt-3">Core Technologies</h2>
            <p className="text-lg text-foreground/65 max-w-2xl mx-auto">Advancing the frontiers of neural enhancement and muscular system restoration through integrated bioengineering solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'Neural Interfaces',
                description: 'Next-gen brain-computer interfaces enabling seamless communication between neural signals and robotic systems',
                accent: 'primary'
              },
              {
                icon: Microscope,
                title: 'Digital Muscle Twins',
                description: 'High-resolution biomechanical simulations predicting movement patterns with unprecedented accuracy',
                accent: 'secondary'
              },
              {
                icon: Waves,
                title: 'IMU-FES Systems',
                description: 'Revolutionary functional electrical stimulation integrated with inertial measurement units for responsive real-time control',
                accent: 'primary'
              },
              {
                icon: Heart,
                title: 'Neural Prosthetics',
                description: 'Biologically-integrated prosthetic limbs with sensory feedback and natural movement prediction',
                accent: 'secondary'
              },
              {
                icon: Wand2,
                title: 'Adaptive AI Engine',
                description: 'Machine learning systems that evolve with individual neural patterns and muscle responses',
                accent: 'accent'
              },
              {
                icon: Shield,
                title: 'Real-Time Rehabilitation',
                description: 'Personalized recovery protocols with continuous neural feedback and performance optimization',
                accent: 'primary'
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="mb-5 inline-flex p-4 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <tech.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-foreground/65 leading-relaxed">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-secondary text-sm font-bold tracking-widest uppercase">Market Impact</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance mt-3">Transforming Clinical Outcomes</h2>
            <p className="text-lg text-foreground/65 max-w-2xl mx-auto">Delivering measurable improvements across rehabilitation, prosthetics, and human performance optimization</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: 'Rehabilitation Excellence',
                subtitle: 'Accelerated Recovery',
                points: [
                  'AI-driven personalized therapy protocols',
                  'Continuous neural feedback loops',
                  'Adaptive progression algorithms',
                  '60% faster recovery timelines',
                ]
              },
              {
                icon: Cpu,
                title: 'Neural Prosthetics',
                subtitle: 'Natural Movement Restoration',
                points: [
                  'Neural-controlled with sensory feedback',
                  'Predictive movement algorithms',
                  'Intuitive user adaptation',
                  'Seamless cognitive integration',
                ]
              },
              {
                icon: Activity,
                title: 'Performance Optimization',
                subtitle: 'Athletic Enhancement',
                points: [
                  'Neuromuscular pattern optimization',
                  'Injury prediction & prevention',
                  'Peak performance modeling',
                  'Data-driven recovery protocols',
                ]
              },
              {
                icon: Microscope,
                title: 'Clinical Research',
                subtitle: 'Evidence-Based Innovation',
                points: [
                  'Advanced diagnostic tools',
                  'Real-time biomedical data capture',
                  'Clinical trial acceleration',
                  'Validated treatment protocols',
                ]
              },
            ].map((app, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/70 p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <app.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                  <p className="text-secondary mb-5 font-semibold text-sm uppercase tracking-wide">{app.subtitle}</p>
                  <ul className="space-y-3">
                    {app.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/80 mt-2.5 flex-shrink-0"></div>
                        <span className="text-foreground/70 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-4 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Our Mission</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance mt-3">The N.E.R.V.E. Vision</h2>
          </div>

          <div className="space-y-8 text-lg text-foreground/75 leading-relaxed max-w-3xl mx-auto">
            <p className="text-foreground/80 text-lg leading-relaxed">
              N.E.R.V.E. stands at the intersection of <span className="text-primary font-semibold">bioengineering</span>, <span className="text-secondary font-semibold">robotics</span>, and <span className="text-accent font-semibold">neuroscience</span>. We unlock new frontiers in neural and muscular system restoration—revolutionizing rehabilitation, prosthetics, and neural interfaces.
            </p>
            <p className="text-foreground/75">
              Through <span className="text-primary font-medium">digital muscle twins</span> and <span className="text-primary font-medium">high-resolution biomechanical simulations</span>, we create predictive models that anticipate human movement and optimize recovery trajectories. We're not just building technology—we're restoring human capability and redefining potential.
            </p>
            <p className="text-foreground/75">
              The convergence of <span className="text-secondary font-medium">IMU-integrated FES systems</span> with <span className="text-secondary font-medium">real-time neural feedback</span> represents a quantum leap in how humans interact with robotic systems. This is the next generation of human enhancement.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Active Interfaces', value: '50+', color: 'text-primary' },
              { label: 'Clinical Partners', value: '30+', color: 'text-secondary' },
              { label: 'Patents Pending', value: '15+', color: 'text-accent' },
              { label: 'R&D Years', value: '8+', color: 'text-primary' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl border border-border/30 bg-background/40 hover:border-primary/30 hover:bg-primary/5 transition-all">
                <div className={`text-4xl md:text-5xl font-black mb-3 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-foreground/60 font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance">Ready to Advance Human Potential?</h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">Partner with N.E.R.V.E. to revolutionize neural enhancement, rehabilitation, and human performance optimization</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 uppercase tracking-wide">
              Get Started
            </button>
            <button className="px-10 py-4 border-2 border-primary/50 text-primary rounded-lg font-bold text-lg hover:border-primary hover:bg-primary/10 transition-all transform hover:scale-105 uppercase tracking-wide">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <Brain className="w-6 h-6 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm -z-10"></div>
                </div>
                <h3 className="font-bold text-lg">N.E.R.V.E.</h3>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed">Neural Enhancement & Robotic Vital Systems—advancing bioengineering at the intersection of neuroscience and robotics.</p>
            </div>
            <div>
              <h4 className="font-bold mb-5 uppercase text-sm tracking-wide text-foreground">Technology</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors font-medium">Neural Interfaces</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">Digital Muscle Twins</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">FES Systems</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">AI Integration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-5 uppercase text-sm tracking-wide text-foreground">Company</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors font-medium">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">Research</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-5 uppercase text-sm tracking-wide text-foreground">Connect</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors font-medium">Twitter / X</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors font-medium">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row justify-between items-center text-foreground/50 text-sm">
            <p>&copy; 2025 N.E.R.V.E. Systems. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
