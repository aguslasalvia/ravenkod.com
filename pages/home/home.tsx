import Divider from '../../components/divider/divider'
import ProcessSection from '../../components/sections/process-section'
import ServiceSection from '../../components/sections/service-section'
import TeamSection from '../../components/sections/team-section'
import WhyUsSection from '../../components/sections/why-us-section'
export default function Home() {
	return (
		<>
			{/* <Divider /> */}
			<ServiceSection />
			<Divider />
			<ProcessSection />
			<Divider />
			<WhyUsSection />

			<Divider />
			<TeamSection />
			<Divider />
			<section id="contact"></section>
		</>
	)
}