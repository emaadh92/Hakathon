import { Carousel } from "@/components/ui/carousel"; // Adjust path based on your project structure

const CarouselComponent = () => {
  // Carousel items data
  const carouselItems = [
    {
      id: 1,
      title: "50+ Beautiful Room Inspirations",
      description: "Explore stunning room designs and ideas for your home.",
      buttonText: "Explore More",
    },
    {
      id: 2,
      image: "/product-1.jpg",
    },
    {
      id: 3,
      image: "/product-2.jpg",
    },
    {
      id: 4,
      image: "/product-3.jpg",
    },
    {
      id: 5,
      image: "/product-4.jpg",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      {/* Carousel Wrapper */}
      <Carousel>
        <div className="grid grid-cols-4 gap-4">
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-between items-center text-center"
            >
              {/* Content for Item 1 */}
              {item.id === 1 ? (
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <button className="px-6 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
                    {item.buttonText}
                  </button>
                </div>
              ) : (
                // Content for Other Items
                <img
                  src={item.image}
                  alt={`Carousel Image ${item.id}`}
                  className="w-full h-40 object-cover rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

