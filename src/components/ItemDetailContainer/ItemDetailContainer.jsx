import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { mFetch } from "../../Data/data";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        mFetch(5)
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
        <ItemDetail products={products} />
        </div>
    );
};

export default ItemDetailContainer;
