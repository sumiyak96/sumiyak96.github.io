import React, { useState, useEffect, useRef } from 'react';
import styles from './Service.module.scss';
import services from '../../../assets/services.json';

interface ServiceData {
  title: string;
  description: string;
  image: string;
}

const Service: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const serviceRefs = useRef<HTMLDivElement[]>([]);

  const handleCardClick = (service: ServiceData) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    serviceRefs.current.forEach((item) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (item) observer.observe(item);
    });
  }, []);

  return (
    <div id="services" className={styles.service}>
      <div className={styles.header}>
        <h2>Our Services</h2>
      </div>

      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.serviceItem}
            ref={(el) => (serviceRefs.current[index] = el!)}
            style={{ opacity: 0, transform: 'translateY(50px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
            onClick={() => handleCardClick(service)}
          >
            <img src={service.image} alt={service.title} className={styles.image} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

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