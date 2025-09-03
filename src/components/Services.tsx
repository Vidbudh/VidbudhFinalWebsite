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
  return (
    <section id="services" className="py-20 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter">
            Our Services
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Comprehensive AI and product leadership solutions to transform your business 
            and drive measurable results across all aspects of your organization.
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Gen AI Services Card */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-slide-up">
            <div className="mb-6">
              <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-4 group-hover:bg-tech-green transition-colors duration-300">
                <Brain className="w-8 h-8 text-tech-green group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-deep-charcoal mb-3 font-inter">
                Generative AI Services
              </h3>
              <p className="text-xl text-cool-gray mb-6">
                Comprehensive generative AI solutions from strategy to implementation, 
                designed to transform your business with cutting-edge AI technology.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">AI Strategy & Planning</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">Proof of Concept Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">Full-Scale Implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">AI System Audits</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">Training & Workshops</span>
              </div>
            </div>

            <div className="bg-soft-mint p-4 rounded-lg mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-green mb-1">50+</div>
                <div className="text-cool-gray text-sm">Gen AI Projects Delivered</div>
              </div>
            </div>

            <Link
              to="/gen-ai-services"
              className="w-full bg-tech-green text-white px-6 py-3 rounded-lg hover:bg-vibrant-green transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <span>Explore Gen AI Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* CPO Services Card */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-6">
              <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-4 group-hover:bg-tech-green transition-colors duration-300">
                <BarChart3 className="w-8 h-8 text-tech-green group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-deep-charcoal mb-3 font-inter">
                CPO Services
              </h3>
              <p className="text-xl text-cool-gray mb-6">
                Expert Chief Product Officer services to drive product excellence, 
                strategic growth, and market leadership for your organization.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">Embedded CPO (Full-time)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">Fractional CPO (Part-time)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">Product Strategy & Roadmaps</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">Team Leadership & Mentoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                <span className="text-deep-charcoal font-medium">Go-to-Market Strategy</span>
              </div>
            </div>

            <div className="bg-soft-mint p-4 rounded-lg mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-green mb-1">15+</div>
                <div className="text-cool-gray text-sm">Years Product Leadership</div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('cpo-services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-tech-green text-white px-6 py-3 rounded-lg hover:bg-vibrant-green transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <span>Explore CPO Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
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
    </section>
  );
};

export default Services;