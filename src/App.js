// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';



function App() {
  return (
    <> 
    {/* Fragments <></> basically create and array */}
      <div className="App">
        <Header />
        <Main />
        <Button />
        <Button />
        <Button />
        <Footer />
        {/* <header className="App-header">
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
    </header> */}
      </div>
    </>

  );
}

export default App;
