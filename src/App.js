
import { Case } from './components/Case';
import Footer from './components/Footer';
import { Goals } from './components/Goals';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Safe } from './components/Safe';
import Sectionone from './components/Sectionone';


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Sectionone/>
      <Goals/>
      <Case/>
      <Safe/>
      <Footer/>
    </div>
  );
}

export default App;
