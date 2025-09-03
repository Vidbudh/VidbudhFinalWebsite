import React from 'react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Briefcase,
  UserCheck,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  Lightbulb,
  Zap,
  Settings,
  Eye,
  Scale,
  Activity,
  Headphones,
  Building,
  Globe,
  Rocket,
  Brain,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CPOServices = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter">
            CPO Services
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Comprehensive Chief Product Officer services to drive product excellence, 
            strategic growth, and market leadership for your organization.
          </p>
        </div>

        {/* Two Main Service Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Embedded CPO Card */}
          <div id="embedded-cpo" className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-tech-green rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-deep-charcoal font-inter">
                  Embedded CPO
                </h3>
                <p className="text-tech-green font-semibold">Full-Time Leadership</p>
              </div>
            </div>
            
            <p className="text-xl text-cool-gray mb-8 leading-relaxed">
              Full-time, dedicated Chief Product Officer integrated into your team, 
              providing hands-on leadership and strategic direction for maximum impact.
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold text-deep-charcoal mb-4">What's Included:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Full-time dedicated CPO (40+ hours/week)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Direct team leadership and mentoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Strategic planning and execution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Product roadmap development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Market analysis and competitive intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">User experience optimization</span>
                </div>
              </div>
            </div>

            <div className="bg-soft-mint p-6 rounded-xl mb-6">
              <h5 className="font-bold text-tech-green mb-2 flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Best For:</span>
              </h5>
              <p className="text-deep-charcoal">
                Growing companies ready to scale their product organization 
                with dedicated leadership and hands-on execution.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-tech-green">40+</div>
                <div className="text-cool-gray text-sm">Hours/Week</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tech-green">100%</div>
                <div className="text-cool-gray text-sm">Dedicated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tech-green">24/7</div>
                <div className="text-cool-gray text-sm">Availability</div>
              </div>
            </div>
          </div>

          {/* Fractional CPO Card */}
          <div id="fractional-cpo" className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-tech-green rounded-xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-deep-charcoal font-inter">
                  Fractional CPO
                </h3>
                <p className="text-tech-green font-semibold">Strategic Guidance</p>
              </div>
            </div>
            
            <p className="text-xl text-cool-gray mb-8 leading-relaxed">
              Part-time strategic product leadership, perfect for startups and 
              companies needing expert guidance without full-time commitment.
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold text-deep-charcoal mb-4">What's Included:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Flexible hours (10-20 hours/week)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Strategic planning and direction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Product roadmap guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Go-to-market strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Team mentoring and coaching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-tech-green" />
                  <span className="text-deep-charcoal">Product operations optimization</span>
                </div>
              </div>
            </div>

            <div className="bg-soft-mint p-6 rounded-xl mb-6">
              <h5 className="font-bold text-tech-green mb-2 flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Best For:</span>
              </h5>
              <p className="text-deep-charcoal">
                Startups and growing companies that need senior product expertise 
                and strategic guidance at a cost-effective investment level.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-tech-green">10-20</div>
                <div className="text-cool-gray text-sm">Hours/Week</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tech-green">50%</div>
                <div className="text-cool-gray text-sm">Cost Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tech-green">Expert</div>
                <div className="text-cool-gray text-sm">Level</div>
              </div>
            </div>
          </div>
        </div>

        {/* CPO Value Proposition */}
        <div className="bg-gradient-to-r from-soft-mint/30 to-soft-white p-8 lg:p-12 rounded-2xl mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-deep-charcoal mb-8 text-center font-inter">
            Why Choose Our CPO Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">Proven Expertise</h4>
              <p className="text-cool-gray text-sm">15+ years of product leadership across industries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">Results Driven</h4>
              <p className="text-cool-gray text-sm">Track record of successful product launches and growth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">Team Leadership</h4>
              <p className="text-cool-gray text-sm">Expert in building and scaling high-performing product teams</p>
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-deep-charcoal mb-8 text-center font-inter">
            Expected Outcomes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-green mb-2">40%</div>
              <div className="text-cool-gray">Faster Time to Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-green mb-2">60%</div>
              <div className="text-cool-gray">Improved User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-green mb-2">3x</div>
              <div className="text-cool-gray">Product Team Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-green mb-2">25%</div>
              <div className="text-cool-gray">Revenue Growth</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-deep-charcoal mb-4 font-inter">
            Ready to Accelerate Your Product Success?
          </h3>
          <p className="text-xl text-cool-gray mb-8 max-w-2xl mx-auto">
            Let's discuss how our CPO services can help you build better products, 
            faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>
            <button
              onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m interested in CPO Services. I\'d like to discuss my product needs.', '_blank')}
              className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPOServices;