import { motion } from 'framer-motion';
import { MapPin, Calendar, } from 'lucide-react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import styles from './ContactSection.module.css';

interface Dealership {
  city: string;
  address: string;
  metro: string;
}

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
  });

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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Запись на тест-драйв:
      Имя: ${formData.name}
      Телефон: ${formData.phone}
      Дата: ${formData.date}`);
    setIsModalOpen(false); // Закрытие модального окна
  };

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
              <button
                className={styles.dealerButton}
                onClick={() => setIsModalOpen(true)} // Открытие модального окна
              >
                Записаться на тест-драйв
              </button>
            </motion.div>
          ))}
        </div>

        {/* Карточка с формой для записи */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.testDriveCard}
        >
          <div className={styles.testDriveHeader}>
            <div className={styles.testDriveIconWrapper}>
              <Calendar className={styles.testDriveIcon} size={24} />
            </div>
            <h3 className={styles.testDriveTitle}>Запишитесь на тест-драйв</h3>
          </div>
          <p className={styles.testDriveDescription}>
            Протестируйте Hyundai Mufasa на дороге и почувствуйте все его возможности. Запись онлайн или по телефону.
          </p>

          {/* Форма записи */}
          {isModalOpen && (
            <form onSubmit={handleFormSubmit} className={styles.testDriveForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Имя:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Телефон:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="date">Дата тест-драйва:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className={styles.formActions}>
                <button type="submit" className={styles.testDriveButton}>
                  Отправить
                </button>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => setIsModalOpen(false)} // Закрытие модального окна
                >
                  Закрыть
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
