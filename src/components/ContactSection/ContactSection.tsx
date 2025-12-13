import { motion } from 'motion/react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import styles from './ContactSection.module.css';

interface Dealership {
  city: string;
  address: string;
  metro: string;
}

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const dealerships: Dealership[] = [
    {
      city: 'Москва',
      address: 'Кутузовский проспект, 12',
      metro: 'Киевская',
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский проспект, 85',
      metro: 'Маяковская',
    },
    {
      city: 'Казань',
      address: 'ул. Баумана, 45',
      metro: 'Кремлёвская',
    },
  ];

  return (
    <section id="контакты" ref={ref} className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Наши дилеры</h2>
          <p className={styles.subtitle}>
            Посетите ближайший салон для тест-драйва
          </p>
        </motion.div>

        <div className={styles.dealershipsGrid}>
          {dealerships.map((dealer, index) => (
            <motion.div
              key={dealer.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={styles.dealerCard}
            >
              <div className={styles.dealerHeader}>
                <div className={styles.dealerIconWrapper}>
                  <MapPin className={styles.dealerIcon} size={20} />
                </div>
                <h4 className={styles.dealerCity}>{dealer.city}</h4>
              </div>
              <p className={styles.dealerAddress}>{dealer.address}</p>
              <p className={styles.dealerMetro}>м. {dealer.metro}</p>
              <button className={styles.dealerButton}>
                Записаться на тест-драйв
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.additionalGrid}
        >
          <div className={styles.testDriveCard}>
            <div className={styles.testDriveHeader}>
              <div className={styles.testDriveIconWrapper}>
                <Calendar className={styles.testDriveIcon} size={24} />
              </div>
              <h3 className={styles.testDriveTitle}>Запишитесь на тест-драйв</h3>
            </div>
            <p className={styles.testDriveDescription}>
              Протестируйте Hyundai Mufasa на дороге и почувствуйте все его возможности. Запись онлайн или по телефону.
            </p>
            <button className={styles.testDriveButton}>
              Записаться сейчас
            </button>
          </div>

          <div className={styles.offersCard}>
            <div className={styles.offersHeader}>
              <div className={styles.offersIconWrapper}>
                <Award className={styles.offersIcon} size={24} />
              </div>
              <h3 className={styles.offersTitle}>Специальные предложения</h3>
            </div>
            <p className={styles.offersDescription}>
              Выгодные условия покупки, программы Trade-in и кредитование от 0.01%. Узнайте о текущих акциях у наших менеджеров.
            </p>
            <button className={styles.offersButton}>
              Узнать подробнее
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}