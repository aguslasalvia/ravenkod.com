import Divider from '../../components/divider/divider'
import ServiceSection from '../../components/sections/service-section'

export default function Home() {
	return (
		<>
			{/* <Divider /> */}
			<ServiceSection />
			<Divider />
			<section id="process"></section>
			<Divider />
			<section id="why"></section>
			<Divider />
			<section id="team"></section>
			<Divider />
			<section id="contact"></section>
		</>
	)
}