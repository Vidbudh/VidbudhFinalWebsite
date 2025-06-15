import React from 'react';
import { ArrowLeft, GraduationCap, Target, TrendingUp, Users, CheckCircle, Clock, DollarSign, BarChart3, Lightbulb, Shield, Zap, MessageCircle, Calendar, FileText, Award, Code, Settings, Sparkles, Lock, Eye, Scale, Activity, Cpu, Layers, GitBranch, Workflow, Database, Bot, Wand2, Briefcase, FileCode, TestTube, BookOpen, Mail, PieChart, Headphones, ShoppingCart, Search, Palette, Video, Languages, Building, Stethoscope, TrendingDown, Factory, Wrench, FileText as FileIcon, MessageSquare, Megaphone, ClipboardList, HelpCircle, ChevronDown, ChevronUp, Download, ExternalLink, Play, Star, Globe, Newspaper, Timer, Brain, Gauge, FlaskConical, Microscope, LineChart, Cog, AlertTriangle, ThumbsUp, ArrowRight, Rocket, Cloud, Monitor, Smartphone, Tablet, Server, Network, HardDrive, Wifi, RefreshCw, TrendingUp as Growth, Zap as Lightning, ShieldCheck, UserCheck, Headphones as Support, Wrench as Tools, Package, Upload, Download as Deploy, CheckSquare, AlertCircle, Info, Bookmark, Flag, MapPin, Compass, Navigation, Route, Map, Scan, ClipboardCheck, FileSearch, BarChart, TrendingUpIcon, Crosshair, Focus, Radar, ScanLine, SearchCheck, FileBarChart, Presentation, Clipboard, Calculator, Percent, AreaChart, ScatterChart, Trophy, Medal, Target as TargetIcon, Flame, Coffee, Heart, Smile, ThumbsUp as Like, Handshake, PartyPopper, Gamepad2, Puzzle, Lightbulb as Innovation, Beaker, Microscope as Research, Atom, Dna, Zap as Energy, Sparkles as Magic, Wand, Crown, Gem, Diamond, Coins, TrendingUp as Success, BarChart as ChartBar, BarChart4, LineChart as Chart, PieChart as Pie, Activity as Pulse, Wifi as Signal, Radio, Bluetooth, Cast, Share, Link as LinkIcon, Globe as World, Earth, Satellite, Plane, Car, Train, Ship, Bike, Wallet as Walk, Sun as Run, Dumbbell, Gamepad, Joystick, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Spade, Club, Heart as HeartSuit, Diamond as DiamondSuit, Banknote, CreditCard, TrendingDown as TrendingUpDown, Gavel, Scale as Justice, FileCheck, Clipboard as ClipboardIcon, Pill, Syringe, Microscope as MedicalScope, Truck, Package2, Warehouse, ShoppingBag, Store, Megaphone as Marketing, Camera, Film, Mic, Music, Paintbrush, Scissors, Hammer, Drill, Laptop, LampDesk as Desktop, Tablet as TabletDevice, Phone, Smartphone as Mobile } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIWorkshopsPage = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState('general');

  const scrollToContact = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const keyBenefits = [
    {
      icon: Rocket,
      title: "Hands-On Learning",
      description: "Build real AI solutions during workshops with immediate practical application to your work."
    },
    {
      icon: Users,
      title: "Team Transformation",
      description: "Upskill entire teams simultaneously, creating AI-powered collaboration and innovation culture."
    },
    {
      icon: Trophy,
      title: "Immediate Impact",
      description: "Apply learnings instantly to current projects with measurable productivity improvements."
    },
    {
      icon: Crown,
      title: "Expert Mentorship",
      description: "Learn directly from AI practitioners who've built production systems for Fortune 500 companies."
    }
  ];

  const generalWorkshops = [
    {
      icon: Brain,
      title: "AI Fundamentals Bootcamp",
      subtitle: "From Zero to AI Hero in 3 Days",
      description: "Perfect for beginners! Transform your team into AI-literate professionals who can identify opportunities and drive AI initiatives.",
      duration: "3 days intensive",
      format: "In-person or Virtual",
      teamSize: "8-20 participants",
      level: "Beginner",
      highlights: [
        "Build your first chatbot in Day 1",
        "Create AI-powered data analysis tools",
        "Design AI strategy for your business",
        "Hands-on with ChatGPT, Claude, and custom models"
      ],
      realLifeExample: {
        company: "Marketing Agency Team",
        challenge: "Manual content creation taking 40+ hours weekly",
        outcome: "Built AI content pipeline reducing time by 75%, now creating 5x more content",
        quote: "Our team went from AI-curious to AI-powered in just 3 days!"
      },
      price: "Starting at $15,000",
      certification: "AI Fundamentals Certificate"
    },
    {
      icon: Code,
      title: "Prompt Engineering Mastery",
      subtitle: "Unlock AI's Full Potential",
      description: "Master the art and science of prompt engineering to get 10x better results from any AI model.",
      duration: "2 days intensive",
      format: "Hands-on workshop",
      teamSize: "6-15 participants",
      level: "Beginner to Intermediate",
      highlights: [
        "Advanced prompting techniques that work",
        "Build custom AI assistants for your workflows",
        "Chain prompts for complex tasks",
        "Optimize AI outputs for your specific needs"
      ],
      realLifeExample: {
        company: "Legal Firm Paralegals",
        challenge: "Document review taking 8 hours per case",
        outcome: "Developed AI prompts reducing review time to 2 hours with 95% accuracy",
        quote: "We're now the fastest document review team in our firm!"
      },
      price: "Starting at $12,000",
      certification: "Prompt Engineering Expert"
    },
    {
      icon: Workflow,
      title: "AI Workflow Automation",
      subtitle: "Automate Everything with AI",
      description: "Transform repetitive tasks into intelligent automated workflows that learn and improve over time.",
      duration: "4 days",
      format: "Project-based learning",
      teamSize: "5-12 participants",
      level: "Intermediate",
      highlights: [
        "Build end-to-end AI automation pipelines",
        "Integrate AI with existing business tools",
        "Create self-improving workflows",
        "Deploy production-ready automations"
      ],
      realLifeExample: {
        company: "HR Department",
        challenge: "Resume screening taking 20 hours per position",
        outcome: "Automated screening system processing 100+ resumes in 30 minutes",
        quote: "We've transformed from manual processors to strategic talent partners!"
      },
      price: "Starting at $20,000",
      certification: "AI Automation Specialist"
    }
  ];

  const industryWorkshops = [
    {
      icon: Stethoscope,
      title: "Healthcare AI Revolution",
      subtitle: "Transforming Patient Care with AI",
      industry: "Healthcare & Medical",
      description: "🏥 Revolutionize healthcare delivery! Build AI solutions for patient care, medical imaging, and clinical decision support.",
      duration: "4 days intensive",
      teamSize: "8-15 healthcare professionals",
      level: "Healthcare-focused",
      highlights: [
        "AI-powered patient diagnosis assistance",
        "Medical image analysis and interpretation",
        "Clinical workflow automation",
        "HIPAA-compliant AI implementations",
        "Predictive health analytics"
      ],
      realImplementations: [
        {
          title: "AI Radiology Assistant",
          description: "Built system detecting lung abnormalities with 94% accuracy",
          impact: "Reduced diagnosis time by 60%, improved early detection rates"
        },
        {
          title: "Patient Risk Prediction",
          description: "Created early warning system for patient deterioration",
          impact: "Prevented 40+ critical incidents, saved lives and costs"
        },
        {
          title: "Clinical Documentation AI",
          description: "Automated medical note generation from voice recordings",
          impact: "Doctors save 2+ hours daily, focus more on patient care"
        }
      ],
      successStory: {
        hospital: "Regional Medical Center",
        challenge: "Radiologists overwhelmed with 500+ scans daily, 3-day backlog",
        solution: "AI-powered screening system prioritizing urgent cases",
        results: "Zero backlog, 50% faster reporting, 95% accuracy in urgent case detection",
        quote: "Our AI assistant is like having 5 additional expert radiologists!"
      },
      price: "Starting at $25,000",
      certification: "Healthcare AI Specialist"
    },
    {
      icon: Banknote,
      title: "FinTech AI Accelerator",
      subtitle: "Banking & Finance AI Mastery",
      industry: "Banking & Financial Services",
      description: "💰 Dominate financial markets with AI! Build fraud detection, risk assessment, and algorithmic trading systems.",
      duration: "5 days intensive",
      teamSize: "6-12 finance professionals",
      level: "Finance-focused",
      highlights: [
        "Real-time fraud detection systems",
        "AI-powered risk assessment models",
        "Automated trading algorithms",
        "Customer behavior prediction",
        "Regulatory compliance automation"
      ],
      realImplementations: [
        {
          title: "Fraud Detection Engine",
          description: "Real-time transaction monitoring with 99.2% accuracy",
          impact: "Prevented $2.5M in fraudulent transactions monthly"
        },
        {
          title: "Credit Risk AI Model",
          description: "Advanced scoring system using 500+ data points",
          impact: "Reduced default rates by 35%, increased approvals by 20%"
        },
        {
          title: "Robo-Advisor Platform",
          description: "AI-driven investment recommendations for retail clients",
          impact: "Managed $50M+ assets, 15% better returns than benchmarks"
        }
      ],
      successStory: {
        hospital: "Community Bank",
        challenge: "Manual loan processing taking 2 weeks, high default rates",
        solution: "AI-powered underwriting and risk assessment system",
        results: "Loan decisions in 24 hours, 40% reduction in defaults, 60% more applications processed",
        quote: "We've become the fastest, most accurate lender in our region!"
      },
      price: "Starting at $30,000",
      certification: "Financial AI Expert"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce AI Domination",
      subtitle: "Retail & E-commerce AI Mastery",
      industry: "Retail & E-commerce",
      description: "🛒 Skyrocket sales with AI magic! Build recommendation engines, dynamic pricing, and customer experience platforms.",
      duration: "4 days intensive",
      teamSize: "8-16 retail professionals",
      level: "Retail-focused",
      highlights: [
        "Personalized recommendation engines",
        "Dynamic pricing optimization",
        "Inventory demand forecasting",
        "Customer lifetime value prediction",
        "AI-powered visual search"
      ],
      realImplementations: [
        {
          title: "Smart Recommendation System",
          description: "Personalized product suggestions increasing conversions",
          impact: "45% increase in average order value, 30% higher conversion rates"
        },
        {
          title: "Dynamic Pricing Engine",
          description: "Real-time price optimization based on demand and competition",
          impact: "25% profit margin improvement, optimal pricing 24/7"
        },
        {
          title: "Inventory Prophet AI",
          description: "Demand forecasting preventing stockouts and overstock",
          impact: "90% reduction in stockouts, 40% less excess inventory"
        }
      ],
      successStory: {
        hospital: "Fashion E-commerce Platform",
        challenge: "Low conversion rates, high cart abandonment, inventory issues",
        solution: "Complete AI-powered shopping experience with personalization",
        results: "Conversion rates up 65%, cart abandonment down 50%, inventory turnover improved 3x",
        quote: "Our AI knows our customers better than they know themselves!"
      },
      price: "Starting at $22,000",
      certification: "Retail AI Strategist"
    },
    {
      icon: Factory,
      title: "Manufacturing AI Revolution",
      subtitle: "Industry 4.0 AI Implementation",
      industry: "Manufacturing & Industrial",
      description: "🏭 Transform your factory into a smart facility! Build predictive maintenance, quality control, and production optimization systems.",
      duration: "5 days intensive",
      teamSize: "6-14 manufacturing professionals",
      level: "Industrial-focused",
      highlights: [
        "Predictive maintenance systems",
        "AI-powered quality control",
        "Production optimization algorithms",
        "Supply chain intelligence",
        "Safety monitoring and alerts"
      ],
      realImplementations: [
        {
          title: "Predictive Maintenance AI",
          description: "Machine failure prediction using sensor data and AI",
          impact: "70% reduction in unplanned downtime, $500K annual savings"
        },
        {
          title: "Quality Vision System",
          description: "Computer vision detecting defects with 99.5% accuracy",
          impact: "Zero defective products shipped, 80% reduction in quality costs"
        },
        {
          title: "Smart Production Optimizer",
          description: "AI optimizing production schedules and resource allocation",
          impact: "25% increase in throughput, 30% reduction in waste"
        }
      ],
      successStory: {
        hospital: "Automotive Parts Manufacturer",
        challenge: "Frequent machine breakdowns, quality issues, inefficient production",
        solution: "Comprehensive AI system for maintenance, quality, and optimization",
        results: "95% uptime achieved, zero quality complaints, production efficiency up 40%",
        quote: "Our factory runs like clockwork now - AI has revolutionized our operations!"
      },
      price: "Starting at $28,000",
      certification: "Industrial AI Engineer"
    },
    {
      icon: Gavel,
      title: "Legal AI Transformation",
      subtitle: "Law Firm AI Automation",
      industry: "Legal Services",
      description: "⚖️ Revolutionize legal practice! Build document analysis, case research, and contract automation systems.",
      duration: "4 days intensive",
      teamSize: "6-12 legal professionals",
      level: "Legal-focused",
      highlights: [
        "Legal document analysis and review",
        "Case law research automation",
        "Contract generation and analysis",
        "Legal brief writing assistance",
        "Client communication automation"
      ],
      realImplementations: [
        {
          title: "Contract Intelligence System",
          description: "AI analyzing contracts for risks, obligations, and opportunities",
          impact: "Contract review time reduced by 80%, 95% accuracy in risk detection"
        },
        {
          title: "Legal Research AI",
          description: "Automated case law research and precedent analysis",
          impact: "Research time cut from days to hours, comprehensive coverage"
        },
        {
          title: "Document Discovery Engine",
          description: "AI-powered e-discovery for litigation support",
          impact: "90% reduction in document review time, improved case outcomes"
        }
      ],
      successStory: {
        hospital: "Corporate Law Firm",
        challenge: "Junior lawyers spending 60+ hours on document review per case",
        solution: "AI-powered document analysis and legal research platform",
        results: "Document review time reduced to 10 hours, lawyers focus on strategy, client satisfaction up 40%",
        quote: "Our AI legal assistant has transformed us into the most efficient firm in the city!"
      },
      price: "Starting at $24,000",
      certification: "Legal AI Specialist"
    },
    {
      icon: Megaphone,
      title: "Marketing AI Supercharge",
      subtitle: "Digital Marketing AI Mastery",
      industry: "Marketing & Advertising",
      description: "📢 Dominate digital marketing with AI! Build content generation, campaign optimization, and customer targeting systems.",
      duration: "3 days intensive",
      teamSize: "8-18 marketing professionals",
      level: "Marketing-focused",
      highlights: [
        "AI content generation at scale",
        "Automated campaign optimization",
        "Customer segmentation and targeting",
        "Social media automation",
        "Performance prediction and analytics"
      ],
      realImplementations: [
        {
          title: "Content Generation Engine",
          description: "AI creating blog posts, ads, and social content automatically",
          impact: "10x content output, 50% better engagement rates"
        },
        {
          title: "Campaign Optimization AI",
          description: "Real-time ad spend optimization across all channels",
          impact: "40% reduction in cost per acquisition, 60% better ROAS"
        },
        {
          title: "Customer Journey AI",
          description: "Personalized customer experience across all touchpoints",
          impact: "35% increase in conversion rates, 25% higher customer lifetime value"
        }
      ],
      successStory: {
        hospital: "Digital Marketing Agency",
        challenge: "Clients demanding better ROI, team overwhelmed with content creation",
        solution: "AI-powered marketing automation and content generation platform",
        results: "Client ROI improved 150%, team productivity up 300%, won 20 new clients",
        quote: "We've become the AI-powered marketing agency everyone wants to work with!"
      },
      price: "Starting at $18,000",
      certification: "Marketing AI Expert"
    }
  ];

  const learningApproach = [
    {
      icon: Gamepad2,
      title: "Learn by Doing",
      description: "No boring lectures! Every concept is immediately applied to real projects you'll use at work.",
      features: ["Hands-on coding", "Real data projects", "Live problem solving", "Immediate feedback"]
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Work in teams, share ideas, and learn from each other's perspectives and challenges.",
      features: ["Team projects", "Peer learning", "Group problem solving", "Knowledge sharing"]
    },
    {
      icon: Target,
      title: "Business-Focused",
      description: "Every exercise connects directly to business value and real-world applications.",
      features: ["ROI-driven projects", "Business case studies", "Industry examples", "Practical outcomes"]
    },
    {
      icon: Rocket,
      title: "Accelerated Results",
      description: "Intensive format designed to achieve maximum learning in minimum time.",
      features: ["Fast-paced learning", "Immediate application", "Quick wins", "Momentum building"]
    }
  ];

  const workshopFormats = [
    {
      icon: Building,
      title: "On-Site Intensive",
      description: "Immersive in-person experience at your office",
      benefits: ["Team bonding", "Focused environment", "Custom setup", "Immediate application"],
      duration: "2-5 days",
      ideal: "Teams of 8-20 people"
    },
    {
      icon: Monitor,
      title: "Virtual Interactive",
      description: "Engaging online workshops with hands-on activities",
      benefits: ["Global accessibility", "Flexible scheduling", "Cost effective", "Recorded sessions"],
      duration: "2-4 days",
      ideal: "Distributed teams"
    },
    {
      icon: GitBranch,
      title: "Hybrid Experience",
      description: "Best of both worlds with flexible participation",
      benefits: ["Maximum flexibility", "Inclusive participation", "Reduced travel", "Extended learning"],
      duration: "3-6 days",
      ideal: "Mixed teams"
    },
    {
      icon: Calendar,
      title: "Extended Program",
      description: "Spread learning over weeks with ongoing support",
      benefits: ["Deeper learning", "Ongoing mentorship", "Project completion", "Sustained momentum"],
      duration: "4-8 weeks",
      ideal: "Complex transformations"
    }
  ];

  const faqData = [
    {
      question: "Do participants need prior AI or programming experience?",
      answer: "Not at all! Our workshops are designed for all skill levels. We start with fundamentals and build up progressively. Our 'AI Fundamentals Bootcamp' is perfect for complete beginners, while other workshops can be tailored to your team's current knowledge level. We've successfully trained marketing teams, HR professionals, executives, and technical teams with zero AI background."
    },
    {
      question: "What will participants actually build during the workshops?",
      answer: "Participants build real, working AI solutions they can use immediately. Examples include: custom chatbots for customer service, automated content generation systems, data analysis tools, workflow automation, predictive models, and AI-powered dashboards. Every project is designed to solve actual business problems your team faces."
    },
    {
      question: "How quickly will we see results after the workshop?",
      answer: "Most teams start applying their new skills immediately! Within the first week, you'll see productivity improvements. Within a month, most teams report 30-50% efficiency gains in AI-enhanced tasks. Full transformation typically happens within 3-6 months as teams become more confident and creative with AI applications."
    },
    {
      question: "Can you customize workshops for our specific industry or use cases?",
      answer: "Absolutely! We specialize in customizing workshops to your industry, company, and specific challenges. We'll work with you before the workshop to understand your business, review your data and processes, and design exercises using your actual use cases. This ensures maximum relevance and immediate applicability."
    },
    {
      question: "What ongoing support do you provide after the workshop?",
      answer: "We provide 90 days of post-workshop support including: access to our expert team via Slack/email, monthly group Q&A sessions, additional resources and templates, project review and feedback, and optional follow-up sessions. We want to ensure your team's AI transformation is successful long-term."
    },
    {
      question: "How do you measure the success of the workshop?",
      answer: "We track multiple success metrics: immediate skill assessment tests, project completion rates, participant satisfaction scores, 30/60/90-day productivity improvements, and ROI measurements. Most importantly, we measure real business impact - like time saved, processes improved, and new capabilities gained."
    },
    {
      question: "What's the ideal team size for maximum effectiveness?",
      answer: "For most workshops, 8-15 participants is ideal for maximum interaction and hands-on attention. However, we can accommodate larger groups (up to 25) with additional facilitators. Smaller groups (4-8) allow for more personalized attention and deeper customization. We'll recommend the best approach based on your goals."
    },
    {
      question: "Do you provide certificates or credentials?",
      answer: "Yes! All participants receive official certificates upon completion, and we offer specialized certifications for advanced workshops. These credentials are recognized in the industry and can be added to LinkedIn profiles. We also provide detailed skill assessments and learning portfolios that participants can use for career advancement."
    }
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
              to="/" 
              className="inline-flex items-center space-x-2 text-tech-green hover:text-vibrant-green transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Services</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-tech-green font-semibold text-lg">Hands-On AI Training</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
                AI Workshops
                <span className="block text-tech-green">Transform Your Team into AI Powerhouses!</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                🚀 Ready to supercharge your team with AI superpowers? Our hands-on workshops transform 
                complete beginners into AI-wielding professionals in just days! Build real solutions, 
                solve actual problems, and watch productivity soar!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Launch Your AI Journey!</span>
                </Link>
                <button 
                  onClick={() => document.getElementById('workshop-programs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
                >
                  Explore Programs
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-green">500+</div>
                  <div className="text-cool-gray">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-green">98%</div>
                  <div className="text-cool-gray">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-green">3x</div>
                  <div className="text-cool-gray">Productivity Boost</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Workshop Training Session"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Hands-On Learning</div>
                      <div className="text-cool-gray text-sm">Build Real Solutions</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold-highlight rounded-lg flex items-center justify-center">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Expert Mentors</div>
                      <div className="text-cool-gray text-sm">Industry Leaders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Why Our AI Workshops Are Game-Changers! 🎯
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              We don't just teach AI theory - we transform teams into AI-powered productivity machines 
              through immersive, hands-on experiences that deliver immediate results!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-tech-green" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                  {benefit.title}
                </h3>
                <p className="text-cool-gray">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Programs */}
      <section id="workshop-programs" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              🔥 Choose Your AI Adventure!
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Whether you want general AI skills or industry-specific expertise, 
              we have the perfect workshop to transform your team into AI champions!
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <button
                onClick={() => setActiveTab('general')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'general'
                    ? 'bg-tech-green text-white'
                    : 'text-cool-gray hover:text-tech-green'
                }`}
              >
                General AI Skills
              </button>
              <button
                onClick={() => setActiveTab('industry')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'industry'
                    ? 'bg-tech-green text-white'
                    : 'text-cool-gray hover:text-tech-green'
                }`}
              >
                Industry-Specific
              </button>
            </div>
          </div>

          {/* General Workshops */}
          {activeTab === 'general' && (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {generalWorkshops.map((program, index) => (
                <div
                  key={program.title}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-tech-green to-vibrant-green p-6 text-white">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-inter">{program.title}</h3>
                        <p className="text-green-100 font-medium">{program.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">Duration</span>
                        </div>
                        <div className="text-green-100">{program.duration}</div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">Team Size</span>
                        </div>
                        <div className="text-green-100">{program.teamSize}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-lg text-deep-charcoal mb-6 font-medium">
                      {program.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-deep-charcoal mb-3 flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-tech-green" />
                        <span>What You'll Build:</span>
                      </h4>
                      <div className="space-y-2">
                        {program.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0 mt-0.5" />
                            <span className="text-cool-gray text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Real Life Example */}
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-blue-600 mb-2 flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Real Success Story:</span>
                      </h4>
                      <div className="text-sm text-blue-700 mb-2">
                        <strong>{program.realLifeExample.company}:</strong> {program.realLifeExample.challenge}
                      </div>
                      <div className="text-sm text-blue-700 mb-2">
                        <strong>Result:</strong> {program.realLifeExample.outcome}
                      </div>
                      <div className="text-sm text-blue-800 italic">
                        "{program.realLifeExample.quote}"
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-tech-green">{program.price}</div>
                        <div className="text-sm text-cool-gray">{program.certification}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        program.level === 'Beginner' ? 'bg-green-100 text-green-600' :
                        program.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                        program.level === 'Beginner to Intermediate' ? 'bg-blue-100 text-blue-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {program.level}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Industry-Specific Workshops */}
          {activeTab === 'industry' && (
            <div className="space-y-12">
              {industryWorkshops.map((program, index) => (
                <div
                  key={program.title}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-tech-green to-vibrant-green p-8 text-white">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                            <program.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="text-green-100 font-medium mb-1">{program.industry}</div>
                            <h3 className="text-3xl font-bold font-inter">{program.title}</h3>
                            <p className="text-green-100 text-lg font-medium">{program.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-green-100 text-lg">{program.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-5 h-5" />
                            <span className="font-medium">Duration</span>
                          </div>
                          <div className="text-green-100">{program.duration}</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Users className="w-5 h-5" />
                            <span className="font-medium">Team Size</span>
                          </div>
                          <div className="text-green-100">{program.teamSize}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <div className="mb-8">
                          <h4 className="font-bold text-deep-charcoal mb-4 flex items-center space-x-2 text-xl">
                            <Rocket className="w-5 h-5 text-tech-green" />
                            <span>What You'll Master:</span>
                          </h4>
                          <div className="space-y-3">
                            {program.highlights.map((highlight) => (
                              <div key={highlight} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-tech-green flex-shrink-0 mt-0.5" />
                                <span className="text-cool-gray">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Real Implementations */}
                        <div className="mb-8">
                          <h4 className="font-bold text-deep-charcoal mb-4 flex items-center space-x-2 text-xl">
                            <Star className="w-5 h-5 text-tech-green" />
                            <span>Real AI Solutions You'll Build:</span>
                          </h4>
                          <div className="space-y-4">
                            {program.realImplementations.map((impl, idx) => (
                              <div key={idx} className="bg-soft-mint p-4 rounded-lg">
                                <h5 className="font-bold text-tech-green mb-2">{impl.title}</h5>
                                <p className="text-deep-charcoal mb-2">{impl.description}</p>
                                <p className="text-cool-gray text-sm italic">Impact: {impl.impact}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        {/* Success Story */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                          <h4 className="font-bold text-deep-charcoal mb-4 flex items-center space-x-2 text-xl">
                            <Trophy className="w-5 h-5 text-tech-green" />
                            <span>Transformation Success Story</span>
                          </h4>
                          
                          <div className="mb-4">
                            <h5 className="font-bold text-blue-600 text-lg">{program.successStory.hospital}</h5>
                            <div className="bg-red-50 p-3 rounded-lg mt-3">
                              <p className="text-red-700"><strong>Challenge:</strong> {program.successStory.challenge}</p>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className="bg-green-50 p-3 rounded-lg">
                              <p className="text-green-700"><strong>AI Solution:</strong> {program.successStory.solution}</p>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-blue-700"><strong>Amazing Results:</strong> {program.successStory.results}</p>
                            </div>
                          </div>
                          
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <MessageSquare className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                              <div>
                                <p className="text-purple-700 italic mb-2">"{program.successStory.quote}"</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="mt-8 text-center">
                          <div className="text-3xl font-bold text-tech-green mb-2">{program.price}</div>
                          <div className="text-cool-gray mb-4">{program.certification}</div>
                          <div className="bg-tech-green text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                            {program.level}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Our Secret Sauce: How We Make Learning Addictive! 🎮
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Forget boring lectures and theoretical concepts. Our workshops are designed 
              like engaging games where every challenge solved unlocks new AI superpowers!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningApproach.map((approach, index) => (
              <div
                key={approach.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-tech-green rounded-xl flex items-center justify-center mb-6">
                  <approach.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                  {approach.title}
                </h3>
                <p className="text-cool-gray mb-4">
                  {approach.description}
                </p>
                <div className="space-y-2">
                  {approach.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                      <span className="text-cool-gray text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Formats */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Choose Your Learning Adventure! 🎯
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Whether your team is all in one place or spread across the globe, 
              we have the perfect format to maximize learning and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopFormats.map((format, index) => (
              <div
                key={format.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-6">
                  <format.icon className="w-8 h-8 text-tech-green" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                  {format.title}
                </h3>
                <p className="text-cool-gray mb-4">
                  {format.description}
                </p>
                <div className="mb-4">
                  <div className="text-sm text-tech-green font-medium mb-2">Duration: {format.duration}</div>
                  <div className="text-sm text-cool-gray mb-4">Ideal for: {format.ideal}</div>
                </div>
                <div className="space-y-2">
                  {format.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                      <span className="text-cool-gray text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <HelpCircle className="w-8 h-8 text-tech-green" />
              <h2 className="text-4xl font-bold text-deep-charcoal font-inter">
                Got Questions? We've Got Answers! 💡
              </h2>
            </div>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Everything you need to know about transforming your team into AI champions 
              through our hands-on workshop experiences.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-soft-mint/20 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-bold text-deep-charcoal pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-tech-green flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-tech-green flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-light-gray pt-6">
                        <p className="text-cool-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-tech-green to-vibrant-green p-8 lg:p-12 rounded-2xl text-white text-center">
            <h2 className="text-4xl font-bold mb-6 font-inter">
              🚀 Ready to Launch Your Team into the AI Future?
            </h2>
            <p className="text-green-100 mb-8 text-xl max-w-3xl mx-auto">
              Don't let your competition get ahead! Transform your team into AI-powered 
              productivity machines. The future belongs to AI-augmented teams - join them today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-tech-green px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Workshop Now!</span>
              </Link>
              <button
                onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m excited about your AI Workshops! I\'d like to transform my team into AI powerhouses. Can we discuss the perfect program for us?', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-tech-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp for Instant Info!</span>
              </button>
            </div>
            
            <div className="mt-8 text-green-100">
              <p className="text-lg font-medium">🎁 Early Bird Special: Book this month and save 20%!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWorkshopsPage;