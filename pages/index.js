import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
// import TypingAnimation from "../src/components/TypingAnimation";
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
I am Lindsey, a Frontend Developer from Florida. Passionate about crafting captivating digital experiences through code, I am a skilled Frontend Web Developer with a keen eye for design & a knack for turning ideas into interactive web solutions.
</p>`;
const IndexDark = () => {
	return (
		<Layout bg={"blured"}>
			<Head>
				<link rel="stylesheet" href="css/new-skin/new-skin.css" />
				<link rel="stylesheet" href="css/template-dark/dark.css" />
				<link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
			</Head>
			<Header />
			<Home>
				<div className="profile no-photo">
					<div
						className="slide"
						style={{ backgroundImage: "url(images/avatar1.png)" }}
					/>
					<div className="title font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
						Lindsey Howard
					</div>

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
							href="https://stackoverflow.com/users/14072521/lindsey"
						>
							<span className="fa fa-stack-overflow" />
						</a>
					</div>
					{/* profile buttons */}
					<div className="lnks">
						<a
							href="https://drive.google.com/file/d/10UygQRZXw07bKOSZ0fIfgSr9TqJdmBHg/view?usp=sharing"
							className="lnk"
						>
							<span className="text">Download CV</span>
							<span className="ion ion-ios-cloud-download"></span>
						</a>
						<a href="mailto:lindseykdev@gmail.com" className="lnk discover">
							<span className="text">Contact Me</span>
							<span className="ion ion-paper-airplane"></span>
						</a>
					</div>
				</div>
			</Home>
			<ContentContainer>
				<About>
					<AboutMe bio={bio} />
					<Services />
					<FunFact />
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
export default IndexDark;
