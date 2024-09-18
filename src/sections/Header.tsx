import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import MenuIcon from '@/assets/menu.svg';
import Image from 'next/image';

export default function Header() {
	return (
		<header className='sticky top-0 z-50 backdrop-blur-sm'>
			<div className='flex justify-center items-center py-2 bg-black text-white text-sm gap-3'>
				<p className='text-white/60 hidden md:block'>Streamline your workflow and boots your productivity.</p>
				<div className='inline-flex items-center gap-1'>
					<p>Get started by for free</p>
					<ArrowRight className='w-4 h-4' />
				</div>
			</div>
			<div className='py-2 md:py-4'>
				<div className='container'>
					<div className='flex items-center justify-between'>
						<Image src={Logo} height={40} width={40} alt='Sass Logo' />
						<MenuIcon className='w-6 h-6 md:hidden' />
						<nav className='hidden md:flex gap-5 text-black/60 items-center'>
							<a href='#' className='text-black'>
								Home
							</a>
							<a href='#' className='text-black'>
								Features
							</a>
							<a href='#' className='text-black'>
								Customers
							</a>
							<a href='#' className='text-black'>
								Updates
							</a>
							<a href='#' className='text-black'>
								Help
							</a>
							<button className='btn btn-primary'>Get for free</button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
