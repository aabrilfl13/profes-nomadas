import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import PackList from "@/components/packs/PackList"
import { packsData } from "@/data/packsData"

const HomePage = () => {
	return (
		<div>
			{/* Esto es para ir viend como queda */}
			<Header />
			<Hero />
			<PackList packs={packsData} />
		</div>
	)
}

export default HomePage
