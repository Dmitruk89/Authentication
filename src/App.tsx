import './App.css';
import Page from './pages/Page';
import {BrowserRouter as Router} from 'react-router-dom';
import {Header} from './components/Header/HeaderContainer';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Page/>
      </div>
    </Router>
  );
}

export default App;
