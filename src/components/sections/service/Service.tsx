import React from 'react';
import styles from './Service.module.scss';

const services = [
  {
    title: 'Web Development',
    description: 'モダンなウェブアプリケーションの設計・開発を行います。',
    image: '/assets/project/pj1.png',
  },
  {
    title: 'Mobile App Development',
    description: 'iOSやAndroid向けのモバイルアプリケーションを構築します。',
    image: '/assets/project/pj2.png',
  },
  {
    title: 'UI/UX Design',
    description: 'ユーザー体験を重視したデザインを提供します。',
    image: '/assets/project/pj3.png',
  },
  {
    title: 'Consulting',
    description: 'IT戦略や技術選定のアドバイスを行います。',
    image: '/assets/project/pj1.png',
  },
];

const Service: React.FC = () => {
  return (
    <div id="services" className={styles.service}>
      {/* セクションタイトル */}
      <div className={styles.header}>
        <h2 className={styles.title}>Services</h2>
        <p className={styles.description}>
          私が提供するサービスの一覧です。お客様のニーズに合わせたソリューションを提供します。
        </p>
      </div>
      {/* サービスリスト */}
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <img src={service.image} alt={service.title} className={styles.image} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;