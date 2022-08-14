import './App.css';

import Information from './components/info';
import About from './components/about';
import Interest from './components/interest';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Information />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
