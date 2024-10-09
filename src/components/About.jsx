const About = () => {
	return (
		<section className="py-20">
			<div className="text-center">
				<h3 className="mb-2 uppercase text-yellow-500">Prefix for the Company's About Section</h3>
				<h2 className="mb-4 text-4xl font-bold">
					Headline For The Company’s About Section Will Be Here
				</h2>
				<p className="mx-auto max-w-2xl text-lg">
					In this part, we will introduce you or your business to website visitors...
				</p>
				<button className="mt-6 rounded-full bg-yellow-500 px-6 py-3">Read More</button>
			</div>
			<div className="mt-12 flex justify-center space-x-8">
				<img src="/path-to-image1.jpg" alt="image1" className="w-1/3 rounded-lg shadow-lg" />
				<img src="/path-to-image2.jpg" alt="image2" className="w-1/3 rounded-lg shadow-lg" />
			</div>
		</section>
	)
}

export default About
