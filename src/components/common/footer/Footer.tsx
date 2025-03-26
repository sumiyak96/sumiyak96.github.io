import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Sumiya Kurihara. All rights reserved.</p>
      {/* ここに追加の情報やリンクを配置できます */}
    </footer>
  );
}

export default Footer;
