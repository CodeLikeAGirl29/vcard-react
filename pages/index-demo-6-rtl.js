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
import { FunFactWriter } from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import { ResumeSectionWritter } from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import { SkillsWritter } from "../src/components/sections/Skills";
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
const bio = `<p>I'm <strong>Demetrius Bernard</strong> author bestseller books, won the Hugo Award for Best Novel. Writing science fiction, including the New York Times bestseller. I also writes non-fiction, on subjects ranging from personal finance to astronomy to film.</p>`;

const serviceList = [
  {
    icon: "fa fa-book",
    title: "Writing Books",
    desc: "Write the argument of your book in a sentence, then stretch that out to a paragraph.",
  },
  {
    icon: "fa fa-video-camera",
    title: "Screenwriting",
    desc: "Spec scripts are feature film or television show scripts written on speculation of sale.",
  },
  {
    icon: "fa fa-newspaper-o",
    title: "Writing Newspaper",
    desc: "news-writing style is the prose style used for news reporting in media such as television.",
  },
  {
    icon: "fa fa-gamepad",
    title: "Writing Resumes",
    desc: "professional resume-writing service has helped over 400,000 professionals land more interviews.",
  },
];

const animationText = ["Writer", "Author", "Blogger"];

const Index7 = () => {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/rtl-new.css" />
        <link rel="stylesheet" href="css/demos/demo-7-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
      </Head>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile6.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Demetrius Bernard</div>
          {/*<div className="subtitle">Web Designer</div>*/}
          <TypingAnimation data={animationText} />

          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://medium.com/">
              <span className="fa fa-medium" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://facebook.com/">
              <span className="fa fa-facebook-f" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/">
              <span className="fa fa-linkedin" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
              <span className="ion ion-android-attach" />
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Hire Me</span>
              <span className="ion ion-android-mail" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services serviceList={serviceList} />
          <Pricing />
          <FunFactWriter />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSectionWritter />
          <SkillsWritter />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks user={"writer"} />
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
export default Index7;
