import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div id="about" className={styles.about}>
      {/* タイトル */}
      <div className={styles.title}>
        <h2>About Me</h2>
      </div>
      {/* コンテンツ */}
      <div className={styles.content}>
        {/* 左側: 自己紹介文 */}
        <div className={styles.text}>
          <h2 className={styles.name}>Sumiya Kurihara</h2>
          <p>
            金融系システムの開発・運用に携わる企業で、サーバーサイドを中心としたエンジニアリングに従事していました。
            2024年に会社を退職し、現在は世界一周をしながらフリーランスエンジニアとして活動しています。
          </p>
          <p>
            旅を通して多様な価値観に触れ、人との関わりや自然の中での気づきが、柔軟な視点と寄り添う姿勢を育ててくれました。
          </p>
          <p>
            技術だけでなく、想いに伴走できるITパートナーとして、信頼を大切に仕事をしています。
          </p>
        </div>
        {/* 右側: 自分の画像 */}
        <div className={styles.image}>
          <img src="/about_me_himalaya.png" alt="プロフィール画像" />
        </div>
      </div>
    </div>
  );
};

export default About;