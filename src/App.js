
import './App.css';
import Navbar from './components/Navbar';
import Article from './components/Article';
import Heading from './components/Heading';

  function App() {
    return (
      <div>
      <Navbar/>
      <div className='body' >
      <Heading/>
      <Article/>
      </div>
      </div>
    )
    
  
  }
   

export default App;
