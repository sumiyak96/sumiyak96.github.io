import React, { useState, useEffect } from 'react';
import styles from './Skills.module.scss';
import skillsData from '../../../assets/skills.json';

interface Skill {
  name: string;
  level: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <div id="skills" className={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <strong>{skill.name}</strong>
            <span> - {skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
