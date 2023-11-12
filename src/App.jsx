import Main from './components/Main';
import Nav from './components/Nav';
import {
  Hero,
  Footer,
  Services,
  Subscribe,
  SpecialOffer,
  SuperQuality,
  PopularProducts,
  CustomerReviews,
} from './sections';

const App = () => {
  return (
    <>
      <Main className="relative">
        <Nav />
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Subscribe />
        <Footer />
      </Main>
    </>
  );
};

export default App;
