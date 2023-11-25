
import './App.css';
import Blog from './Blog';
import Form from './Form';
import Listings from './Listings';
import Navbar from './Navbar';
import Rectangle from './Rectangle';

function App() {
  return (
    <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <Rectangle />
        </div>
        <div>
          <Listings />
        </div>
        <div>
          <Blog />
        </div>
    </div>
  );
}

export default App;
