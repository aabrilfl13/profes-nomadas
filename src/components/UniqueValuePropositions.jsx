const UniqueValuePropositions = () => {
	return (
		<section className="py-20">
			<div className="mb-12 text-center">
				<h3 className="mb-2 uppercase text-yellow-500">
					Prefix Describing Your Unique Value Propositions
				</h3>
				<h2 className="text-4xl font-bold">
					Headline Describing Your Unique Value Propositions Will Be Here
				</h2>
			</div>
			<div className="flex justify-around">
				{[
					"Unique Value Proposition 1",
					"Unique Value Proposition 2",
					"Unique Value Proposition 3",
				].map((value, index) => (
					<div key={index} className="w-1/3 text-center">
						<h4 className="text-2xl font-bold">{value}</h4>
						<p className="mt-4 text-gray-600">
							In this part, we will write about what makes your business unique...
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default UniqueValuePropositions
