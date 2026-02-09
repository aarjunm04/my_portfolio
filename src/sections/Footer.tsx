import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aarjunm04', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/aarjunm04', label: 'Twitter' },
    { icon: Mail, href: 'mailto:aarjun.mahule23@gmail.com', label: 'Email' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative py-12 overflow-hidden"
    >
      {/* Top Border */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] transition-all duration-600 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)',
          transformOrigin: 'center',
        }}
      />

      <div className="relative z-10 w-full section-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div
            className={`transition-all duration-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '100ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold hover:scale-105 transition-transform duration-300 inline-block"
            >
              <span className="text-gradient">AM</span>
            </a>
            <p className="mt-3 text-muted-foreground text-sm">
              AI/ML Engineer crafting intelligent systems for real-world impact.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '150ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h4 className="text-sm font-medium mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h4 className="text-sm font-medium mb-3">Contact</h4>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li>
                <a
                  href="mailto:aarjun.mahule23@gmail.com"
                  className="hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  aarjun.mahule23@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919921652687"
                  className="hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  +91-9921652687
                </a>
              </li>
              <li>Nagpur, India</li>
            </ul>
          </div>

          {/* Social */}
          <div
            className={`transition-all duration-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '250ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <h4 className="text-sm font-medium mb-3">Follow Me</h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300"
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-6 border-t transition-all duration-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ 
            borderColor: 'var(--color-border)',
            transitionDelay: '300ms', 
            transitionTimingFunction: 'var(--ease-smooth)' 
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs">
              © 2025 Aarjun Mahule. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-muted-foreground hover:text-[var(--color-primary)] transition-all duration-300 group"
            >
              <span className="text-xs">Back to top</span>
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
