import React from 'react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
    return (
      <section id="contact" className={styles.contact}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.description}>
          お問い合わせは以下の方法でお気軽にご連絡ください。
        </p>
        <div className={styles.contactMethods}>
          <div className={styles.contactItem}>
            <h3 className={styles.contactTitle}>メールアドレス</h3>
            <p className={styles.contactText}>sumiyakurihara.sk1996@gmail.com</p>
          </div>
          <div className={styles.contactItem}>
            <h3 className={styles.contactTitle}>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/sumiya-kurihara-a5b451167"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              LinkedInプロフィールを見る
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;