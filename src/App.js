import React from "react"
import './App.css';
import Favourite from "./Components/Favourite"
import Search from "./Components/search"
import {ContactProvider} from "./Components/context"


function App() {

 
  return (
    <ContactProvider>
    <div className="App">
      <h2 className="main-heading">Contact Filtering List</h2>
      
        <Search />
        <Favourite/>
       
    
    </div>
    </ContactProvider>
  );
}

export default App;
