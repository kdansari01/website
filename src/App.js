import { Home } from "./component/Home";
import { Profile } from "./component/Profile";
import { ContactUs } from "./component/ContactUs";

import { Login } from "./component/Login";
import { Navbar } from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./App.css"
import { SingUp } from "./component/SingUp";
import { createContext, useState } from "react";
import { Memory1 } from "./component/Memory1";
// import {NameForm} from "./Form"

const userLoginData = { userdata:[], user:{} }

export const GlobalContext = createContext(userLoginData)

function App() {

  const [global, setGlobal] = useState(userLoginData)

  return (
    <>
     <GlobalContext.Provider value={{global, setGlobal}}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Profile" exact element={<Profile/>} />
          <Route path="/Login" exact element={<Login/>} />
          <Route path="/SingUp" exact element={<SingUp/>}/>
          <Route path="/ContactUs" exact element={<ContactUs/>}/>
          
          <Route path="/Memory1" exact element={<Memory1/>}/>



          
        </Routes>
      </BrowserRouter>
      </GlobalContext.Provider>
    </>
    // <NameForm/>
  );
}

export default App;
