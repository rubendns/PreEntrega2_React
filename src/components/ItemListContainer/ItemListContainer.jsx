import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { mFetch } from "../../Data/data";

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
