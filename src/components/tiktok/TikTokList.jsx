import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import TikTokCard from "../cards/TikTokCard"

const TikTokList = ({ tiktoks, sliderProps }) => {
	return (
		<section className="my-20 sm:my-32">
			<Swiper className="mySwiper" {...sliderProps}>
				{tiktoks.map((tiktok, index) => (
					<SwiperSlide key={index} className="h-[500px] max-w-[280px] overflow-hidden rounded-3xl">
						<TikTokCard data={tiktok} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

TikTokList.propTypes = {
	tiktoks: PropTypes.array.isRequired,
	sliderProps: PropTypes.array.isRequired,
}

export default TikTokList
