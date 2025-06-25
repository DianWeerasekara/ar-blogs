import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/footer/Footer';
import Navbars from './components/navbar/Navbar';
import SearchBar from './components/searchbar/SearchBar';
import BlogPosts from './components/blog-posts/BlogPosts';

function App() {
  return (
    <>
      <Navbars />
      <div className='page-container'>
        <div className='content-wrap'>
          <SearchBar />
          <BlogPosts />
          <h1>Hello World!</h1>
        </div>
        <Footer />
      </div>
     
    </>
  );
}

export default App;
