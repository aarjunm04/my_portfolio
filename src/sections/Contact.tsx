import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Twitter, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'aarjun.mahule23@gmail.com', href: 'mailto:aarjun.mahule23@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91-9921652687', href: 'tel:+919921652687' },
    { icon: MapPin, label: 'Location', value: 'Nagpur, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aarjunm04', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/aarjunm04', label: 'Twitter' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-primary)08 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full section-padding">
        {/* CTA Headline */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 transition-all duration-600 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-elastic)' }}
          >
            Let's Build Something{' '}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p
            className={`text-muted-foreground text-base max-w-lg mx-auto transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-smooth)' }}
          >
            Have a project in mind? Let's discuss how AI can transform your ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h3 className="text-xl font-medium mb-6">Get In Touch</h3>
            
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group"
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div 
                    className="p-2 rounded-lg transition-colors duration-300"
                    style={{ background: 'var(--color-primary)15' }}
                  >
                    <info.icon size={18} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-muted-foreground group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Follow me on</p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-muted-foreground hover:text-[var(--color-primary)] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div 
              className="mt-6 p-3 rounded-xl"
              style={{
                background: 'var(--color-primary)10',
                border: '1px solid var(--color-primary)30',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm">Available for freelance & full-time roles</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-muted-foreground text-sm mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-300"
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-muted-foreground text-sm mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-300"
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-muted-foreground text-sm mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-300 resize-none"
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full btn-primary flex items-center justify-center gap-2 ${
                  submitted ? 'bg-green-600' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
