import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import PackList from "@/components/packs/PackList"
import TikTokList from "@/components/tiktok/TikTokList"
import { packsData, reviewsData, tiktokData } from "@/data/constants"
import ReviewList from "@/components/reviews/ReviewList"
import { sliderProps } from "@/data/constants"
const HomePage = () => {
	return (
		<div>
			{/* Esto es para ir viend como queda */}
			<Header />
			<Hero />
			<PackList packs={packsData} />
			<TikTokList tiktoks={tiktokData} sliderProps={sliderProps} />
			<ReviewList reviews={reviewsData} sliderProps={sliderProps} />
			
		</div>
	)
}

export default HomePage
