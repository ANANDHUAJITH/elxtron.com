'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Brain, Zap, Heart, Microscope, Cpu, Activity } from 'lucide-react'

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
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold tracking-widest text-primary">N.E.R.V.E.</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Neural Enhancement & <span className="text-primary">Robotic Vital</span> Systems
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto text-balance leading-relaxed">
            Revolutionizing human potential at the intersection of bioengineering, robotics, and neuroscience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105">
              Explore Technology
            </button>
            <button className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
              Learn More
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary/60" />
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Core Technologies</h2>
            <p className="text-lg text-foreground/60">Advancing the boundaries of neural and muscular enhancement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'Neural Interfaces',
                description: 'Direct brain-computer interfaces enabling seamless communication and control',
              },
              {
                icon: Microscope,
                title: 'Digital Twins',
                description: 'High-resolution muscle simulations for predictive analysis and optimization',
              },
              {
                icon: Zap,
                title: 'FES Systems',
                description: 'IMU-integrated functional electrical stimulation for responsive rehabilitation',
              },
              {
                icon: Heart,
                title: 'Prosthetics',
                description: 'Biologically-inspired prosthetic limbs with natural movement patterns',
              },
              {
                icon: Activity,
                title: 'Rehabilitation',
                description: 'Personalized recovery protocols powered by real-time neural feedback',
              },
              {
                icon: Cpu,
                title: 'AI Integration',
                description: 'Machine learning algorithms adapting to individual neural patterns',
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Real-World Impact</h2>
            <p className="text-lg text-foreground/60">Transforming lives through innovative neural and robotic solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Rehabilitation Excellence',
                subtitle: 'Recovery Acceleration',
                points: [
                  'Personalized therapy protocols',
                  'Real-time neural feedback systems',
                  'Adaptive difficulty progression',
                  'Accelerated recovery timelines',
                ]
              },
              {
                title: 'Prosthetic Innovation',
                subtitle: 'Natural Movement Restoration',
                points: [
                  'Neural-controlled limbs',
                  'Sensory feedback integration',
                  'Natural motion prediction',
                  'Seamless user adaptation',
                ]
              },
              {
                title: 'Athletic Enhancement',
                subtitle: 'Performance Optimization',
                points: [
                  'Neuromuscular optimization',
                  'Injury prevention systems',
                  'Peak performance modeling',
                  'Recovery optimization',
                ]
              },
              {
                title: 'Medical Research',
                subtitle: 'Clinical Excellence',
                points: [
                  'Cutting-edge clinical tools',
                  'Data-driven insights',
                  'Treatment validation',
                  'Evidence-based protocols',
                ]
              },
            ].map((app, idx) => (
              <div key={idx} className="p-8 border border-border rounded-xl bg-card hover:shadow-xl transition-shadow">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{app.title}</h3>
                <p className="text-primary mb-4 font-semibold">{app.subtitle}</p>
                <ul className="space-y-3">
                  {app.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span className="text-foreground/70">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Vision</h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                N.E.R.V.E. stands at the intersection of bioengineering, robotics, and neuroscience. We bring forward new possibilities for improving human neural and muscular systems, particularly in the fields of rehabilitation, prosthetics, and neural interfaces.
              </p>
              <p>
                Our groundbreaking approach leverages digital twins and high-resolution muscle simulations to create predictive models that optimize human performance and recovery. We're not just building technology—we're enabling human potential.
              </p>
              <p>
                The integration of IMU data into FES systems represents a next-generation technology that fundamentally changes how we interact with our bodies through robotic systems. This is the future of human enhancement.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Neural Interfaces', value: '50+' },
              { label: 'Clinical Partners', value: '30+' },
              { label: 'Patents Pending', value: '15+' },
              { label: 'Research Years', value: '8+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Transform Human Potential?</h2>
          <p className="text-xl text-foreground/60 mb-8">Join us in revolutionizing neural enhancement and robotic systems</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                N.E.R.V.E.
              </h3>
              <p className="text-foreground/60 text-sm">Neural Enhancement & Robotic Vital Systems</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Technology</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Neural Interfaces</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Prosthetics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FES Systems</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-foreground/50 text-sm">
            <p>&copy; 2025 N.E.R.V.E. Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
