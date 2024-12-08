import ServicesComponent from "@/components/services";
import HeroShop from "@/components/shophero";
import Image from "next/image";
import Link from "next/link";

const ShopComponent = () => {
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `$${(index + 1) * 10}.00`,
    image: `/product-${index + 1}.jpg`, // Replace with your product image paths
  }));

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      {/* Heading */}
      <HeroShop />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="text-gray-600">Explore our exclusive collection of products.</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/shop/${product.id}`} key={product.id}>
            <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              {/* Product Name */}
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              {/* Product Price */}
              <p className="text-gray-700 mb-4">{product.price}</p>
              {/* Add to Cart Button */}
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
      <ServicesComponent />
    </div>
  );
};

export default ShopComponent;

  