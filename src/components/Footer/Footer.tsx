import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import styles from './Footer.module.css';


export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <span>H</span>
              </div>
              <div className={styles.logoText}>
                <div className={styles.logoBrand}>HYUNDAI</div>
                <div className={styles.logoModel}>MUFASA</div>
              </div>
            </div>
            <p className={styles.tagline}>
              Новый уровень комфорта и технологий
            </p>
          </div>

          <div className={styles.section}>
            <h4>Компания</h4>
            <ul className={styles.linkList}>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Карьера</a></li>
              <li><a href="#">Пресс-центр</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Поддержка</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Сервис</a></li>
              <li><a href="#">Гарантия</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Социальные сети</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Youtube size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 Hyundai Mufasa. Все права защищены.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}