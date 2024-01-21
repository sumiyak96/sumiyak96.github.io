import React from 'react';
import styles from './ProjectDetail.module.scss';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    bgImage: string;
    detail: {
      // 詳細情報の型定義
    };
  };
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className={styles.projectDetail}>
      <div className={styles.content}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* その他の詳細情報 */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ProjectDetail;
