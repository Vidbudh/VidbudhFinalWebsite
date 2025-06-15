import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // WhatsApp number with country code (India: +91)
  const WHATSAPP_NUMBER = '919840139501';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm interested in your Gen AI services.

Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}

Message: ${formData.message}

I'd like to discuss how you can help with my Gen AI project.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      description: "Send us your questions anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(+91) 98401 39501",
      description: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Chennai, India & Dubai, UAE",
      description: "Schedule an office visit"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-soft-white to-soft-mint/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Ready to transform your business with generative AI? Get in touch with our experts 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-deep-charcoal mb-6 font-inter">
                Send us a Message
              </h3>
              
              {isSubmitted && (
                <div className="bg-soft-mint p-4 rounded-lg mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-tech-green" />
                  <span className="text-tech-green font-medium">
                    Thank you! Opening WhatsApp to continue the conversation.
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
                    placeholder="Tell us about your Gen AI project and requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-tech-green text-white px-8 py-4 rounded-lg hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-deep-charcoal mb-1 font-inter">
                        {info.title}
                      </h4>
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

              {/* WhatsApp Direct Contact */}
              <div className="bg-gradient-to-r from-tech-green to-vibrant-green p-6 rounded-xl text-white">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 font-inter">
                      WhatsApp Us
                    </h4>
                    <p className="text-green-100 font-semibold mb-1">
                      (+91) 98401 39501
                    </p>
                    <p className="text-green-100 mb-4">
                      Quick response guaranteed
                    </p>
                    <button
                      onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                      className="bg-white text-tech-green px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-sm"
                    >
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-deep-charcoal mb-4 font-inter">
                  Why Choose Us for Your Next Gen AI Project?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-tech-green" />
                    <span className="text-cool-gray">Fast response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-tech-green" />
                    <span className="text-cool-gray">Free initial consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span className="text-cool-gray">Proven track record of success</span>
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
  );
};

export default Contact;