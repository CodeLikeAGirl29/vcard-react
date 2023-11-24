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
import { ResumeSectionMusician } from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import { SkillsMusican } from "../src/components/sections/Skills";
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
<strong>Hello! I’m Paul Johnson.</strong> and I have been bringing old-time, good-time jug band music to audiences in western New York since 2008. Hailed as “America’s happiest music” jug band music has its roots in the country blues.
</p>`;

const serviceList = [
  {
    icon: "fa fa-microphone",
    title: "Lead Vocal",
    desc: "The lead vocalist in popular music is typically the member of a group.",
  },
  {
    icon: "fa fa-music",
    title: "Record Guitars",
    desc: "Music copying, writing, creating, transcription, arranging and composition services.",
  },
  {
    icon: "fa fa-soundcloud",
    title: "Soundcloud Mix",
    desc: "Made a great new DJ mix and you want to get it online and out to the world",
  },
  {
    icon: "fa fa-gamepad",
    title: "Music for Games, Apps",
    desc: "Developing tracks and unique music for android, ios and video games.",
  },
];

const headerMenus = [
  { title: "About", link: "about", icon: "icon ion-person" },
  { title: "Resume", link: "resume", icon: "icon ion-android-list" },
  { title: "Playlist", link: "works", icon: "icon ion-disc" },
  { title: "Blog", link: "blog", icon: "icon ion-chatbox-working" },
  { title: "Contact", link: "contacts", icon: "icon ion-at" },
];

const animationText = ["Musician", "Composer", "Singer", "Instrumentalist"];

const Index8 = () => {
  return (
    <Layout bg={"regular"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-8-colors.css" />
      </Head>
      <Header menus={headerMenus} animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile7.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Paul Johnson</div>
          {/*<div className="subtitle">Web Designer</div>*/}
          <TypingAnimation data={animationText} />

          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://soundcloud.com/">
              <span className="fa fa-soundcloud" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://bandcamp.com/">
              <span className="fa fa-bandcamp" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mixcloud.com/"
            >
              <span className="fa fa-mixcloud" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://instagram.com/">
              <span className="fa fa-instagram" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">My Playlist</span>
              <span className="ion ion-play" />
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="ion ion-email" />
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
          <Quote />
          <Clients />
        </About>
        <Resume>
          <ResumeSectionMusician />
          <SkillsMusican />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks user={"musician"} />
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
export default Index8;
