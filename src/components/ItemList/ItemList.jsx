import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="productos">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
