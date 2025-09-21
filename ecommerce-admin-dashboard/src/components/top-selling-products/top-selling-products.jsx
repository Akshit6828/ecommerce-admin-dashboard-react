import "./top-selling-products.scss";

const TopSellingProduct = () => {
  const products = [
    {
      id: 1,
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      id: 2,
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    {
      id: 3,
      name: "Half Sleeve Shirt",
      price: 39.99,
      quantity: 64,
      amount: 2559.36,
    },
    {
      id: 4,
      name: "Lightweight Jacket",
      price: 20.0,
      quantity: 184,
      amount: 3680.0,
    },
    {
      id: 5,
      name: "Marco Shoes",
      price: 79.49,
      quantity: 64,
      amount: 1965.81,
    },
  ];

  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="top-selling-product">
      <h2 className="top-selling-product__title">Top Selling Products</h2>

      <table className="top-selling-product__table">
        <thead className="top-selling-product__header">
          <tr>
            <th className="name">Name</th>
            <th className="price">Price</th>
            <th className="quantity">Quantity</th>
            <th className="amount">Amount</th>
          </tr>
        </thead>
        <tbody className="top-selling-product__body">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="top-selling-product__name">{product.name}</td>
              <td className="top-selling-product__price">
                {formatCurrency(product.price)}
              </td>
              <td className="top-selling-product__quantity">
                {product.quantity}
              </td>
              <td className="top-selling-product__amount">
                {formatCurrency(product.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProduct;
