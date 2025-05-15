import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-40 border-b border-fashion-softgray'>
			<div className='max-w-7xl mx-auto px-4 sm:px-8 py-4'>
				<div className='flex justify-between items-center'>
					<Link to='/' className='text-2xl font-bold text-fashion-charcoal tracking-wide'>
						NepHeritage
					</Link>

					<nav className='flex items-center gap-4 text-sm font-medium'>
						<Link
							to={"/"}
							className='text-fashion-charcoal hover:text-black transition-colors duration-200'
						>
							Home
						</Link>

						{user && (
							<Link
								to={"/cart"}
								className='relative group text-fashion-charcoal hover:text-black transition-colors duration-200'
							>
								<ShoppingCart className='inline-block mr-1' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span className='absolute -top-2 -left-2 bg-fashion-charcoal text-white rounded-full px-2 py-0.5 text-xs'>
										{cart.length}
									</span>
								)}
							</Link>
						)}

						{isAdmin && (
							<Link
								to={"/secret-dashboard"}
								className='bg-fashion-charcoal hover:bg-black text-white px-3 py-1.5 rounded-full flex items-center gap-1 transition'
							>
								<Lock size={16} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								onClick={logout}
								className='bg-gray-200 hover:bg-gray-300 text-fashion-charcoal py-2 px-4 rounded-full flex items-center gap-2 transition'
							>
								<LogOut size={18} />
								<span className='hidden sm:inline'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-fashion-rose hover:bg-rose-200 text-fashion-charcoal py-2 px-4 rounded-full flex items-center gap-2 transition'
								>
									<UserPlus size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-gray-200 hover:bg-gray-300 text-fashion-charcoal py-2 px-4 rounded-full flex items-center gap-2 transition'
								>
									<LogIn size={18} />
									Login
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
