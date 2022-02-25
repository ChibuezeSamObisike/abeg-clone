import { Container } from "@mui/material";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SecondHeader from "./components/secondHeader";
import Faq from "./components/faq";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <SecondHeader />
        <Footer />
        <Faq />
        <hr />
      </Container>
    </div>
  );
}

export default App;
