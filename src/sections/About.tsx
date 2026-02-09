import { useEffect, useRef, useState } from 'react';
import { Code2, Brain, Database, Server, Workflow, Layers } from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: ['Python', 'C++'],
  },
  {
    name: 'AI/ML',
    icon: Brain,
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Hugging Face'],
  },
  {
    name: 'GenAI/LLM',
    icon: Layers,
    skills: ['LangChain', 'CrewAI', 'BERT', 'GPT', 'RAG', 'Vector DBs'],
  },
  {
    name: 'MLOps',
    icon: Server,
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'MLflow', 'Prometheus'],
  },
  {
    name: 'Data',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Snowflake', 'PySpark'],
  },
  {
    name: 'Automation',
    icon: Workflow,
    skills: ['n8n', 'Playwright', 'Airflow', 'Kafka'],
  },
];

const stats = [
  { value: 5, suffix: '+', label: 'Projects Built' },
  { value: 6, suffix: '', label: 'Certifications' },
  { value: 500, suffix: 'K+', label: 'Records Processed' },
  { value: 99, suffix: '%+', label: 'Model Accuracy' },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

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

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters(stats.map((stat) => Math.floor(stat.value * easeOut)));

      if (step >= steps) {
        clearInterval(timer);
        setCounters(stats.map((stat) => stat.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, var(--color-primary)05 0%, transparent 50%)',
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
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Bio & Stats */}
          <div>
            {/* Bio */}
            <div
              className={`space-y-4 text-muted-foreground text-base leading-relaxed mb-8 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '150ms', transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              <p>
                I'm a recent Computer Science graduate (2025) with a passion for building intelligent systems. 
                My journey spans from classical machine learning to cutting-edge LLMs and GenAI applications.
              </p>
              <p>
                With hands-on experience in MLOps, data engineering, and AI automation, I bridge the gap
                between research and production-ready solutions. I've built 5 end-to-end projects processing 
                hundreds of thousands of records, created autonomous AI agents, and deployed models that drive real impact.
              </p>
              <p>
                I'm eager to contribute my skills to innovative teams and continue learning in the rapidly evolving AI landscape.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl"
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient mb-0.5">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-elastic)' }}
          >
            <div className="space-y-3">
              {skillCategories.map((category, catIndex) => (
                <div
                  key={category.name}
                  className={`p-4 rounded-xl transition-all duration-400 hover:scale-[1.01] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    transitionDelay: `${400 + catIndex * 80}ms`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="p-1.5 rounded-lg"
                      style={{ background: 'var(--color-primary)15' }}
                    >
                      <category.icon size={16} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <h3 className="text-sm font-medium">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-item text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
