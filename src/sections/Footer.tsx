import logo from '@/assets/logosaas.png';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedin from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialX from '@/assets/social-x.svg';
import SocialTube from '@/assets/social-youtube.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
			<div className='container'>
				<div className="inline-flex relative before:content-[''] before:h-full before:w-full before:bottom-0 before:top-2 before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
					<Image src={logo} alt='logo' width={40} height={40} className='relative' />
				</div>
				<nav className='flex flex-col md:flex-row justify-center gap-6 mt-6'>
					<Link href='/'>About</Link>
					<Link href='/'>Features</Link>
					<Link href='/'>Customers</Link>
					<Link href='/'>Pricing</Link>
					<Link href='/'>Help</Link>
					<Link href='/'>Careers</Link>
				</nav>
				<div className='flex justify-center gap-6 my-6'>
					<SocialX />
					<SocialLinkedin />
					<SocialPin />
					<SocialTube />
					<SocialInsta />
				</div>
				<p>
					&copy; {currentYear} SaaS. All rights reserved. Recreated by{' '}
					<Link className='underline underline-offset-4' href='http://goursahajoy.me/'>
						Gour Saha Joy
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
