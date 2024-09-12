const Hero = () => {
	return (
		<section>
			<div className='container'>
				<div>
					<div
						className='
          text-sm inline-flex border  border-[#222]/10 px-3 rounded-lg tracking-tight
          '
					>
						Version 20.0 is here
					</div>
					<h1 className='text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6'>
						Pathway to productivity
					</h1>
					<p className='text-xl text-[#01003e] tracking-tight mt-6'>
						Celebrate the joy of accomplishment with the new version of our app with a fresh new look and feel, and a
						ton of new features.
					</p>
					<div className='flex gap-1 items-center mt-[2rem]'>
						<button className='btn btn-primary'>Get for free</button>
						<button className='btn btn-text'>Learn more</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
