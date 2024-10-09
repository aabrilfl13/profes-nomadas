import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import ReviewCard from "@/components/cards/ReviewCard"

const ReviewList = ({ reviews, sliderProps }) => {
	return (
		<section className="my-20 sm:my-32">
			<Swiper className="mySwiper" {...sliderProps}>
				{reviews.map((review, index) => (
					<SwiperSlide key={index} className="h-[150px] max-w-[300px] overflow-hidden rounded-lg">
						<ReviewCard data={review} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

ReviewList.propTypes = {
	reviews: PropTypes.array.isRequired,
	sliderProps: PropTypes.array.isRequired,
}

export default ReviewList
