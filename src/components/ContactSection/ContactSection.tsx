import { motion, useInView } from 'motion/react';
import { MapPin, Calendar } from 'lucide-react';
import { useRef, useState } from 'react';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const ref = useRef(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCity, setSelectedCity] = useState('');
  const [reviewed, setReviewed] = useState(false);
  const openExample = (city: string) => {
    setSelectedCity(city); setReviewed(false);
    requestAnimationFrame(() => { detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); detailRef.current?.focus({ preventScroll: true }); });
  };
  return <section id="контакты" ref={ref} className={styles.contact}>
    <div className={styles.container}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className={styles.header}>
        <h2 className={styles.title}>Демо салонов</h2>
        <p className={styles.subtitle}>Вымышленные карточки, не адреса дилеров. Запись, продажа и отправка данных отсутствуют.</p>
      </motion.div>
      <div className={styles.dealershipsGrid}>
        {['Москва', 'Санкт-Петербург', 'Казань'].map((city, index) => <div key={city} className={styles.dealerCard}>
          <div className={styles.dealerHeader}><MapPin size={20} /><h3 className={styles.dealerCity}>{city}</h3></div>
          <p className={styles.dealerAddress}>Вымышленный демо-салон №{index + 1}</p>
          <p className={styles.dealerMetro}>Не предназначен для посещения</p>
          <button type="button" className={styles.dealerButton} onClick={() => openExample(city)} aria-controls="test-drive-example">Посмотреть демо: {city}</button>
        </div>)}
      </div>
      <div className={styles.testDriveCard}>
        <div className={styles.testDriveHeader}><Calendar size={24} /><h3 className={styles.testDriveTitle}>Сценарий тест-драйва · демо</h3></div>
        <p className={styles.testDriveDescription}>Выберите карточку, чтобы просмотреть синтетический пример. Реальной брони и связи с дилером нет.</p>
        {selectedCity && <div id="test-drive-example" ref={detailRef} tabIndex={-1} className={styles.testDriveForm} aria-label="Тестовый пример без отправки">
          <div className={styles.inputGroup}><label htmlFor="drive-profile" className={styles.formLabel}>Тестовый профиль</label>
            <input id="drive-profile" value="Демо-посетитель" readOnly className={styles.formInput} /></div>
          <div className={styles.inputGroup}><label htmlFor="drive-city" className={styles.formLabel}>Демо-салон</label>
            <input id="drive-city" value={selectedCity} readOnly className={styles.formInput} /></div>
          <div className={styles.formActions}>
            <button type="button" className={styles.testDriveButton} onClick={() => setReviewed(true)}>Проверить демо-сценарий</button>
            <button type="button" className={styles.closeButton} onClick={() => { setSelectedCity(''); setReviewed(false); }}>Закрыть пример</button>
          </div>
          {reviewed && <p role="status" className={styles.demoStatus}>Демо просмотрено. Запись не создана, данные не отправлены. Для настоящего тест-драйва обратитесь к официальному дилеру самостоятельно.</p>}
        </div>}
      </div>
    </div>
  </section>;
}
