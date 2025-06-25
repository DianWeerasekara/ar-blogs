import './App.css';
import Footer from './components/footer/Footer';
import Navbars from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbars />
      <div className='page-container'>
        <div className='content-wrap'>
          <h1>Hello World!</h1>
        </div>
        <Footer />
      </div>
     
    </>
  );
}

export default App;
