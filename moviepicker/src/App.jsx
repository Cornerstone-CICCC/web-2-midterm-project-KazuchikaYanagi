import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>hello world</h1>
      <Footer />
    </>
  );
}

export default App;
