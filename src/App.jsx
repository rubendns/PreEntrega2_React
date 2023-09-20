import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/marca/:marca" element={<ItemListContainer />} />
                <Route path="/marca/:marca" element={<ItemListContainer />} />
                <Route path="/marca/:marca" element={<ItemListContainer />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    );
}

export default App;
