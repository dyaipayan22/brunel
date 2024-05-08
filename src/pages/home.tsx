import FAQ from '../components/faq';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-screen p-8 flex flex-col gap-14">
      <Navbar />
      <Hero />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
