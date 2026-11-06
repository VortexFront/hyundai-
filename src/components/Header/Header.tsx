import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Обзор', 'Характеристики', 'Ассистенты', 'Контакты'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={styles.header}
    >
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.logo}
          >
            <div className={styles.logoIcon}>
              <span>H</span>
            </div>
            <div className={styles.logoText}>
              <div className={styles.logoBrand}>HYUNDAI</div>
              <div className={styles.logoModel}>MUFASA</div>
            </div>
          </motion.div>

          <nav className={styles.nav} aria-label="Основная навигация">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={styles.navLink}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className={styles.ctaButton}
              href='#контакты'
            >
              Демо тест-драйва
            </motion.a>
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className={styles.mobileMenuButton}
            onKeyDown={(event) => { if (event.key === 'Escape') setIsMenuOpen(false); }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav id="mobile-navigation" aria-label="Мобильная навигация" onKeyDown={(event) => { if (event.key === 'Escape') setIsMenuOpen(false); }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={styles.mobileLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#контакты" className={styles.mobileCtaButton} onClick={() => setIsMenuOpen(false)}>Демо тест-драйва</a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
