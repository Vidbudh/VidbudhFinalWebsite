import React from 'react';
import { 
  Brain, 
  Settings, 
  GraduationCap, 
  Rocket, 
  Code, 
  BarChart3,
  ArrowRight,
  Search,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Gen AI Strategy",
      description: "Define your generative AI roadmap and identify high-impact use cases that align with your business objectives.",
      features: ["Strategic Planning", "Use Case Identification", "ROI Analysis", "Technology Roadmap"],
      link: "/ai-strategy"
    },
    {
      icon: Rocket,
      title: "Gen AI Proof of Concept",
      description: "Validate your generative AI ideas with rapid prototyping and feasibility testing before full implementation.",
      features: ["Rapid Prototyping", "Feasibility Analysis", "Risk Assessment", "Success Metrics"],
      link: "/gen-ai-poc"
    },
    {
      icon: Settings,
      title: "AI Implementations",
      description: "Full-scale AI solution development and deployment with enterprise-grade architecture.",
      features: ["Custom Development", "System Integration", "Scalable Architecture", "Production Deployment"],
      link: "/gen-ai-implementation"
    },
    {
      icon: Search,
      title: "Gen AI Audit",
      description: "Comprehensive evaluation of your existing AI systems, processes, and performance optimization.",
      features: ["Performance Review", "Security Assessment", "Compliance Check", "Optimization Recommendations"],
      link: "/gen-ai-audit"
    },
    {
      icon: GraduationCap,
      title: "Gen AI Workshops",
      description: "Hands-on training programs to upskill your team in generative AI technologies and best practices.",
      features: ["Team Training", "Hands-on Labs", "Best Practices", "Certification Programs"],
      link: "/ai-workshops"
    }
  ];

  return (
    <section id="services" className="py-20 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter">
            Our Generative AI Services
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            From strategy to implementation, we provide comprehensive generative AI solutions 
            tailored to accelerate your business transformation and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-4 group-hover:bg-tech-green transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-tech-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-deep-charcoal mb-3 font-inter">
                  {service.title}
                </h3>
                <p className="text-cool-gray mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                    <span className="text-deep-charcoal font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {service.link ? (
                <Link
                  to={service.link}
                  className="mt-6 text-tech-green font-semibold flex items-center space-x-2 group-hover:text-vibrant-green transition-colors duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <button className="mt-6 text-tech-green font-semibold flex items-center space-x-2 group-hover:text-vibrant-green transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Service Process Flow */}
        <div className="bg-gradient-to-r from-soft-mint/30 to-soft-white p-8 lg:p-12 rounded-2xl mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-deep-charcoal mb-8 text-center font-inter">
            Our Gen AI Development Process
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">Strategy</h4>
              <p className="text-cool-gray text-sm">Define objectives and identify opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">Prototype</h4>
              <p className="text-cool-gray text-sm">Build and validate proof of concept</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">Implement</h4>
              <p className="text-cool-gray text-sm">Develop and deploy full solution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">Learn</h4>
              <p className="text-cool-gray text-sm">Analyze performance and gather insights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">Optimize</h4>
              <p className="text-cool-gray text-sm">Refine and continuously improve</p>
            </div>
          </div>
        </div>

        {/* Code Block Feature */}
        <div className="bg-matte-black rounded-2xl p-8 lg:p-12 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 font-inter">
                See Our Gen AI Solutions in Action
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Experience the power of our generative AI implementations with real-world examples 
                and interactive demonstrations of our custom solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-tech-green text-white px-6 py-3 rounded-lg hover:bg-vibrant-green transition-colors duration-200 font-semibold">
                  View Case Studies
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:border-tech-green hover:text-tech-green transition-colors duration-200 font-semibold">
                  Schedule Demo
                </button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-300">
                <div className="text-blue-400">python</div>
                <div className="text-tech-green">print("Gen AI-powered analytics platform")</div>
                <div className="mt-2">
                  <span className="text-purple-400">user_engagement</span>
                  <span className="text-white"> = </span>
                </div>
                <div className="text-tech-green ml-4">compute_user_engagement()</div>
                <div className="mt-2 text-gray-400"># Boosted engagement by 40%</div>
                <div className="mt-2">
                  <span className="text-purple-400">model_accuracy</span>
                  <span className="text-white"> = </span>
                  <span className="text-gold-highlight">0.95</span>
                </div>
                <div className="text-gray-400"># 95% prediction accuracy achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;