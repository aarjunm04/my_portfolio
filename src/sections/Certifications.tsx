import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'Hugging Face Agents Course',
    provider: 'Hugging Face',
    icon: 'HF',
    color: '#ffbd4a',
    link: 'https://huggingface.co/learn/agents-course/unit0/introduction',
  },
  {
    id: 2,
    name: 'Building RAG Agents with LLMs',
    provider: 'NVIDIA DLI',
    icon: 'NV',
    color: '#76b900',
    link: 'https://learn.nvidia.com/courses/course?course_id=course-v1:DLI+S-FX-15+V1&unit=block-v1:DLI+S-FX-15+V1+type@vertical+block@e2b8cfd88f2a45c89ef908f7929c266c',
  },
  {
    id: 3,
    name: 'IBM AI Workflow: Enterprise Model Deployment',
    provider: 'Coursera',
    icon: 'IBM',
    color: '#054ada',
    link: 'https://www.coursera.org/learn/ibm-ai-workflow-machine-learning-model-deployment/home/module/1',
  },
  {
    id: 4,
    name: 'Python Bootcamp: Beginner to Advanced',
    provider: 'Udemy',
    icon: 'PY',
    color: '#3776ab',
    link: 'https://www.udemy.com/course/complete-python-bootcamp/learn/lecture/20385935?start=0#overview',
  },
  {
    id: 5,
    name: 'Data Science Bootcamp 2025',
    provider: '365 Careers (Udemy)',
    icon: 'DS',
    color: '#6366f1',
    link: 'https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/learn/lecture/47643937?start=0#overview',
  },
  {
    id: 6,
    name: '5-Day Gen AI Intensive',
    provider: 'Kaggle',
    icon: 'KG',
    color: '#20beff',
    link: 'https://www.kaggle.com/learn-guide/5-day-agents',
  },
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, var(--color-accent-purple)05 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full section-padding">
        {/* Section Title */}
        <div className="mb-10">
          <div className="overflow-hidden">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-semibold transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <span className="text-gradient">Certifications</span>
            </h2>
          </div>
          <p
            className={`mt-3 text-muted-foreground text-base max-w-xl transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: '150ms', transitionTimingFunction: 'var(--ease-smooth)' }}
          >
            Continuous learning in cutting-edge AI/ML technologies from industry leaders.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cert-card group transition-all duration-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${100 + index * 80}ms`,
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-400 group-hover:rotate-12"
                  style={{ background: `${cert.color}15` }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: cert.color }}
                  >
                    {cert.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium group-hover:text-gradient transition-all duration-300 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">{cert.provider}</p>
                </div>

                {/* Link Icon */}
                <ExternalLink
                  size={14}
                  className="text-muted-foreground group-hover:text-[var(--color-primary)] transition-all duration-300 flex-shrink-0 opacity-0 group-hover:opacity-100"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-8 flex items-center justify-center gap-2 text-muted-foreground transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '600ms', transitionTimingFunction: 'var(--ease-smooth)' }}
        >
          <Award size={16} />
          <span className="text-sm">Always learning, always growing</span>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
