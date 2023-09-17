const ItemDetail = ({ products }) => {
  // console.log(products);
    return (
        <div className="col">
        <h2>Detalle del producto</h2>
        <div className="col">
            <img src={products.imagen} alt="imagen" />
            <p>Modelo: {products.modelo}</p>
            <p>Descripcion: {products.descripcion}</p>
            <p>Precio: ${products.precio}</p>
        </div>
        </div>
    );
};

export default ItemDetail;
