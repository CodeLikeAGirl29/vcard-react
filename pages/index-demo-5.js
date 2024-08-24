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
import { ResumeSectionLawyer } from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import { SkillsLawyer } from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
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
<strong>Hello! I’m Casandra Wood.</strong><br>
Lawyer from UK, London. I have licensed by the state in which I practice to advise and represent clients on legal matters including animal rights.
</p>`;

const serviceList = [
  {
    icon: "fa fa-balance-scale",
    title: "Criminal Law",
    desc: "Proscribes conduct perceived as threatening, harmful, or otherwise endangering to the property.",
  },
  {
    icon: "fa fa-bank",
    title: "Business Law",
    desc: "governs business and commerce and is often considered to be a branch of civil law and deals",
  },
  {
    icon: "fa fa-gavel",
    title: "Legal Services",
    desc: "Provides a wide range of legal services in all regions of London.",
  },
  {
    icon: "fa fa-money",
    title: "Finance",
    desc: "Provides a wide range of finance services in all regions of London.",
  },
];

const headerMenus = [
  { title: "About", link: "about", icon: "icon ion-person" },
  { title: "Resume", link: "resume", icon: "icon ion-android-list" },
  { title: "Cases", link: "works", icon: "icon ion-filing" },
  { title: "Articles", link: "blog", icon: "icon ion-ios-paper" },
  { title: "Contact", link: "contacts", icon: "icon ion-paper-airplane" },
];

const Index6 = () => {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-6-colors.css" />
      </Head>
      <Header menus={headerMenus} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile5.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Casandra Wood</div>
          <div className="subtitle">Lawyer</div>
          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://facebook.com/">
              <span className="fa fa-facebook-f" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://instagram.com/">
              <span className="fa fa-instagram" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
              <span className="ion ion-android-download" />
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="ion ion-android-contact" />
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
          <ResumeSectionLawyer />
          <SkillsLawyer />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks user={"lawyer"} />
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
export default Index6;
