import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import ImageBrowser from './Pages/ImageBrowser/ImageBrowser';
import {Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/imagebrowser" component={ImageBrowser} />
      </Router>
    </div>
  );
}

export default App;
