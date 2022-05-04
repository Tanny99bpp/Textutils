// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

// let name = "Harry";
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enablec or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  // const toggleMode = (cls)=>{
  //   console.log(cls);
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#042743';
  //     showAlert("Dark mode has been enabled","success");
  //   }
  //   else{
  //       setMode('light');
  //       document.body.style.backgroundColor='white';
  //       showAlert("Light mode has been enabled","success");
  //   }
  // }

  return (
    <>
    {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> */}
      {/* <Navbar/> */}
      {/* <Alert alert={alert}/> */}
      {/* <div className="container my-3"> */}
      {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          {/* <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/> */}
          {/* </Route> */}
        {/* </Switch>   */}
      {/* </div> */}
      {/* </Router> */}


      {/* if you are using these versions/above 
      //check your package.json
 "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.2" */}


      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Try Textutils-Multi Applications' mode={mode}></TextForm>} />
        <Route exact path="/about" element={<About  mode={mode}/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
