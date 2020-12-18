import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./containers/Routes";

const { Content } = Layout;
const AntLayout = styled(Layout)`
  min-height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
