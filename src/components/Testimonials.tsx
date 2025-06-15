import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      position: "CTO",
      image: "https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=300",
      testimonial: "Vidbudh Gen AI Studio transformed our data analytics completely. Their custom generative AI models increased our prediction accuracy by 85% and reduced processing time by 60%. Exceptional expertise and support.",
      rating: 5,
      results: "85% accuracy increase"
    },
    {
      position: "Head of Innovation",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300",
      testimonial: "The team's deep understanding of generative AI and ability to translate complex requirements into practical solutions is outstanding. They delivered our NLP system ahead of schedule with remarkable results.",
      rating: 5,
      results: "40% faster delivery"
    },
    {
      position: "VP of Digital Strategy",
      image: "https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=300",
      testimonial: "Working with Vidbudh Gen AI Studio was a game-changer. Their generative AI consulting helped us define our strategy and their custom training programs upskilled our entire team. Highly recommended!",
      rating: 5,
      results: "200% team productivity"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-gold-highlight fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter">
            What Our Clients Say
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            their experience working with Vidbudh Gen AI Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-tech-green" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-cool-gray mb-6 text-lg leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              {/* Results Badge */}
              <div className="bg-soft-mint p-3 rounded-lg mb-6">
                <div className="text-tech-green font-bold text-center">
                  {testimonial.results}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.position}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-deep-charcoal text-lg">
                    {testimonial.position}
                  </div>
                  <div className="text-tech-green text-sm font-medium">
                    Fortune 500 Company
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-tech-green to-vibrant-green p-8 lg:p-12 rounded-2xl text-white animate-fade-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-green-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Gen AI Projects</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-deep-charcoal mb-4 font-inter">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-cool-gray mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our generative AI solutions.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold text-lg"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;