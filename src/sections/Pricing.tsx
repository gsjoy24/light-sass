'use client';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

const pricingTiers = [
	{
		title: 'Free',
		monthlyPrice: 0,
		buttonText: 'Get started for free',
		popular: false,
		inverse: false,
		features: [
			'Up to 5 project members',
			'Unlimited tasks and projects',
			'2GB storage',
			'Integrations',
			'Basic support'
		]
	},
	{
		title: 'Pro',
		monthlyPrice: 9,
		buttonText: 'Sign up now',
		popular: true,
		inverse: true,
		features: [
			'Up to 50 project members',
			'Unlimited tasks and projects',
			'50GB storage',
			'Integrations',
			'Priority support',
			'Advanced support',
			'Export support'
		]
	},
	{
		title: 'Business',
		monthlyPrice: 19,
		buttonText: 'Sign up now',
		popular: false,
		inverse: false,
		features: [
			'Up to 5 project members',
			'Unlimited tasks and projects',
			'200GB storage',
			'Integrations',
			'Dedicated account manager',
			'Custom fields',
			'Advanced analytics',
			'Export capabilities',
			'API access',
			'Advanced security features'
		]
	}
];

const Pricing = () => {
	return (
		<section className='bg-white py-24'>
			<div className='container'>
				<div className='section-heading'>
					<h2 className='section-title'>Pricing</h2>
					<p className='section-description mt-5'>
						Free forever. Upgrade for unlimited tasks, better security, and more features.
					</p>
				</div>

				<div className='flex flex-col lg:flex-row gap-6 items-center lg:items-end lg:justify-center'>
					{pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }, index) => (
						<div key={index} className={twMerge('card', inverse === true && 'border-black bg-black text-white')}>
							<div className='flex justify-between'>
								<h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>
									{title}
								</h3>
								{popular && (
									<div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
										<motion.span
											animate={{
												backgroundPositionX: '-100%'
											}}
											transition={{
												repeat: Infinity,
												duration: 1,
												ease: 'linear',
												repeatType: 'loop'
											}}
											className='bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] bg-clip-text text-transparent font-medium [background-size:200%]'
										>
											Popular
										</motion.span>
									</div>
								)}
							</div>
							<div className='flex items-baseline gap-1 mt-[2rem]'>
								<span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
								<span
									className={twMerge('tracking-tight font-bold text-black/50', inverse === true && 'text-white/60')}
								>
									/month
								</span>
								<span></span>
							</div>
							<button
								className={twMerge('btn btn-primary w-full mt-[2rem]', inverse === true && 'bg-white text-black')}
							>
								{buttonText}
							</button>
							<ul className='flex flex-col gap-5 mt-8'>
								{features.map((feature, index) => (
									<li key={index} className='text-sm flex items-center gap-4'>
										<FaCheck /> {feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
