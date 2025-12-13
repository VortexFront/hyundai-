import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Zap, Shield, Gauge, Wifi } from 'lucide-react';
import styles from './FeaturesSection.module.css';

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Мощный двигатель',
    description:
      'Турбированный двигатель объемом 2.5L с мощностью 280 л.с. обеспечивает невероятную динамику',
  },
  {
    icon: Shield,
    title: 'Активная безопасность',
    description:
      'Комплекс систем безопасности Hyundai SmartSense защищает вас на каждом повороте',
  },
  {
    icon: Gauge,
    title: 'Спортивная подвеска',
    description:
      'Адаптивная подвеска обеспечивает идеальный баланс между комфортом и управляемостью',
  },
  {
    icon: Wifi,
    title: 'Умные технологии',
    description:
      'Передовая система подключения и управления через смартфон',
  },
];

export function FeaturesSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="характеристики" ref={ref} className={styles.features}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={styles.featureCard}
            >
              <div className={styles.iconWrapper}>
                <Icon className={styles.icon} width={28} height={28} />
              </div>

              <h3 className={styles.featureTitle}>{title}</h3>
              <p className={styles.featureDescription}>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
