import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";

const categories = [
  { href: "/women", name: "Women's", imageUrl: "/women.jpg" },
  { href: "/accessories", name: "Accessories", imageUrl: "/accessories.jpeg" },
  { href: "/men", name: "Men's", imageUrl: "/men.jpg" },
  { href: "/others", name: "Others", imageUrl: "/others.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-100 h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/homebackground.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nepali Heritage Collection
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8">
            Authentic traditional products for everyone
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-200 transition duration-300">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<h2 className="text-3xl font-bold text-black mb-8 text-center font-serif">
          Shop By Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;