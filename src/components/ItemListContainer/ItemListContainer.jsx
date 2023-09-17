import { useEffect, useState } from "react";
import { mFetch } from "../../Data/data";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        mFetch()
        .then((res) => setProduct(res))
        .catch((err) => console.log(err));
    }, []);

    return <div>{<ItemList products={products} />}</div>;
};

export default ItemListContainer;

