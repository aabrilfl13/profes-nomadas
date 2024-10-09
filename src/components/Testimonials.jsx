const Testimonials = () => {
	return (
		<section className="bg-gray-100 py-12">
			<div className="mb-12 text-center">
				<h3 className="mb-2 uppercase text-yellow-500">Prefix For The Testimonials Section</h3>
				<h2 className="text-4xl font-bold">Heading For The Testimonials Section Will Be Here</h2>
			</div>
			<div className="flex justify-around">
				{["Testimonial Author Name", "Testimonial Author Name"].map((author, index) => (
					<div key={index} className="w-1/3 rounded-lg bg-white p-6 text-center shadow-lg">
						<p className="text-gray-600">
							"We will write a testimonial from a satisfied customer..."
						</p>
						<p className="mt-4 font-bold">{author}</p>
						<p className="text-yellow-500">★★★★★</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Testimonials
