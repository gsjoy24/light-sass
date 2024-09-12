import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import MenuIcon from '@/assets/menu.svg';
import Image from 'next/image';

export default function Home() {
	return (
		<header className='sticky top-0 z-50'>
			<div className='flex justify-center items-center py-3 bg-black text-white'>
				<div className='inline-flex items-center gap-1'>
					<p>Get started by for free</p>
					<ArrowRight className='w-4 h-4' />
				</div>
			</div>
			<div className='py-5'>
				<div className='container'>
					<div className='flex items-center justify-between'>
						<Image src={Logo} height={40} width={40} alt='Sass Logo' />
						<MenuIcon className='w-6 h-6' />
					</div>
				</div>
			</div>
		</header>
	);
}
