import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Cnergee',
    period: 'July 2024 - December 2024',
    location: 'Nagpur, India',
    achievements: [
      'Built ML-based churn prediction system analyzing 50K+ interactions, achieving 86% accuracy',
      'Developed automated data pipeline reducing analysis time by 64%',
      'Generated $170K in savings through retention strategies',
      'Fine-tuned BERT model improving accuracy by 27%',
    ],
  },
  {
    id: 2,
    role: 'Freelance AI/ML Engineer',
    company: 'Self-Employed',
    period: '2025 - Present',
    location: 'Remote',
    achievements: [
      'Delivering AI automation projects for clients worldwide',
      'Building custom LLM solutions with RAG architecture',
      'Implementing MLOps pipelines reducing deployment time by 80%',
      'Developing production-grade fraud detection systems',
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-primary)03 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full section-padding">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <div className="overflow-hidden">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-semibold transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <span className="text-gradient">Experience</span>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div
            className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'linear-gradient(to bottom, var(--color-primary), var(--color-accent-purple), var(--color-primary))',
              transitionDelay: '200ms',
            }}
          />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-6 transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${400 + index * 200}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
                onMouseEnter={() => setHoveredExp(exp.id)}
                onMouseLeave={() => setHoveredExp(null)}
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full z-10 transition-all duration-300 ${
                    hoveredExp === exp.id ? 'scale-150' : 'scale-100'
                  }`}
                  style={{
                    background: 'var(--color-primary)',
                    border: '2px solid var(--color-bg)',
                    boxShadow: hoveredExp === exp.id
                      ? '0 0 20px var(--color-primary)'
                      : '0 0 10px var(--color-primary)',
                  }}
                />

                {/* Content Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[46%] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div
                    className="p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'var(--color-card)',
                      border: '1px solid',
                      borderColor: hoveredExp === exp.id ? 'var(--color-primary)' : 'var(--color-border)',
                      transform: hoveredExp === exp.id ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: hoveredExp === exp.id
                        ? '0 12px 30px -10px rgba(99, 102, 241, 0.2)'
                        : 'none',
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ background: 'var(--color-primary)15' }}
                      >
                        <Briefcase size={18} style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <div>
                        <h3 className="text-base font-medium">{exp.role}</h3>
                        <p style={{ color: 'var(--color-primary)' }} className="text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-1.5 text-sm text-muted-foreground"
                        >
                          <ChevronRight
                            size={14}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: 'var(--color-primary)' }}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[46%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
