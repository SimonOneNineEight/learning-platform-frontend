import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Router>
      <AntLayout>
        <Header />
        <Content className="site-layout" style={{ padding: "20px 50px" }}>
          {/* Routes */}
          <Routes />
        </Content>
        <Footer />
      </AntLayout>
    </Router>
  );
}

export default App;
