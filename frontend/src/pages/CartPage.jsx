import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import CartItem from "../components/CartItem";

const CartPage = () => {
	const { cart } = useCartStore();

	return (
		<div className='bg-fashion-beige min-h-screen py-10 px-4'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center text-fashion-charcoal mb-12'
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Your Shopping Cart
				</motion.h2>

				<div className='flex flex-col lg:flex-row gap-8'>
					<motion.div
						className='w-full lg:w-2/3 space-y-6'
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						{cart.length === 0 ? (
							<EmptyCartUI />
						) : (
							<div className='space-y-6'>
								{cart.map((item) => (
									<CartItem key={item._id} item={item} />
								))}
							</div>
						)}
					</motion.div>

					{cart.length > 0 && (
						<motion.div
							className='w-full lg:w-1/3 space-y-6'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartPage;

const EmptyCartUI = () => (
	<motion.div
		className='flex flex-col items-center justify-center rounded-xl bg-white border border-gray-200 px-6 py-16 text-center shadow-sm'
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<ShoppingCart className='h-20 w-20 text-gray-300 mb-4' />
		<h3 className='text-2xl font-semibold text-gray-800'>Your cart is empty</h3>
		<p className='text-gray-500 mt-2'>Looks like you haven’t added anything yet.</p>
		<Link
			to='/'
			className='mt-6 inline-block rounded-full bg-fashion-charcoal px-6 py-2 text-white text-sm font-medium hover:bg-gray-900 transition'
		>
			Continue Shopping
		</Link>
	</motion.div>
);
