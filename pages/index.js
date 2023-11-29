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
👋 I am Lindsey, a Frontend Developer from Florida. Passionate about crafting captivating digital experiences through code, I am a skilled Frontend Web Developer with a keen eye for design & a knack for turning ideas into interactive web solutions.
</p>`;
function IndexDark() {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <Script src="https://kit.fontawesome.com/29b275fb0c.js"></Script>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/avatar1.png)" }}
          />
          <div className="title">
            <h3 className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans font-semibold leading-tight tracking-normal text-transparent antialiased"> Lindsey Howard</h3>
          </div>

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
            <a target="_blank" rel="noreferrer" href="https://medium.com/@lindseykdev">
              <span className="fa fa-medium" />
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
          <Quote />
          <Services />
          <FunFact />
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
}
export default IndexDark;
