import React from 'react';
import styles from './Header.module.css'; // Importa el archivo CSS que define la fuente personalizada

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <span className={styles.enfa}>D</span>
      <div className={styles.name}>
        hermica
      </div>
    </div>
  );
};

export default Logo;