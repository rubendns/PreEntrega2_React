import { useState } from "react";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer'; */

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex flex-column justify-content-center vh-100">
        <Header />
        <Navbar />
        <ItemListContainer texto="Futuro carrusel" />
        <Footer />
      </div>
    </>
  );
}

export default App;
