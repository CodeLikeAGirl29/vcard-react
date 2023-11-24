import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
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
I am Lindsey, frontend developer from Florida. Passionate about crafting captivating digital experiences through code, I am a skilled Frontend Web Developer with a keen eye for design and a knack for turning ideas into interactive web solutions. With a strong foundation in HTML, CSS, and JavaScript, I combine technical expertise with a creative mindset to build user-friendly, responsive, and visually appealing websites.
</p>`;
const IndexDarkRtl = () => {
	return (
		<Layout bg={"gradient"}>
			<Head>
				<link rel="stylesheet" href="css/new-skin/new-skin.css" />
				<link rel="stylesheet" href="css/rtl-new.css" />
				<link rel="stylesheet" href="css/new-skin/classic-skin.css" />
				<link rel="stylesheet" href="css/template-dark/dark.css" />
			</Head>
			<Header />
			<Home>
				<div className="profile">
					<div
						className="slide"
						style={{ backgroundImage: "url(images/bg.jpg)" }}
					/>
					<div className="image">
						<img src="images/profile.png" alt="" />
					</div>
					<div className="title">Lindsey K</div>
					<TypingAnimation />
					<div className="social">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://dribbble.com/codelikeagirl91"
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
						<a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
							<span className="fa fa-linkedin" />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://stackoverflow.com/"
						>
							<span className="fa fa-stack-overflow" />
						</a>
					</div>
					{/* profile buttons */}
					<div className="lnks">
						<a href="#" className="lnk">
							<span className="text">Download CV</span>
						</a>
						<a href="#" className="lnk discover">
							<span className="text">Contact Me</span>
						</a>
					</div>
				</div>
			</Home>
			<ContentContainer>
				<About>
					<AboutMe bio={bio} />
					<Services />
					<Pricing />
					<FunFact />
					<Clients />
					<Quote />
				</About>
				<Resume>
					<ResumeSection />
					<Skills />
					<Testimonials />
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
export default IndexDarkRtl;
