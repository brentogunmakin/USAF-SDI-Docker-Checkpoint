import './App.css';
import { Link, BrowserRouter as Router, Route} from 'react-router-dom'
import Banner from './Components/Banner/Banner'
import Body from './Components/Body/Body';


function App() {
  return (
    <>
      <Router>
        <Banner />
        <Body />
      </Router>
    </>
  );
}

export default App;
