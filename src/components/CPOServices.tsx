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
  const services = [
    {
      icon: Target,
      title: "Product Strategy & Vision",
      description: "Define product roadmaps, market positioning, and strategic direction for sustainable growth.",
      features: ["Market Analysis", "Competitive Intelligence", "Product Roadmapping", "Vision Development"],
      link: "/product-strategy"
    },
    {
      icon: Users,
      title: "User Experience & Design",
      description: "Create user-centered products with exceptional design and seamless user experiences.",
      features: ["User Research", "UX/UI Design", "Usability Testing", "Design Systems"],
      link: "/ux-design"
    },
    {
      icon: BarChart3,
      title: "Product Analytics & Insights",
      description: "Data-driven product decisions with comprehensive analytics and performance tracking.",
      features: ["Product Metrics", "User Behavior Analysis", "A/B Testing", "Performance Dashboards"],
      link: "/product-analytics"
    },
    {
      icon: Rocket,
      title: "Go-to-Market Strategy",
      description: "Launch products successfully with comprehensive go-to-market planning and execution.",
      features: ["Launch Planning", "Market Entry Strategy", "Pricing Strategy", "Channel Development"],
      link: "/go-to-market"
    },
    {
      icon: Settings,
      title: "Product Operations",
      description: "Streamline product development processes and optimize team productivity.",
      features: ["Process Optimization", "Team Coordination", "Tool Integration", "Workflow Automation"],
      link: "/product-operations"
    }
  ];

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

        {/* Embedded CPO Section */}
        <section id="embedded-cpo" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-deep-charcoal mb-4 font-inter">
              Embedded CPO
            </h3>
            <p className="text-lg text-cool-gray max-w-2xl mx-auto">
              Full-time, dedicated Chief Product Officer integrated into your team, 
              providing hands-on leadership and strategic direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-4 group-hover:bg-tech-green transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-tech-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                    {service.title}
                  </h4>
                  <p className="text-cool-gray mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                      <span className="text-deep-charcoal font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-deep-charcoal mb-4 font-inter">
                  What's Included
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span>Full-time dedicated CPO (40+ hours/week)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span>Direct team leadership and mentoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span>Strategic planning and execution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span>Product roadmap development</span>
                  </div>
                </div>
              </div>
              <div className="bg-soft-mint p-6 rounded-xl">
                <h5 className="font-bold text-tech-green mb-2">Best For:</h5>
                <p className="text-deep-charcoal">
                  Growing companies ready to scale their product organization 
                  with dedicated leadership and hands-on execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fractional CPO Section */}
        <section id="fractional-cpo" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-deep-charcoal mb-4 font-inter">
              Fractional CPO
            </h3>
            <p className="text-lg text-cool-gray max-w-2xl mx-auto">
              Part-time strategic product leadership, perfect for startups and 
              companies needing expert guidance without full-time commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(3, 5).map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-4 group-hover:bg-tech-green transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-tech-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                    {service.title}
                  </h4>
                  <p className="text-cool-gray mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                      <span className="text-deep-charcoal font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-deep-charcoal mb-2">Flexible Hours</h5>
                <p className="text-cool-gray text-sm">10-20 hours per week based on your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-deep-charcoal mb-2">Cost Effective</h5>
                <p className="text-cool-gray text-sm">Senior expertise at a fraction of full-time cost</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-deep-charcoal mb-2">Strategic Focus</h5>
                <p className="text-cool-gray text-sm">High-level strategy and key decision making</p>
              </div>
            </div>
          </div>
        </section>

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
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg animate-fade-in">
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
        <div className="text-center mt-16 animate-fade-in">
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