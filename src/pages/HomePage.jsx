import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import PackList from "@/components/packs/PackList"
import TikTokList from "@/components/tiktok/TikTokList"
import { packsData, tiktokData } from "@/data/constants"

const HomePage = () => {
	return (
		<div>
			{/* Esto es para ir viend como queda */}
			<Header />
			<Hero />
			<PackList packs={packsData} />
			<TikTokList tiktoks={[tiktokData[0]]} />
		</div>
	)
}

export default HomePage
