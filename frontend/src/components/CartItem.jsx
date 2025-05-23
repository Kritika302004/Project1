import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCartStore();

	return (
		<div className='rounded-lg border p-4 shadow-sm border-emerald-900/50 bg-gray-800 md:p-6 hover:bg-gray-750 transition-colors duration-200'>
			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
				<div className='shrink-0 md:order-1'>
					<img 
						className='h-20 md:h-32 rounded object-cover border border-emerald-900/30' 
						src={item.image} 
						alt={item.name}
					/>
				</div>
				<label className='sr-only'>Choose quantity:</label>

				<div className='flex items-center justify-between md:order-3 md:justify-end'>
					<div className='flex items-center gap-2'>
						<button
							className='inline-flex h-8 w-8 items-center justify-center rounded-md border
							 border-emerald-900/30 bg-gray-750 hover:bg-emerald-900/40 text-emerald-400 
							 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors duration-200'
							onClick={() => updateQuantity(item._id, item.quantity - 1)}
							disabled={item.quantity <= 1}
						>
							<Minus className='h-4 w-4' />
						</button>
						<p className='w-6 text-center text-gray-200'>{item.quantity}</p>
						<button
							className='inline-flex h-8 w-8 items-center justify-center rounded-md border
							 border-emerald-900/30 bg-gray-750 hover:bg-emerald-900/40 text-emerald-400
							 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors duration-200'
							onClick={() => updateQuantity(item._id, item.quantity + 1)}
						>
							<Plus className='h-4 w-4' />
						</button>
					</div>

					<div className='text-end md:order-4 md:w-32'>
						<p className='text-lg font-bold text-emerald-400'>₹{item.price}</p>
					</div>
				</div>

				<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
					<p className='text-lg font-medium text-white hover:text-emerald-400 transition-colors duration-200'>
						{item.name}
					</p>
					<p className='text-sm text-gray-300'>{item.description}</p>

					<div className='flex items-center gap-4'>
						<button
							className='inline-flex items-center gap-1 text-sm font-medium text-red-400
							 hover:text-red-300 transition-colors duration-200'
							onClick={() => removeFromCart(item._id)}
						>
							<Trash className='h-4 w-4' />
							<span>Remove</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartItem;