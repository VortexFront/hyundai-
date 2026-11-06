import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Zap, Shield, Gauge, Wifi } from 'lucide-react';
import styles from './FeaturesSection.module.css';

const features = [
  { icon: Zap, title: 'Первый экран', description: 'Адаптивная композиция с локальной фотографией автомобиля и анимацией появления.' },
  { icon: Shield, title: 'Честная демонстрация', description: 'Все сценарии работают локально. Персональные данные не запрашиваются и заявки не создаются.' },
  { icon: Gauge, title: 'Навигация', description: 'Переходы по разделам, мобильное меню и видимый фокус клавиатуры.' },
  { icon: Wifi, title: 'Без серверной интеграции', description: 'Карточки иллюстрируют структуру сайта, а не комплектацию, безопасность или характеристики Mufasa.' },
];

export function FeaturesSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return <section id="характеристики" ref={ref} className={styles.features} aria-label="Возможности демонстрационного интерфейса">
    <div className={styles.container}><div className={styles.grid}>
      {features.map(({ icon: Icon, title, description }, index) => <motion.div key={title}
        initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.6 }} className={styles.featureCard}>
        <div className={styles.iconWrapper}><Icon className={styles.icon} width={28} height={28} /></div>
        <h2 className={styles.featureTitle}>{title}</h2><p className={styles.featureDescription}>{description}</p>
      </motion.div>)}
    </div></div>
  </section>;
}
