import { Contador } from "../Contador/Contador";

const ItemDetail = ({ item }) => {
  //   console.log(item);
    return (
        <div className="col">
        <h2>Detalle del producto</h2>
        <div className="item">
            <img src={item.imagen} alt="imagen" />
            <p>Modelo: {item.modelo}</p>
            <p>Descripcion: {item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
        </div>
        <div>
            <Contador stock={item.stock}></Contador>
        </div>
        </div>
    );
};

export default ItemDetail;
