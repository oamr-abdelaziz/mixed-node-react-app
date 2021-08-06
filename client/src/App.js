import './App.scss';
import React,{useEffect} from 'react';
import Routes from "./routes";
import { BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Spinner from './components/Spinner/Spinner';
import Loader from './components/Loader';

function App() {
  const [show, setShow] = React.useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3000)
  }, [show])

  if (!show) return <Spinner/>
  return (
    <div className="App">
      {/* <Spinner/> */}
      {/* <Loader/> */}
      <Router>
        <NavBar />
        <Routes />
    </Router>
    </div>
  );
}

export default App;
