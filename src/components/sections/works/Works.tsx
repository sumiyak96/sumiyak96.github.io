import React, { useState, useEffect } from 'react';
import styles from './Works.module.scss';
import ProjectCard from './card/ProjectCard';
import ProjectDetail from './detail/ProjectDetail'; // ProjectDetailコンポーネントへのパスを修正
import projectsData from '../../../assets/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  bgImage: string;
  detail: {
    // 詳細情報の型定義
  };
}

const Works: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // 選択されたプロジェクトのステート

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project); // プロジェクトがクリックされた時の処理
  };

  return (
    <div id="works" className={styles.works}>
      <h2>My Works</h2>
      <div className={styles.projects}>
        {projects.map(project => (
          <div onClick={() => handleProjectClick(project)} key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              bgImage={project.bgImage}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Works;
