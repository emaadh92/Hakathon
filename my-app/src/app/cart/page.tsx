import Image from "next/image";

const Cart = () => {
  return (
    <div className="max-w-[1286px] mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      <div className="flex flex-wrap -mx-4">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Your Items</h2>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center">
                <Image
                  src="/product-1.jpg"
                  alt="Product Image"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-700">Product Name</h3>
                  <p className="text-sm text-gray-500">Category: Furniture</p>
                  <p className="text-sm text-gray-500">Price: $58.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-16 border border-gray-300 rounded-md text-center"
                />
                <button className="ml-4 text-red-600 hover:text-red-800">Remove</button>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center">
                <Image
                  src="/product-2.jpg"
                  alt="Product Image"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-700">Another Product</h3>
                  <p className="text-sm text-gray-500">Category: Electronics</p>
                  <p className="text-sm text-gray-500">Price: $99.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="w-16 border border-gray-300 rounded-md text-center"
                />
                <button className="ml-4 text-red-600 hover:text-red-800">Remove</button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
          <div className="bg-yellow-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-800">$215.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium text-gray-800">$10.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium text-gray-800">$5.00</span>
            </div>
            <div className="border-t border-gray-300 pt-4 mt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>$230.00</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
