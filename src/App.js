// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ColorSwitcher from './components/ColorSwitcher';
import Footer from './components/Footer';
import Header from './components/Header';
import Iterate from './components/Iterate';
import Main from './components/Main';



function App() {


  const aFunc = () => {console.log("aFunc")}
  const buttonProps = {backgroundColor: "white", color: "black", are: ["Stuff3", "Stuff4"], text: "Click White"}
  // ^^^ Props defined for a button

  return (
    <> 
    {/* Fragments <></> basically create and array */}
      <div className="App">
        <Header />
        {/* ^^^ injects components */}
        <Main />
        <Button backgroundColor="blue" color="red" names={["Stuff1", "Stuff2"]} func={aFunc} text="Click Blue"/>
        {/* ^^^ can pass individual functions to reused components */}
        <Button {...buttonProps}/>  
        {/* ^^^ uses the spread operator to take each individual property */}
        <Button backgroundColor="red" color="blue" hard={["Stuff5", "Stuff6"]}>Click Red</Button>
        {/* ^^^ uses the built in props.children, automatically injects what is inside the component tag*/}
        <ColorSwitcher/>
        {/* ^^^ demonstrates state management */}
        <Iterate/>
        <Footer />
        
      </div>
    </>

  );
}

export default App;
