import Image from 'next/image';
import ArrowIcon from '../assets/arrow-right.svg';
import CongImage from '../assets/cog.png';
import cylinder from '../assets/cylinder.png';
import noodle from '../assets/noodle.png';

const Hero = () => {
	return (
		<section
			className='pt-8 pb-20 md:pt-4 md:pb-10 overflow-x-clip'
			style={{
				background: 'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)'
			}}
		>
			<div className='container'>
				<div className='md:flex items-center'>
					<div className='md:w-[478px]'>
						<div className='tag'>Version 20.0 is here</div>
						<h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6'>
							Pathway to productivity
						</h1>
						<p className='text-xl text-[#01003e] tracking-tight mt-6'>
							Celebrate the joy of accomplishment with the new version of our app with a fresh new look and feel, and a
							ton of new features.
						</p>
						<div className='flex gap-1 items-center mt-[2rem]'>
							<button className='btn btn-primary'>Get for free</button>
							<button className='btn btn-text'>
								<span>Learn more</span> <ArrowIcon className='w-6 h-6 ml-2' />
							</button>
						</div>
					</div>
					<div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
						<Image
							src={CongImage}
							alt='Cog'
							className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
						/>
						<Image
							src={cylinder}
							height={220}
							width={220}
							alt='Cylinder'
							className='hidden md:block md:absolute -top-8 -left-32'
						/>
						<Image
							src={noodle}
							height={220}
							width={220}
							alt='Noodle'
							className='hidden md:block absolute top-[524px] left-[448px] rotate-[30deg]'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
