const Products = () => {
    // Sample product data
    const products = [
      { id: 1, name: "image", price: "$10", image: "/product-1.jpg" },
      { id: 2, name: "Product 2", price: "$20", image: "/product-11.jpg" },
      { id: 3, name: "Product 3", price: "$30", image: "/product-2.jpg" },
      { id: 4, name: "Product 4", price: "$40", image: "/product-9.jpg" },
      { id: 5, name: "Product 5", price: "$50", image: "/product-4.jpg" },
      { id: 6, name: "Product 6", price: "$60", image: "/product-5.jpg" },
      { id: 7, name: "Product 7", price: "$70", image: "/product-6.jpg" },
      { id: 8, name: "Product 8", price: "$80", image: "/product-10.jpg" },
    ];
  
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        {/* Main Heading */}
        <h2 className="text-center text-2xl font-bold mb-8">Our Products</h2>
  
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
  
              {/* Product Info */}
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
  
              {/* Add to Cart Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <button className="text-white bg-yellow-500 px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition-colors">
            View More
          </button>
        </div>
      </div>
    );
  };
  
  export default Products;
  