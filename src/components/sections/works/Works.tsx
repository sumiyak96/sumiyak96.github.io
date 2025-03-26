import React, { useState } from 'react';
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
  links: Link[]; // リンクの配列形式
}

const Works: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setMainImage(project.images[0]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setMainImage(null);
  };

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <section id="works" className={styles.works}>
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => handleProjectClick(project)}
          >
            <div className={styles.overlay}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <button className={styles.closeButton} onClick={closeModal}>×</button>
            </div>
            <div className={styles.modalBody}>
              {/* 左側: メイン画像とサブ画像 */}
              <div className={styles.left}>
                {/* メイン画像 */}
                <div className={styles.mainImage}>
                  <img src={mainImage || ""} alt="Main" />
                </div>
                {/* サブ画像 */}
                <div className={styles.subImages}>
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Sub ${index}`}
                      className={styles.subImage}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              </div>

              {/* 右側: 概要、技術スタック、リンク */}
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