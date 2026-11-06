import styles from './Footer.module.css';
export function Footer() {
  return <footer className={styles.footer} id="о-проекте"><div className={styles.container}>
    <div className={styles.grid}>
      <div className={styles.brandSection}><h2 className={styles.logoBrand}>MUFASA · UI CONCEPT</h2>
        <p className={styles.tagline}>Портфолио Максима Асатурова. Неофициальный учебный сайт, не дилер Hyundai.</p></div>
      <div className={styles.section}><h3>Разделы</h3><ul className={styles.linkList}>
        <li><a href="#обзор">Обзор</a></li><li><a href="#характеристики">Интерфейс</a></li></ul></div>
      <div className={styles.section}><h3>Демонстрация</h3><ul className={styles.linkList}>
        <li><a href="#ассистенты">Демо ассистента</a></li><li><a href="#контакты">Демо салонов</a></li></ul></div>
      <div className={styles.section}><h3>Исходный код</h3><a href="https://github.com/VortexFront/hyundai-">GitHub проекта</a></div>
    </div>
    <div className={styles.bottom}><p className={styles.copyright}>Автор разработки — Максим Асатуров. Использованы AI-assisted инструменты.</p>
      <p>Фото: <a href="https://commons.wikimedia.org/wiki/File:Hyundai_Mufasa_005.jpg">KitsuneDP / Wikimedia Commons</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a>. Марка принадлежит её правообладателю.</p></div>
  </div></footer>;
}
