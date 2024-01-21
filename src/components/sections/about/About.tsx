import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>こんにちは、私の名前は〇〇です。フリーランスのエンジニアとして、様々なプロジェクトに携わってきました。このポートフォリオサイトでは、私のスキル、経験、および過去のプロジェクトを紹介しています。</p>
      {/* 追加で詳細な自己紹介やプロフィール画像等があればここに追加 */}
    </div>
  );
}

export default About;
