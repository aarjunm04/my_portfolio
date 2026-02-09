import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Twitter } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Neural Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = window.innerWidth < 768 ? 20 : 40;
    const connectionDistance = 120;
    const maxConnections = 3;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance
      if (frameCount % 2 === 0) {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-bg') + '10' || 'rgba(5, 5, 8, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach((particle, i) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'var(--color-primary)';
          ctx.globalAlpha = 0.6;
          ctx.fill();
          ctx.globalAlpha = 1;

          // Draw connections
          let connections = 0;
          for (let j = i + 1; j < particles.length; j++) {
            if (connections >= maxConnections) break;

            const dx = particles[j].x - particle.x;
            const dy = particles[j].y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              connections++;
              const opacity = (1 - distance / connectionDistance) * 0.25;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = 'var(--color-primary)';
              ctx.globalAlpha = opacity;
              ctx.lineWidth = 0.5;
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Trigger load animations
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="neural-canvas"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1.5s ease' }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, var(--color-primary)08 0%, transparent 50%)',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease 0.3s',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, var(--color-accent-purple)06 0%, transparent 40%)',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease 0.5s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full section-padding py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 transition-all duration-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
              style={{
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                transitionDelay: '200ms',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">Open to opportunities</span>
            </div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight transition-all duration-700 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <span className="text-gradient">AI/ML</span> Engineer
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className={`text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 transition-all duration-600 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              Recent Computer Science graduate passionate about building intelligent systems. 
              Specializing in LLMs, GenAI, and scalable machine learning solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 transition-all duration-500 ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              style={{ transitionDelay: '600ms', transitionTimingFunction: 'var(--ease-elastic)' }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                View Projects
                <ExternalLink size={16} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`flex gap-4 justify-center lg:justify-start transition-all duration-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '700ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              {[
                { icon: Github, href: 'https://github.com/aarjunm04', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://x.com/aarjunm04', label: 'Twitter' },
                { icon: Mail, href: 'mailto:aarjun.mahule23@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-[var(--color-primary)] hover:bg-[var(--color-card)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-800 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
              style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              {/* Image Container */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden group">
                {/* Glow Effect */}
                <div
                  className="absolute -inset-3 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent-purple))',
                  }}
                />

                {/* Image */}
                <img
                  src="/hero-profile.jpg"
                  alt="Aarjun Mahule"
                  className="relative w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                />

                {/* Border */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ border: '1px solid var(--color-border)' }}
                />
              </div>

              {/* Floating Stats */}
              <div
                className={`absolute -bottom-3 -left-3 glass px-3 py-2 rounded-lg transition-all duration-600 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <div className="text-xl font-bold text-gradient">5+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>

              <div
                className={`absolute -top-3 -right-3 glass px-3 py-2 rounded-lg transition-all duration-600 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: '900ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <div className="text-xl font-bold text-gradient">Fresher</div>
                <div className="text-xs text-muted-foreground">2025 Grad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
