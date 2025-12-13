import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import styles from "./AssistantsSection.module.css";


interface FormData {
  name: string;
  phone: string;
  message: string;
}

export function AssistantsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Спасибо! Наш ассистент свяжется с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="ассистенты" ref={ref} className={styles.assistants}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Свяжитесь с нами</h2>
          <p className={styles.subtitle}>
            Наши ассистенты готовы ответить на все ваши вопросы
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={styles.formCard}
          >
            <div className={styles.formHeader}>
              <div className={styles.formIconWrapper}>
                <MessageCircle className={styles.formIcon} size={24} />
              </div>
              <h3 className={styles.formTitle}>Онлайн чат</h3>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.input}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className={styles.textarea}
                  placeholder="Расскажите, чем мы можем помочь..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Отправить сообщение
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={styles.contactInfo}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoContent}>
                <div className={styles.infoIconWrapper}>
                  <Phone className={styles.infoIcon} size={24} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Телефон</h4>
                  <p className={styles.infoText}>+7 (495) 123-45-67</p>
                  <p className={styles.infoText}>+7 (800) 555-35-35 (бесплатно)</p>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoContent}>
                <div className={styles.infoIconWrapper}>
                  <Mail className={styles.infoIcon} size={24} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Email</h4>
                  <p className={styles.infoText}>info@hyundai-mufasa.ru</p>
                  <p className={styles.infoText}>support@hyundai-mufasa.ru</p>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoContent}>
                <div className={styles.infoIconWrapper}>
                  <Clock className={styles.infoIcon} size={24} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Режим работы</h4>
                  <p className={styles.infoText}>Пн-Пт: 9:00 - 21:00</p>
                  <p className={styles.infoText}>Сб-Вс: 10:00 - 19:00</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={styles.aiCard}
            >
              <h4 className={styles.aiTitle}>Персональный ассистент 24/7</h4>
              <p className={styles.aiDescription}>
                Наш искусственный интеллект готов ответить на ваши вопросы в любое время суток
              </p>
              <button className={styles.aiButton}>Начать чат</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}