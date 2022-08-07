import "./App.css";
import Header from "../../components/headerComponent";
import CardContainer from "../../components/CountriesContainer";
import InputSearch from "../../components/InputSearch";
import Selector from "../../components/inputSelector";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <nav className="inputBar">
        <InputSearch />
        <Selector />
      </nav>

      <CardContainer />
    </div>
  );
}

export default App;
