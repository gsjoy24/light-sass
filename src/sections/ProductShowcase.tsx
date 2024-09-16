import Image from 'next/image';
import productImg from '../assets/product-image.png';
import pyramIdImg from '../assets/pyramid.png';
import tubeImg from '../assets/tube.png';

const ProductShowcase = () => {
	return (
		<section className='bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-hidden'>
			<div className='container'>
				<div className='section-heading'>
					<div className='flex justify-center'>
						<div className='tag'>Boost your productivity</div>
					</div>
					<h2 className='section-title mt-5'>A more effective way to track your progress</h2>
					<p className='section-description mt-5'>
						Efficiently manage your projects, track progress, and collaborate with your team in real time. All in one
						place.
					</p>
				</div>
				<div className='relative'>
					<Image src={productImg} alt='Product Image' className='mt-10' />
					<Image
						src={pyramIdImg}
						alt='Pyramid Image'
						height={262}
						width={262}
						className='hidden md:block absolute -right-36 -top-32'
					/>
					<Image
						src={tubeImg}
						alt='Tube Image'
						height={262}
						width={262}
						className='hidden md:block absolute -left-36 bottom-24'
					/>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;
