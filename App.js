
import React,{useState} from "react";
import ReactDOM  from "react-dom";
import SearchArea from "./SearchArea";
import { Router } from "@reach/router";
import WatchArea from "./WatchArea";
import ColorContext from "./ColorContext";

const App = () => {
  const themeColor = useState("#ad343e");  
  return (
    <ColorContext.Provider value={themeColor}>

    <div>
      <header>
      
         <h2>GeTube</h2> 
        
      </header>
      <Router>
      <SearchArea path="/" />
      <WatchArea path="/watch/:id"/>

      </Router>
  </div>
    </ColorContext.Provider>
     
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
