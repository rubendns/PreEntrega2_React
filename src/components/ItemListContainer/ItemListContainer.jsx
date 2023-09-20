import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemFetch } from "../../Data/data";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { marca } = useParams();
    //   console.log(marca);

    useEffect(() => {
        if (marca) {
            itemFetch()
            .then((resp) => setProducts(resp.filter((product) => product.marca.toLowerCase() === marca.toLocaleLowerCase())))
            .catch((err) => console.log(err));
        } else {
            itemFetch()
            .then((resp) => setProducts(resp))
            .catch((err) => console.log(err));
        }
    }, [marca]);

    return <div>{<ItemList products={products} />}</div>;
    };

export default ItemListContainer;
