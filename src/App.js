import { Navbar, Hero, About, Skills, Services, Education, Testimonials, Contact, Footer} from '../src/containers/index';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
