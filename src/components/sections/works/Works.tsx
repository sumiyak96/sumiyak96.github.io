import React, { useState, useEffect, useRef } from 'react';
import styles from './Works.module.scss';
import projectsData from '../../../assets/projects.json';

interface Link {
  name: string;
  url: string;
}
interface Project {
  id: number;
  title: string;
  description: string;
  bgImage: string;
  detail: string;
  images: string[];
  techStack: string[];
  links: Link[];
}

const Works: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setMainImage(project.images[0]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setMainImage(null);
  };

  useEffect(() => {
    projectRefs.current.forEach((item) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (item) observer.observe(item);
    });
  }, []);

  return (
    <section id="works" className={styles.works}>
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.grid}>
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={styles.card}
            ref={(el) => (projectRefs.current[index] = el!)}
            style={{
              opacity: 0,
              transform: 'translateY(50px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
            onClick={() => handleProjectClick(project)}
          >
            <div
              className={styles.bgImage}
              style={{
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
              }}
            >
              <div className={styles.overlay}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.left}>
                <div className={styles.mainImage}>
                  <img src={mainImage || ''} alt="Main" />
                </div>
                <div className={styles.subImages}>
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Sub ${index}`}
                      className={styles.subImage}
                      onClick={() => setMainImage(image)}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.description}>
                  <p>{selectedProject.detail}</p>
                </div>
                <div className={styles.techStack}>
                  <h4>技術スタック</h4>
                  <div className={styles.techStackLabels}>
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className={styles.techLabel}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.links}>
                  <h4>リンク</h4>
                  {selectedProject.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;