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
          src={`${import.meta.env.BASE_URL}images/hyundai-mufasa-kitsunedp.jpg`}
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
              <div className={styles.badge}>ПОРТФОЛИО · КОНЦЕПТ ЛЕНДИНГА</div>
              <h1 className={styles.title}>Hyundai Mufasa</h1>
              <p className={styles.description}>
                Демонстрация интерфейса автомобильного сайта. Неофициальный учебный концепт: без продажи автомобилей, реальной записи и подтверждённых технических характеристик.
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
                Демо тест-драйва
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
                <div className={styles.statNumber}>React</div>
                <div className={styles.statLabel}>компоненты</div>
              </div>
              <div>
                <div className={styles.statNumber}>TypeScript</div>
                <div className={styles.statLabel}>типизация</div>
              </div>
              <div>
                <div className={styles.statNumber}>Motion</div>
                <div className={styles.statLabel}>анимации</div>
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
