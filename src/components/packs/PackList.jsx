import Pack from "@/components/packs/Pack"

const PackList = ({ packs }) => {
	return (
		<div className="pack-list mt-5 flex flex-col items-center">
			<h1 className="text-2xl">Maestros en Irlanda</h1>
			{/* Loop through the packs that are inserted from the packsData */}
			{packs.map((pack, index) => (
				<Pack key={index} {...pack} />
			))}
		</div>
	)
}

export default PackList
