import './App.css';
import Header from './Components/Header';
import Notes from './Components/Notes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='app-container'>
      <div className='main'>
        <Header />
        <Notes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
