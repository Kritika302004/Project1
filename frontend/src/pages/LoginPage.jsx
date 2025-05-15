import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<div className='flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-fashion-beige min-h-screen'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className='mt-6 text-center text-3xl font-bold text-fashion-charcoal'>Welcome Back</h2>
				<p className='mt-2 text-center text-sm text-gray-500'>
					Login to access your wardrobe
				</p>
			</motion.div>

			<motion.div
				className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='bg-white py-8 px-6 shadow-md sm:rounded-xl sm:px-10 border border-gray-200'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
								Email address
							</label>
							<div className='mt-1 relative rounded-md'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-gray-400' />
								</div>
								<input
									id='email'
									type='email'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='block w-full px-3 py-2 pl-10 text-gray-800 bg-gray-100 border border-gray-300
										rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fashion-charcoal
										focus:border-fashion-charcoal sm:text-sm'
									placeholder='you@example.com'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
								Password
							</label>
							<div className='mt-1 relative rounded-md'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' />
								</div>
								<input
									id='password'
									type='password'
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='block w-full px-3 py-2 pl-10 text-gray-800 bg-gray-100 border border-gray-300
										rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fashion-charcoal
										focus:border-fashion-charcoal sm:text-sm'
									placeholder='••••••••'
								/>
							</div>
						</div>

						<button
							type='submit'
							disabled={loading}
							className='w-full flex justify-center py-2 px-4 border border-transparent rounded-full
								shadow-sm text-sm font-medium text-white bg-fashion-charcoal hover:bg-black
								focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition disabled:opacity-50'
						>
							{loading ? (
								<>
									<Loader className='mr-2 h-5 w-5 animate-spin' />
									Loading...
								</>
							) : (
								<>
									<LogIn className='mr-2 h-5 w-5' />
									Login
								</>
							)}
						</button>
					</form>

					<p className='mt-6 text-center text-sm text-gray-500'>
						Not a member?{" "}
						<Link
							to='/signup'
							className='font-medium text-fashion-charcoal hover:underline inline-flex items-center gap-1'
						>
							Sign up now <ArrowRight className='h-4 w-4' />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default LoginPage;
