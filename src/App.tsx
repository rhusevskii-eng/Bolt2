import Hero from './components/Hero';
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Hero />
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
