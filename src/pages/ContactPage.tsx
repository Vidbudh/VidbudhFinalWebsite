import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  CheckCircle,
  Clock,
  Calendar,
  Send,
  User,
  Building,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'AI Strategy Consultation'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // WhatsApp number with country code (India: +91)
  const WHATSAPP_NUMBER = '919840139501';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm interested in booking a free consultation for ${formData.service}.

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.company ? `Company: ${formData.company}` : ''}

Message: ${formData.message}

I'd like to schedule a consultation to discuss my AI needs.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      phone: '', 
      message: '', 
      service: 'AI Strategy Consultation' 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "director@vidbudh.com",
      description: "Send us your questions anytime",
      action: () => window.open('mailto:director@vidbudh.com', '_blank')
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(+91) 98401 39501",
      description: "Mon-Fri 9AM-6PM IST",
      action: () => window.open('tel:+919840139501', '_blank')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      details: "(+91) 98401 39501",
      description: "Quick response guaranteed",
      action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Chennai, India & Dubai, UAE",
      description: "Schedule an office visit",
      action: null
    }
  ];

  const services = [
    'AI Strategy Consultation',
    'Gen AI Proof of Concept',
    'Gen AI Implementation',
    'Gen AI Audit',
    'Gen AI Workshops',
    'Other'
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
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
              Get in Touch
              <span className="block text-tech-green">Let's Build Something Amazing</span>
            </h1>
            
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Ready to transform your business with generative AI? Schedule a free consultation 
              with our experts and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-deep-charcoal mb-6 font-inter">
                  Book Your Free Consultation
                </h2>
                
                {isSubmitted && (
                  <div className="bg-soft-mint p-4 rounded-lg mb-6 flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-tech-green" />
                    <span className="text-tech-green font-medium">
                      Thank you! Opening WhatsApp to schedule your consultation.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-deep-charcoal font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-green focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-deep-charcoal font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-green focus:border-transparent transition-all duration-200"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-deep-charcoal font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-green focus:border-transparent transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-deep-charcoal font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-green focus:border-transparent transition-all duration-200"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-deep-charcoal font-medium mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-green focus:border-transparent transition-all duration-200"
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-deep-charcoal font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-green focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your AI project and requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-tech-green text-white px-8 py-4 rounded-lg hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Free Consultation</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-deep-charcoal mb-6 font-inter">
                    Contact Information
                  </h2>
                  <p className="text-xl text-cool-gray mb-8">
                    Get in touch with our AI experts. We're here to help you transform 
                    your business with cutting-edge generative AI solutions.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={info.action || undefined}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-deep-charcoal mb-1 font-inter">
                          {info.title}
                        </h3>
                        <p className="text-tech-green font-semibold mb-1">
                          {info.details}
                        </p>
                        <p className="text-cool-gray">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* What to Expect */}
                <div className="bg-gradient-to-br from-tech-green to-vibrant-green p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-6 font-inter">
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-200" />
                      <span>60-minute free consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-200" />
                      <span>Custom AI strategy recommendations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-200" />
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-green-200" />
                      <span>Direct access to AI experts</span>
                    </div>
                  </div>
                </div>

                {/* Office Image */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Our Office"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-tech-green/20 flex items-end">
                    <div className="bg-white/95 p-4 m-4 rounded-lg">
                      <p className="text-deep-charcoal font-semibold">
                        Visit our offices in Chennai & Dubai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;