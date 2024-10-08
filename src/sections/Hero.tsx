'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ArrowIcon from '../assets/arrow-right.svg';
import CongImage from '../assets/cog.png';
import cylinder from '../assets/cylinder.png';
import noodle from '../assets/noodle.png';

const Hero = () => {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start end', 'end start']
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
	return (
		<section
			className='pt-8 pb-20 md:pt-4 md:pb-10 overflow-x-clip'
			style={{
				background: 'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)'
			}}
			ref={heroRef}
		>
			<div className='container'>
				<div className='md:flex items-center'>
					<div className='md:w-[478px]'>
						<div className='tag'>Version 2.0 is here</div>
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
						<motion.img
							src={CongImage.src}
							alt='Cog'
							className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
							animate={{
								translateY: [-30, 30]
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: 'mirror',
								ease: 'easeInOut'
							}}
						/>
						<motion.img
							src={cylinder.src}
							height={220}
							width={220}
							alt='Cylinder'
							className='hidden md:block md:absolute -top-8 -left-32'
							style={{
								translateY
							}}
						/>
						<motion.img
							src={noodle.src}
							height={220}
							width={220}
							alt='Noodle'
							className='hidden md:block absolute top-[524px] left-[448px] rotate-[30deg]'
							style={{
								translateY
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
