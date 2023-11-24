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
import { ResumeSectionFitness } from "../src/components/sections/Resume";
// import RecentWorksFitness from "../src/components/sections/recentWorks/RecentWorksFitness";
import Services from "../src/components/sections/Services";
import { SkillsFitness } from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

const RecentWorksFitness = dynamic(
  () => import("../src/components/sections/recentWorks/RecentWorksFitness"),
  {
    ssr: false,
  }
);

const bio = `<p>
<strong>Hello!</strong>
Personal &amp; Fitness trainer from USA, New York. I have
knowledge of general fitness involved in exercise
prescription and motivate clients by setting goals,
providing feedback.
</p>`;

const serviceList = [
  {
    icon: "fa fa-child",
    title: "Fitness Trainer",
    desc: "We offer personal training and nutrition coaching to help you achieve goals faster!",
  },
  {
    icon: "fa fa-heartbeat",
    title: "Cardio Training    ",
    desc: "Cardio training increases endurance, and hence the intensity of training.",
  },
  {
    icon: "fa fa-circle",
    title: "Workout Training",
    desc: "Medicine balls are versatile, portable and a fad that’s lasted the test of time.",
  },
  {
    icon: "fa fa-cutlery",
    title: "Proper Nutrition    ",
    desc: "Good nutrition is an important part of leading a healthy lifestyle.",
  },
];

const headerMenus = [
  { title: "About", link: "about", icon: "icon ion-person" },
  { title: "Resume", link: "resume", icon: "icon ion-android-list" },
  { title: "Gallery", link: "works", icon: "icon ion-images" },
  { title: "Blog", link: "blog", icon: "icon ion-chatbox-working" },
  { title: "Contact", link: "contacts", icon: "icon ion-at" },
];

const animationText = ["Personal Trainer", "Body builder", "Fitness Trainer"];

const Index5 = () => {
  return (
    <Layout bg={"img"} bgImgUrl="images/bg3.jpg">
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/rtl-new.css" />
        <link rel="stylesheet" href="css/demos/demo-5-colors.css" />
      </Head>
      <Header noSideBarBtn menus={headerMenus} animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile4.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Daniel Wilson</div>
          <TypingAnimation data={animationText} />

          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://instagram.com/">
              <span className="fa fa-instagram" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://facebook.com/">
              <span className="fa fa-facebook-f" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="ion ion-paper-airplane" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services serviceList={serviceList} />
          <Pricing />
          <FunFact />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSectionFitness />
          <SkillsFitness />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorksFitness />
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
export default Index5;
