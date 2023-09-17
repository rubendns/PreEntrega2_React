const Item = ({ product }) => {
  // console.log(product);
    return (
        <div className="producto">
        <img src={product.imagen} alt="imagen" />
        <p>Modelo: {product.modelo}</p>
        <p>Precio: ${product.precio}</p>
        <div>
            <button className="ver-mas">Ver más</button>
        </div>
        </div>
    );
};

export default Item;
