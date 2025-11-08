import Header from "@/components/Header"
import About from "@/components/About"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import CallToAction from "@/components/CallToAction"
import UniqueValuePropositions from "@/components/UniqueValuePropositions"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

const HomePage = () => {
	return (
		<div className="min-h-screen font-body">
			<Header />
			<About />
			<Stats />
			<Services />
			<CallToAction />
			<UniqueValuePropositions />
			<Testimonials />
			<Footer />
		</div>
	)
}

export default HomePage
