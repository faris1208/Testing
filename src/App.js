
import './App.css';
import Login from './Login';
import Blog from './Blog';
import Footer from './Footer';
import Listings from './Listings';
import Navbar from './Navbar';
import Rectangle from './Rectangle';
import {Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Login />
            <Navbar />
      <Routes>
             <Route exact path='/' element={<Rectangle />}/>
             <Route  path='/listings' element={<Listings />}/>
             <Route  path='/blog' element={<Blog />}/>
     </Routes>
          <Footer />
    </div>
  );

}



export default App;
