import React, { useEffect, useState, useRef } from 'react';
import styles from './Skills.module.scss';
import skillsData from '../../../assets/skills.json';

interface Skill {
  name: string;
  level: number; // 10段階の習熟度
}

const Skills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 } // 30%が見えたらトリガー
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div id="skills" className={styles.skills} ref={skillsRef}>
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.skillList}>
        {skillsData.map((skill: Skill, index: number) => (
          <div key={index} className={styles.skill}>
            <span className={styles.skillName}>{skill.name}</span>
            <div className={styles.skillBarContainer}>
              <div
                className={`${styles.skillBar} ${visible ? styles.animate : ''}`}
                style={{ '--skill-level': `${(skill.level / 10) * 100}%` } as React.CSSProperties}
              >
                <div className={styles.skillProgress}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;