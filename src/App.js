//import logo from './logo.svg';
import './App.css';
// import StateComponent from './components/classcomponents/StateComponents';
// import PropsComponent from './components/functionalcomponents/propsComponent';
//import Testcomponent from './components/functionalcomponents/testcomponents';
//import TestClassComp from './components/classcomponents/testclasscomponents';
import Navbar from './components/functionalcomponents/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/functionalcomponents/About';
import Skills from './components/functionalcomponents/Skills';
import Login from './components/functionalcomponents/Login';
import Home from './components/functionalcomponents/Home';
import Footer from './components/functionalcomponents/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/About' element={<About />} ></Route>
          <Route path='/Skills' element={<Skills />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      {/*Testcomponent*/}
      {/* <PropsComponent name ="kani" course = "MERN" /> */}
      {/* <header className="App-header"> */}
      {/*TestClassComp*/}
      {/* <StateComponent /> */}

      {/*<PropsComponent name="Kani" email="kanigav2004@gmail.com" />*/}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <Footer />
    </div>
  );
}
export default App;
