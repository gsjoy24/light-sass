'use client';
import springImg from '@/assets/spring.png';
import starImg from '@/assets/star.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const CallToAction = () => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start']
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
	return (
		<section ref={sectionRef} className='bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-hidden'>
			<div className='container'>
				<div className='section-heading relative'>
					<h2 className='section-title mt-5'>Signup for free today</h2>
					<p className='section-description mt-5'>
						Celebrate your success with our exclusive features. Get started for free today. No credit card required.
					</p>
					<motion.img
						src={starImg.src}
						alt='star'
						width={360}
						height={360}
						className='absolute -left-[350px] -top-[137px]'
						style={{
							translateY
						}}
					/>
					<motion.img
						src={springImg.src}
						alt='spring'
						width={360}
						height={360}
						className='absolute -right-[331px] -top-[19px]'
						style={{
							translateY
						}}
					/>
					<div className='flex gap-2 justify-center mt-10'>
						<button className='btn btn-primary'>Get for free</button>
						<button className='btn btn-text flex gap-2'>
							<span>Learn more</span> <FaArrowRightLong />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
