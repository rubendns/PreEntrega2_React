import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Productos from "./components/Productos/Productos";
import Noticias from "./components/Noticias/Noticias";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
                <Route path="/productos" element={<Productos />}/>
                <Route path="/noticias" element={<Noticias />}/>
                <Route path="/contacto" element={<Contacto />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    );
}

export default App;
