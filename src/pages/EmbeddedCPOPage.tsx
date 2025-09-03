import React from 'react';
import { 
  ArrowLeft, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Clock, 
  DollarSign,
  BarChart3,
  Lightbulb,
  Zap,
  MessageCircle,
  Calendar,
  Award,
  Rocket,
  UserCheck,
  Building,
  Globe,
  Brain,
  Settings,
  Eye,
  Scale,
  Activity,
  Headphones,
  Briefcase,
  ArrowRight,
  Star,
  Cpu,
  FileText,
  Layers,
  Workflow,
  AlertTriangle,
  ThumbsUp,
  Gauge,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EmbeddedCPOPage = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyMePoints = [
    {
      icon: Brain,
      title: "AI-First Expertise",
      description: "I specialise in shaping and scaling <strong className='text-tech-green'>AI and GenAI-first products</strong> — ensuring they're not just technically sound, but <strong className='text-tech-green'>usable, ethical, and commercially successful</strong>."
    },
    {
      icon: Award,
      title: "Innovation Track Record",
      description: "At <strong className='text-tech-green'>Accenture</strong>, I led a product IP group that filed <strong className='text-gold-highlight'>13 patents</strong> across <strong className='text-tech-green'>AI, automation, and enterprise platforms</strong>. I know how to turn ideas into <strong className='text-tech-green'>defensible assets</strong> and <strong className='text-tech-green'>scalable offerings</strong>."
    },
    {
      icon: Users,
      title: "Building AI-First Product Teams",
      description: "I help organisations design and grow <strong className='text-tech-green'>AI-first product functions</strong>, equipping them with the <strong className='text-tech-green'>latest tools, platforms, and techniques</strong> so they can <strong className='text-tech-green'>accelerate delivery</strong> and <strong className='text-tech-green'>stay competitive</strong>."
    },
    {
      icon: Building,
      title: "Proven Corporate Leadership",
      description: "With <strong className='text-gold-highlight'>23 years</strong> at <strong className='text-tech-green'>Accenture, Cognizant, and Beroe</strong>, I bring the rigour of <strong className='text-tech-green'>enterprise-scale leadership</strong> with the agility of a <strong className='text-tech-green'>startup founder</strong>."
    },
    {
      icon: DollarSign,
      title: "Monetisation Mindset",
      description: "I connect <strong className='text-tech-green'>technology to revenue</strong>, designing <strong className='text-tech-green'>pricing, packaging, and go-to-market strategies</strong> that turn <strong className='text-tech-green'>innovation into business value</strong>."
    },
    {
      icon: Settings,
      title: "Hands-On Execution",
      description: "I don't just advise — I <strong className='text-tech-green'>run the function</strong>, <strong className='text-tech-green'>mentor teams</strong>, and <strong className='text-tech-green'>deliver outcomes</strong>."
    }
  ];

  const frameworkPhases = [
    {
      phase: "Stabilise",
      icon: Shield,
      color: "bg-red-500",
      title: "Crisis & Continuity",
      description: "Bring me in when leadership gaps or turbulence risk slowing the organisation down.",
      points: [
        "Crisis management → Market shifts, leadership churn, or underperforming teams can make product spend balloon while value creation stalls. I step in to diagnose quickly, reset focus, and align delivery with business outcomes — ensuring AI projects are grounded in results, not hype.",
        "Covering leadership voids → A departing CPO, maternity/sabbatical leave, or a delayed permanent hire can leave product strategy vulnerable. I provide continuity, keep teams moving, and safeguard ongoing AI or digital initiatives until the right leader is secured.",
        "Protecting morale → Teams often lose energy when direction is unclear. I anchor them through transparency and alignment, building confidence that their work is meaningful — even while adopting new tools like AI into workflows."
      ]
    },
    {
      phase: "Transform",
      icon: Workflow,
      color: "bg-yellow-500",
      title: "Change & Scaling",
      description: "Call me in when your organisation is moving through major shifts and needs clarity.",
      points: [
        "M&A and restructuring → Align people, processes, and products so integrations strengthen instead of fragmenting.",
        "Scaling → Design structures and rhythms that support growth, embedding AI-first capability from day one.",
        "Evolving leadership needs → Bridge current gaps while defining what your permanent CPO profile should look like.",
        "Building foundations → Establish product and design functions that can scale sustainably, with AI-readiness built in."
      ]
    },
    {
      phase: "Grow",
      icon: TrendingUp,
      color: "bg-green-500",
      title: "Acceleration & Value Creation",
      description: "Engage me when stability is secured and the focus shifts to growth.",
      points: [
        "Freeing up founder/CEO bandwidth → Founders often shoulder product leadership longer than they should. I take ownership so they can focus on fundraising, partnerships, or market expansion, while knowing AI adoption and monetisation are handled with discipline.",
        "Developing leaders → I mentor rising product managers and heads, giving them the skills and confidence to lead independently and integrate AI into their team's roadmaps.",
        "Driving Innovation → Beyond stability, I bring a builder's mindset. Having filed 13 patents in AI and automation, I know how to take raw ideas and shape them into scalable, defensible products that generate lasting business value.",
        "AI-first product functions → I set up product organisations that are equipped with the latest AI tools and techniques — from experimentation platforms to automation workflows — so your teams deliver faster, smarter, and with greater impact.",
        "AI-first & monetisation strategies → I help turn innovation into revenue by shaping pricing, packaging, and AI-enabled features and data products that customers value and pay for.",
        "High-stakes initiatives → For critical launches, market entries, or enterprise pilots, I step in with focused ownership. My role is to deliver outcomes quickly while keeping core teams on track with their existing priorities."
      ]
    }
  ];

  const proofOfImpact = [
    {
      title: "Post-layoff recovery",
      description: "A SaaS scaleup had just gone through layoffs, leaving product teams adrift and delivery slipping. I stepped in to reset priorities, rebuild trust, and install clearer product rhythms. Within three months, release delays were cut by 30%, and the board regained confidence in the roadmap.",
      result: "30% reduction in release delays"
    },
    {
      title: "AI-driven compliance & revenue",
      description: "A healthcare RCM firm was under pressure to comply with strict PHI regulations while exploring AI opportunities. I guided them in implementing AI-led anonymisation and data handling practices. This not only reduced compliance risk but also created a new revenue stream by productising anonymised data services.",
      result: "New revenue stream created"
    },
    {
      title: "Investor confidence in a transition phase",
      description: "A logistics company preparing for funding had strong tech but a fragmented product story. I worked with leadership to unify the vision, sharpen the roadmap, and articulate AI-driven efficiencies in investor pitches. The result: they closed their round at a 15% higher valuation than initially projected.",
      result: "15% higher valuation achieved"
    },
    {
      title: "Enterprise-scale product innovation",
      description: "At Accenture, I led an IP-driven product group that filed 13 patents across AI, automation, and enterprise platforms. By transforming client-specific solutions into reusable digital assets, we unlocked multi-million-dollar annual revenue streams for the firm while accelerating delivery across global accounts.",
      result: "Multi-million-dollar revenue streams"
    }
  ];

  const wontDoList = [
    "Act as a long-term cultural figurehead — that's for your permanent leadership.",
    "Serve as a political mediator for entrenched conflicts.",
    "Replace engineering or CTO leadership — I collaborate, I don't substitute.",
    "Stay indefinitely — my role is transitional, with a clear exit once goals are achieved.",
    "Focus only on hours or deliverables — my value lies in outcomes, not checklists."
  ];

  return (
    <div className="min-h-screen bg-soft-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-soft-white to-soft-mint/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-green/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-mint/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-8">
            <Link 
              to="/cpo-services" 
              className="inline-flex items-center space-x-2 text-tech-green hover:text-vibrant-green transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to CPO Services</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-tech-green font-semibold text-lg">Full-Time Leadership</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
                Embedded CPO
                <span className="block text-tech-green">AI-First Product Leadership</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                An Embedded CPO is a full-time, time-bound executive role where I step directly into your leadership team. 
                I take ownership of product strategy and day-to-day execution during times of transition, crisis, or rapid growth. 
                Unlike consultants who advise from the outside, I work as a fully integrated leader — managing teams, aligning 
                business and product goals, and engaging directly with boards, investors, and customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Discussion</span>
                </button>
                <button 
                  onClick={() => document.getElementById('why-me')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Embedded CPO Leadership"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">AI-First</div>
                      <div className="text-cool-gray text-sm">Product Leadership</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold-highlight rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">13 Patents</div>
                      <div className="text-cool-gray text-sm">AI Innovation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="why-me" className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Why Me
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              My structured approach ensures immediate continuity, smoother transitions, and long-term acceleration, 
              tailored to your unique stage with AI-first expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyMePoints.map((point, index) => (
              <div
                key={point.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-6">
                  <point.icon className="w-8 h-8 text-tech-green" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                  {point.title}
                </h3>
                <p className="text-cool-gray">
                  <span dangerouslySetInnerHTML={{ __html: point.description }} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Stabilise / Transform / Grow Framework
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              My structured approach ensures immediate continuity, smoother transitions, 
              and long-term acceleration, tailored to your unique stage.
            </p>
          </div>

          <div className="space-y-12">
            {frameworkPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-left`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-deep-charcoal font-inter">
                        {phase.phase}: {phase.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xl text-cool-gray mb-8">
                    {phase.description}
                  </p>
                  
                  <div className="space-y-4">
                    {phase.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="bg-white p-6 rounded-xl shadow-lg">
                        <p className="text-cool-gray leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-in-right`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3184360' : 
                        index === 1 ? '3184465' : '3183150'
                      }/pexels-photo-${
                        index === 0 ? '3184360' : 
                        index === 1 ? '3184465' : '3183150'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={phase.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Impact */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Proof of Impact
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Real results from embedded CPO engagements across different industries and scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {proofOfImpact.map((proof, index) => (
              <div
                key={proof.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-deep-charcoal mb-4 font-inter">
                  {proof.title}
                </h3>
                <p className="text-cool-gray mb-6 leading-relaxed">
                  {proof.description}
                </p>
                <div className="bg-soft-mint p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-tech-green" />
                    <span className="text-tech-green font-bold">{proof.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Won't Do */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              What I Won't Do
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Clear boundaries ensure focused, effective engagement with realistic expectations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
              <div className="space-y-4">
                {wontDoList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-cool-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-tech-green to-vibrant-green p-8 lg:p-12 rounded-2xl text-white text-center">
            <h2 className="text-4xl font-bold mb-6 font-inter">
              Ready to Build an AI-First Product Organisation?
            </h2>
            <p className="text-green-100 mb-8 text-xl max-w-3xl mx-auto">
              If your organisation is facing disruption, transformation, or the challenge of scaling AI-first products, 
              I embed within your team to deliver stability now — while building an AI-first product organisation 
              equipped with the latest tools and techniques to accelerate growth, sharpen monetisation, and create lasting resilience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-tech-green px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Discussion</span>
              </Link>
              <button
                onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m interested in Embedded CPO services. I\'d like to discuss my organisation\'s needs.', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-tech-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmbeddedCPOPage;