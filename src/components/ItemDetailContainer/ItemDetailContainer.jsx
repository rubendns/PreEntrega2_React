import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../Data/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    // console.log(id);
    
    useEffect(() => {
        mFetch(Number(id))
        .then((res) => setItem(res))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
        <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
