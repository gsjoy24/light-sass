'use client';
import celestialLogo from '@/assets//logo-celestial.png';
import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import echoLogo from '@/assets/logo-echo.png';
import pulseLogo from '@/assets/logo-pulse.png';
import quantumLogo from '@/assets/logo-quantum.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LogoTicker = () => {
	return (
		<div className='py-8 md:py-12 bg-white'>
			<div className='container'>
				<div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
					<motion.div
						className='flex gap-14 flex-none pr-14'
						animate={{
							translateX: '-50%'
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'loop',
							ease: 'linear'
						}}
					>
						<Image src={celestialLogo} alt='Celestial Logo' className='logo-ticker-img' />
						<Image src={acmeLogo} alt='Acme Logo' className='logo-ticker-img' />
						<Image src={apexLogo} alt='Apex Logo' className='logo-ticker-img' />
						<Image src={pulseLogo} alt='Pulse Logo' className='logo-ticker-img' />
						<Image src={quantumLogo} alt='Quantum Logo' className='logo-ticker-img' />
						<Image src={echoLogo} alt='Echo Logo' className='logo-ticker-img' />
						{/* second set */}
						<Image src={celestialLogo} alt='Celestial Logo' className='logo-ticker-img' />
						<Image src={acmeLogo} alt='Acme Logo' className='logo-ticker-img' />
						<Image src={apexLogo} alt='Apex Logo' className='logo-ticker-img' />
						<Image src={pulseLogo} alt='Pulse Logo' className='logo-ticker-img' />
						<Image src={quantumLogo} alt='Quantum Logo' className='logo-ticker-img' />
						<Image src={echoLogo} alt='Echo Logo' className='logo-ticker-img' />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default LogoTicker;
