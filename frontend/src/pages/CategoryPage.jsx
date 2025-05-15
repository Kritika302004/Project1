import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();
	const { category } = useParams();

	useEffect(() => {
		fetchProductsByCategory(category);
	}, [fetchProductsByCategory, category]);

	return (
		<div className='min-h-screen bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<motion.h1
					className='text-center text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-12'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{formatCategoryName(category)}
				</motion.h1>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{Array.isArray(products) && products.length === 0 ? (
						<div className='col-span-full text-center py-20 text-gray-400 text-xl'>
							No products found in this category.
						</div>
					) : (
						products.map((product) => (
							<ProductCard key={product._id} product={product} />
						))
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default CategoryPage;

const formatCategoryName = (name) => {
	if (!name) return "";
	return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");
};
