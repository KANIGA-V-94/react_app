import logo from './logo.svg';
import './App.css';
import StateComponent from './components/classcomponents/StateComponents';
import PropsComponent from './components/functionalcomponents/propsComponent';
//import Testcomponent from './components/functionalcomponents/testcomponents';
//import TestClassComp from './components/classcomponents/testclasscomponents';
function App() {
  return (
    <div className="App">
      {/*Testcomponent*/}
      <header className="App-header">
        {/*TestClassComp*/}
        <StateComponent />
        <PropsComponent name ="kani" course = "MERN" />
        {/*<PropsComponent name="Kani" email="kanigav2004@gmail.com" />*/}
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}
export default App;
