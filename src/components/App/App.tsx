import { Header } from '@/components/Header/Header';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';
import { AssistantsSection } from '@/components/AssistantsSection/AssistantsSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { Footer } from '@/components/Footer/Footer';
import styles from '@/components/App/App.module.css';



export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AssistantsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
