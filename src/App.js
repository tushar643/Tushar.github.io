// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enable or not

  const [alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

 const toggleMode =()=>{
  if(mode ==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode has been enabled","success")
    document.title ='TextUtils - Dark Mode'
  }
  else {setMode('light')
  document.body.style.background='white'
  showAlert("Light mode has been enebled ","success")
       }
 }
  return (
    <>

{/* <Navbar title ="TEXTUTILS" aboutText="About Textutils" /> */}
{/* <Navbar/> */}
<Router>
  <Navbar title ="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
          </Route>
</Switch>
</div>
</Router>

    </>
  );
  }

export default App;
