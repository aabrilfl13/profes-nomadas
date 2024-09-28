import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import PackList from "@/components/packs/PackList"
import TikTokList from "@/components/tiktok/TikTokList"
import { packsData, tiktokData } from "@/data/constants"
import ReviewCard from "@/components/cards/ReviewCard"
const HomePage = () => {
	return (
		<div>
			{/* Esto es para ir viend como queda */}
			<Header />
			<Hero />
			<PackList packs={packsData} />
			<TikTokList tiktoks={tiktokData} />
			<ReviewCard/>
			
		</div>
	)
}

export default HomePage
