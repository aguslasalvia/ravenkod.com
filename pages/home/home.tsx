import ContactSection from '../../components/sections/contact-section'
import Divider from '../../components/divider/divider'
import HeroSection from '../../components/sections/hero-section'
import ProcessSection from '../../components/sections/process-section'
import ServiceSection from '../../components/sections/service-section'
import TeamSection from '../../components/sections/team-section'
import WhyUsSection from '../../components/sections/why-us-section'
export default function Home() {
	return (
		<>
			<HeroSection />
			<Divider />
			<ServiceSection />
			<Divider />
			<ProcessSection />
			<Divider />
			<WhyUsSection />

			<Divider />
			<TeamSection />
			<Divider />
			<ContactSection />
		</>
	)
}