import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
//import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
//import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

const RecentWorks = dynamic(
	() => import("../src/components/sections/RecentWorks"),
	{
		ssr: false,
	}
);

const bio = `<p>
👋 <strong>I am Lindsey</strong>, a Frontend Developer from Florida. Passionate about crafting captivating digital experiences through code, I am a skilled Frontend Web Developer with a keen eye for design & a knack for turning ideas into interactive web solutions.
</p>`;

const services = [
	{
		icon: "fa fa-code",
		title: "Web Development",
		desc: "Can leverage my knowledge about JavaScript, HTML, CSS to create a robust & effective application.",
	},
	{
		icon: "fa-brands fa-google",
		title: "Digital Marketing",
		desc: "Strategically increases your company's visibility and creating a customized business plan for your specific needs.",
	},
	{
		icon: "fa-brands fa-react",
		title: "Analysis & Planning",
		desc: "Someone who you can depend on to work on both the back-end and front-end of systems; with a unique perspective about business stemming from my background in Sales and Marketing Analytics.",
	},
	{
		icon: "fa-solid fa-calendar",
		title: "Fast Delivery",
		desc: "With a nimble coding prowess & a commitment to efficiency, I specialize in delivering swift and seamless web solutions. From rapid prototyping to agile development, I ensure the fastest turnaround.",
	},
];

const animationText = [
	"Frontend Developer",
	"Blogger",
	"Freelancer",
	"Programmer",
];

const Index3 = () => {
	return (
		<Layout bg={"gradient"}>
			<Head>
				<link rel="stylesheet" href="css/new-skin/new-skin.css" />
				<link rel="stylesheet" href="css/demos/demo-3-colors.css" />
				<link rel="stylesheet" href="css/new-skin/classic-skin.css" />
			</Head>
			<Header noSideBarBtn animationText={animationText} />
			<Home>
				<Script src="https://kit.fontawesome.com/29b275fb0c.js"></Script>
				<div className="profile no-photo">
					{/* profile image */}
					<div
						className="slide"
						style={{ backgroundImage: "url(images/avatar1.webp)" }}
					/>
					{/* profile titles */}
					<div className="title">Lindsey Howard</div>

					<TypingAnimation data={animationText} />
					{/* profile socials */}
					<div className="social">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://dribbble.com/codelikeagirl29"
						>
							<span className="fa fa-dribbble" />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://twitter.com/dev_lindseyk"
						>
							<span className="fa fa-twitter" />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/codelikeagirl29"
						>
							<span className="fa fa-github" />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/lindsey-howard"
						>
							<span className="fa fa-linkedin" />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://medium.com/@lindseykdev"
						>
							<span className="fa fa-medium" />
						</a>
					</div>
					{/* profile buttons */}
					<div className="lnks">
						<a
							href="https://drive.google.com/file/d/1dBUdOj7VKZI21w6MW82IwtJBhXS8jXhy/view?usp=drive_link"
							className="lnk"
						>
							<span className="text">Download CV</span>
							<span className="ion ion-android-download" />
						</a>
					</div>
				</div>
			</Home>
			<ContentContainer>
				<About>
					<AboutMe bio={bio} />
					<Services serviceList={services} />
					<Testimonials />
					<FunFact />
				</About>
				<Resume>
					<ResumeSection />
					<Skills />
					<Quote />
				</Resume>
				<Work>
					<RecentWorks />
				</Work>
				<Blog>
					<BlogSection />
				</Blog>
				<Contact>
					<ContactInfo />
					<ContactForm />
				</Contact>
			</ContentContainer>
		</Layout>
	);
};
export default Index3;
