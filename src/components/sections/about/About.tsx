import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import styles from './About.module.scss';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const paragraphs = [
    '金融系システムの開発・運用に携わる企業で、サーバーサイドを中心としたエンジニアリングに従事していました。2024年に会社を退職し、夢だった世界一周旅をスタート。',
    '旅を通して多様な価値観に触れ、人との関わりや自然の中での気づきが、柔軟な視点と寄り添う姿勢を育ててくれました。',
    '技術だけでなく、想いに伴走できるITパートナーとして、信頼を大切に仕事をしています。',
  ];

  const [visibleParagraphs, setVisibleParagraphs] = useState<number>(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleParagraphs((prev) => {
          if (prev < paragraphs.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 1000); // 各段落が表示される間隔
    }
  }, [inView, paragraphs.length]);

  useEffect(() => {
    if (inView && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
      );
    }
  }, [inView]);

  return (
    <div id="about" className={styles.about} ref={ref}>
      <div className={styles.title}>
        <h2>About Me</h2>
      </div>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.text}>
          <h2 className={styles.name}>Sumiya Kurihara</h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              style={{
                opacity: index < visibleParagraphs ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.image}>
          <img src="/about_me_himalaya.png" alt="プロフィール画像" />
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate('/world-tour')}
          className={styles.buttonToWorldTour}
        >
          世界一周へ
        </button>
      </div>
    </div>
  );
};

export default About;