import React, { useState } from 'react';
import styles from './Service.module.scss';
import services from '../../../assets/services.json'; // JSONデータをインポート

// サービスデータの型定義
interface ServiceData {
  title: string;
  description: string;
  image: string;
}

const Service: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const handleCardClick = (service: ServiceData) => {
    setSelectedService(service); // モーダルに表示するサービスを設定
  };

  const closeModal = () => {
    setSelectedService(null); // モーダルを閉じる
  };

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
          <div
            key={index}
            className={styles.serviceItem}
            onClick={() => handleCardClick(service)} // カードクリックでモーダルを開く
          >
            <img src={service.image} alt={service.title} className={styles.image} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* モーダル */}
      {selectedService && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <img src={selectedService.image} alt={selectedService.title} className={styles.modalImage} />
            <h3 className={styles.modalTitle}>{selectedService.title}</h3>
            <p className={styles.modalDescription}>{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;