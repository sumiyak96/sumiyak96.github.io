import React from 'react';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  bgImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, bgImage }) => {
  return (
    <div className={styles.projectCard} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
