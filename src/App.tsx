import Hero from './components/Hero';
import MediaLogos from './components/MediaLogos';
import EventDays from './components/EventDays';
import WhoIsItFor from './components/WhoIsItFor';
import EventSchedule from './components/EventSchedule';
import TruthSection from './components/TruthSection';
import WhyTrustMe from './components/WhyTrustMe';
import Testimonials from './components/Testimonials';
import Bonuses from './components/Bonuses';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

function App() {
  const path = window.location.pathname;

  if (path === '/thank-you') {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #05121f 0%, #071e38 30%, #05121f 60%, #071e38 80%, #05121f 100%)' }}>
      <Hero />
      <MediaLogos />
      <EventDays />
      <WhoIsItFor />
      <EventSchedule />
      <TruthSection />
      <WhyTrustMe />
      <Testimonials />
      <Bonuses />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
