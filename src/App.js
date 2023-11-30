import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";
import { useState } from "react";

function App() {
  const [cartCount, setCountCart] = useState(0);
  return (
    <>
      <Header cartCount={cartCount} />
      <Body setCountCart={setCountCart} />
      <Footer />
    </>
  );
}

export default App;
