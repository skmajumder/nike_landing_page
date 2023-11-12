import Footer from './sections/Footer';

const App = () => {
  return (
    <>
      <main className="relative">
        <section className="xl:padding-l wide:padding-r padding-b">
          Hero
        </section>
        <section className="padding">PopularProducts</section>
        <section className="padding">SuperQuality</section>
        <section className="padding-x py-10">Services</section>
        <section className="padding">SpecialOffer</section>
        <section className="padding bg-pale-blue">CustomerReview</section>
        <section className="padding-x w-full py-16 sm:py-32">Subscribe</section>
        <Footer />
      </main>
    </>
  );
};

export default App;
