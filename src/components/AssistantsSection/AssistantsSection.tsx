import { motion, useInView } from 'motion/react';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { useRef, useState } from 'react';
import styles from './AssistantsSection.module.css';

export function AssistantsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [shown, setShown] = useState(false);
  const showDemo = () => setShown(true);
  return <section id="ассистенты" ref={ref} className={styles.assistants}>
    <div className={styles.container}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className={styles.header}>
        <h2 className={styles.title}>Демо ассистента</h2>
        <p className={styles.subtitle}>Локальный пример интерфейса. Нет чата, AI API и обещания обратной связи. Настоящие контакты не нужны.</p>
      </motion.div>
      <div className={styles.grid}>
        <div className={styles.formCard}>
          <div className={styles.formHeader}><MessageCircle size={24} /><h3 className={styles.formTitle}>Пример диалога</h3></div>
          <form onSubmit={(event) => { event.preventDefault(); showDemo(); }} className={styles.form}>
            <div className={styles.formGroup}><label htmlFor="assistant-profile" className={styles.label}>Тестовый профиль</label>
              <input id="assistant-profile" value="Демо-посетитель" readOnly className={styles.input} /></div>
            <div className={styles.formGroup}><label htmlFor="assistant-message" className={styles.label}>Подготовленный вопрос</label>
              <textarea id="assistant-message" value="Как выглядит сценарий тест-драйва в этом демо?" readOnly rows={4} className={styles.textarea} /></div>
            <button type="submit" className={styles.submitButton}>Показать демо-ответ</button>
            {shown && <p role="status">Демо-ответ: откройте раздел «Контакты», чтобы посмотреть тестовую карточку. Сообщение никуда не отправлено; AI не подключён.</p>}
          </form>
        </div>
        <div className={styles.contactInfo}>
          {[{ icon: Phone, title: 'Телефон', text: 'Телефонные звонки не поддерживаются' },
            { icon: Mail, title: 'Почта', text: 'Отправка писем не подключена' },
            { icon: Clock, title: 'Режим демо', text: 'Статический интерфейс без оператора' }].map(({ icon: Icon, title, text }) =>
            <div key={title} className={styles.infoCard}><div className={styles.infoContent}>
              <div className={styles.infoIconWrapper}><Icon className={styles.infoIcon} size={24} /></div>
              <div><h4 className={styles.infoTitle}>{title}</h4><p className={styles.infoText}>{text}</p></div>
            </div></div>)}
          <div className={styles.aiCard}><h4 className={styles.aiTitle}>Макет ассистента</h4>
            <p className={styles.aiDescription}>Заранее подготовленный пример ответа. Генерация AI и серверная обработка отсутствуют.</p>
            <button type="button" className={styles.aiButton} onClick={showDemo}>Показать пример ответа</button>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
