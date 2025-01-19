import React, { useEffect, useState } from 'react';
import { Bot, Brain, Cpu, Database, LineChart, Rocket, Shield, ArrowRight, Calendar } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Connecting Lines SVG */}
      <svg className="connecting-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M10,50 Q50,10 90,50" />
        <path d="M10,50 Q50,90 90,50" />
      </svg>

      {/* Noise Effect */}
      <div className="noise" />

      {/* Top CTA */}
      <div className="absolute top-4 right-4 z-50">
        <a 
          href="https://calendly.com/shivanshbajaj053/consultation-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
        >
          <Calendar className="w-4 h-4" />
          Schedule Demo
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className={`text-center transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              TitanFlow AI
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business with our enterprise-grade AI solutions
            </p>
            <div className="flex justify-center">
              <a 
                href="https://calendly.com/shivanshbajaj053/consultation-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-500/20">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Introduction Video"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-all duration-1000 delay-500 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Brain, title: 'Enhanced Decision Making', description: 'Leverage advanced ML models for smarter, data-driven decisions' },
            { icon: Bot, title: 'Increased Efficiency', description: 'Automate repetitive tasks and streamline operations' },
            { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security with full regulatory compliance' },
            { icon: LineChart, title: 'Growth Optimization', description: 'Identify trends and opportunities with predictive analytics' },
            { icon: Database, title: 'Scalable Solutions', description: 'Handle growing data needs with efficient processing' },
            { icon: Cpu, title: 'Real-time Processing', description: 'Edge computing for instant insights and actions' },
          ].map((benefit, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <benefit.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '01', title: 'Initial Consultation', description: 'We analyze your business needs and identify AI opportunities' },
              { number: '02', title: 'Custom Solution Design', description: 'Our experts design a tailored AI solution for your specific requirements' },
              { number: '03', title: 'Seamless Integration', description: 'We implement and integrate the solution into your existing workflow' }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-cyan-500/20">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-cyan-500/20 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
            Client Success Story
          </h2>
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-500/20">
            <iframe
              src="https://www.youtube.com/embed/n0AMuRYvSzs"
              title="Client Testimonial"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden py-24">
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 delay-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join leading enterprises that are already leveraging our AI solutions
          </p>
          <a 
            href="https://calendly.com/shivanshbajaj053/consultation-call"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all inline-flex items-center gap-2"
          >
            Schedule Demo
            <Rocket className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-400">
            <p>© 2024 TitanFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Decorative Pearls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="pearl absolute w-4 h-4"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse 3s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;