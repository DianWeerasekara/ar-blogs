import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/footer/Footer';
import Navbars from './components/navbar/Navbar';
import SearchBar from './components/searchbar/SearchBar';
import BlogPosts from './components/blog-posts/BlogPosts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './components/blog-posts/BlogDetails';

function App() {
  return (
    <>
      <Router>
        <Navbars />
        <div className='page-container'>
          <div className='content-wrap'>
            <Routes>
              <Route
                path='/'
                element= {
                  <>
                    <SearchBar />
                    <BlogPosts />
                  </>
                }
              />
              <Route path="/blog/:id" element={<BlogDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
