import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div>
            <Header />
            <Navbar />
            <ItemListContainer />
            <ItemDetailContainer />
            <Footer />
        </div>
        </>
    );
}

export default App;
