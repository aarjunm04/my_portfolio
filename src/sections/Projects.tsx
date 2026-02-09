import { useEffect, useRef, useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Job Application Agent',
    description:
      'Autonomous multi-agent system that intelligently discovers, analyzes, and applies to jobs across 20+ platforms. Features RAG-based resume matching and automated tracking.',
    image: '/project-ai-agent.jpg',
    tech: ['n8n', 'LangChain', 'OpenAI', 'FAISS', 'Docker', 'Playwright'],
    metrics: ['500+ jobs/day', '91% accuracy', '90% automation'],
    github: 'https://github.com/aarjunm04/AI_Job_Automation_Agent',
    demo: null,
  },
  {
    id: 2,
    title: 'Credit Card Fraud Detection',
    description:
      'Production-grade fraud detection using ensemble ML and BERT-based transformers. Achieves 99.7% accuracy with explainable AI and real-time scoring.',
    image: '/project-fraud-detection.jpg',
    tech: ['XGBoost', 'BERT', 'PyTorch', 'Hugging Face', 'Streamlit', 'GAN'],
    metrics: ['284K records', '99.7% accuracy', '0.98 F1-score'],
    github: 'https://github.com/aarjunm04/Creditcard_Fraud_Detection',
    demo: null,
  },
  {
    id: 3,
    title: 'Wildlife Movement Prediction',
    description:
      'Deep learning system for predicting animal trajectories using GRU/LSTM networks. Processes 150K+ GPS coordinates with 86% accuracy for conservation.',
    image: '/project-wildlife.jpg',
    tech: ['GRU', 'LSTM', 'Transformers', 'TensorFlow', 'Movebank API'],
    metrics: ['150K+ coordinates', '86% accuracy', '72h forecast'],
    github: 'https://github.com/aarjunm04/Wildlife_Movement_Prediction_Using_Deep_Learning',
    demo: null,
  },
  {
    id: 4,
    title: 'Outreach Engine n8n',
    description:
      'Automated outreach system built with n8n workflow automation. Streamlines communication workflows and integrates with multiple platforms for efficient engagement.',
    image: '/project-mlops.jpg',
    tech: ['n8n', 'Node.js', 'APIs', 'Automation', 'Workflows'],
    metrics: ['Auto workflows', 'Multi-platform', 'Real-time'],
    github: 'https://github.com/aarjunm04/Outreach_Engine_n8n',
    demo: null,
  },
  {
    id: 5,
    title: 'Webhook Repository',
    description:
      'Custom webhook handling system for receiving and processing external events. Built for seamless integration with third-party services and automation pipelines.',
    image: '/project-ai-agent.jpg',
    tech: ['Python', 'Flask', 'Webhooks', 'API', 'Integration'],
    metrics: ['Event handling', 'API integration', 'Automation'],
    github: 'https://github.com/aarjunm04/webhook-repo',
    demo: null,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, var(--color-accent-purple)05 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full section-padding">
        {/* Section Title */}
        <div className="mb-10">
          <div className="overflow-hidden">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-semibold transition-all duration-600 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p
            className={`mt-3 text-muted-foreground text-base max-w-xl transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: '150ms', transitionTimingFunction: 'var(--ease-smooth)' }}
          >
            A collection of my end-to-end AI/ML projects, from research to production-ready solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 60%)',
                  }}
                />

                {/* Metrics Overlay */}
                <div
                  className={`absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 transition-all duration-400 ${
                    hoveredProject === project.id
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-3 opacity-0'
                  }`}
                >
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full"
                      style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag">+{project.tech.length - 4}</span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[var(--color-primary)] transition-all duration-300 group/link"
                  >
                    <Github size={16} />
                    <span>Code</span>
                    <ArrowUpRight
                      size={12}
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
