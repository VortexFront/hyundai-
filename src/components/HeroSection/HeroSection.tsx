import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import styles from "./HeroSection.module.css";



export function HeroSection() {
  return (
    <section id="обзор" className={styles.hero}>
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={styles.background}
      >
        <img
          src="https://motor.ru/imgs/2023/04/14/13/5873057/3e873d51effb6d321e824e95d220e2e3d8cf3b72.jpg"
          alt="Hyundai Mufasa"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </motion.div>

      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className={styles.badge}>НОВЫЙ 2025</div>
              <h1 className={styles.title}>Hyundai Mufasa</h1>
              <p className={styles.description}>
                Мощь, элегантность и технологии будущего в одном автомобиле. Откройте для себя новый уровень комфорта и производительности.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={styles.buttons}
            >
              <button 
                className={styles.primaryButton}
                onClick={() => document.getElementById('контакты')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Забронировать
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={() => document.getElementById('характеристики')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className={styles.stats}
            >
              <div>
                <div className={styles.statNumber}>280</div>
                <div className={styles.statLabel}>л.с.</div>
              </div>
              <div>
                <div className={styles.statNumber}>6.8с</div>
                <div className={styles.statLabel}>0-100 км/ч</div>
              </div>
              <div>
                <div className={styles.statNumber}>AWD</div>
                <div className={styles.statLabel}>Полный привод</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className={styles.scrollIndicator}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className={styles.scrollIcon} size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}