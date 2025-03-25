import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [withBackground, setWithBackground] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // タイトルを中央に大きく表示
    tl.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.5, y: '-50%' }, // 初期位置を中央に
      { opacity: 1, scale: 1, y: '0%', duration: 1, ease: 'power4.out' }
    )
      // サブタイトルをふわっと出現
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        "+=0.5"
      )
      // 背景を切り替え
      .add(() => setWithBackground(true), "+=0.5")
  }, []);

  return (
    <div
      id="top"
      ref={bgRef}
      className={`${styles.heroSection} ${withBackground ? styles.withBackground : ''}`}
    >
      <div className={styles.textContainer}>
        <div ref={titleRef} className={styles.title}>
          世界を旅する、<br/>フリーランスエンジニア。
        </div>
        <div ref={subtitleRef} className={styles.subtitle}>
          ITで誰かの“前に進む”を支えたい。<br/>場所に縛られず、想いに寄り添って。
        </div>
      </div>
    </div>
  );
};

export default HeroSection;