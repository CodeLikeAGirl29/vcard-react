/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Projects</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("photo")}`}
            onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="photo" />
              Image
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("frontend")}`}
            onClick={handleFilterKeyChange("frontend")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="frontend" />
              Frontend
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("design")}`}
            onClick={handleFilterKeyChange("design")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="design" />
              Design
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("branding")}`}
            onClick={handleFilterKeyChange("branding")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="branding" />
              Branding
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("content")}`}
            onClick={handleFilterKeyChange("content")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="content" />
              Content
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/works/work1.png" className="has-popup-image">
                  <img src="images/works/work1.png" alt="" />
                  <span className="info">
                    <span className="ion ion-code" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/works/work1.png"
                  className="name has-popup-image"
                >
                  Visit FL
                </a>
                <div className="category">frontend</div>
              </div>
            </div>
          </div>
          {/* work item video */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://unsplash-api-azure.vercel.app/"
                  className="has-popup-image"
                >
                  <img src="images/works/work2.png" alt="" />
                  <span className="info">
                    <span className="ion ion-paintbrush" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://www.github.com/codelikeagirl29/unsplash-api"
                  className="name has-popup-image"
                >
                  Unsplash Image Search
                </a>
                <div className="category">design</div>
              </div>
            </div>
          </div>
          {/* work item music */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://my-gitprofile.vercel.app/"
                  className="has-popup-image"
                >
                  <img src="images/works/work8.png" alt="" />
                  <span className="info">
                    <span className="ion ion-paintbrush" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://github.com/codelikeagirl29/gitprofile"
                  className="name has-popup"
                >
                  GitProfile
                </a>
                <div className="category">design</div>
              </div>
            </div>
          </div>
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/work4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/work4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Kitties in Space</h1>
                        <div className="blog-detail">frontend</div>
                        <div className="blog-content">
                          <p>
                            In the vast universe of web development, creating a
                            site that combines the charm of kittens with the
                            power of cutting-edge technologies is an exciting
                            endeavor. Join us on a cosmic journey as we explore
                            the creation of &quot;Kitties in Space,&quot; a delightful
                            website built with GraphQL, React, and Apollo.
                          </p>
                          <p>
                            &#34;Kitties in Space&#34; is not your ordinary cat-themed
                            website; it&apos;s an interactive space where feline
                            friends embark on intergalactic adventures. To bring
                            this celestial playground to life, we harnessed the
                            power of GraphQL for efficient data querying, React
                            for a seamless user interface, and Apollo Client to
                            manage our application&apos;s state.
                          </p>
                          <blockquote>
                            Where furballs meet stardust, and whiskers navigate
                            the cosmos – welcome to &apos;Kitties in
                            Space,&apos; where even the Milky Way can&apos;t
                            resist a sprinkle of purrfection!
                          </blockquote>
                          <p>
                            GraphQL serves as the backbone of our project,
                            allowing us to retrieve and manipulate data with
                            precision. By defining a schema that represents our
                            kitty-centric universe, we effortlessly fetch only
                            the data needed for each component, minimizing
                            latency and optimizing performance. With GraphQL,
                            our space kitties have a seamless communication
                            channel, ensuring a smooth browsing experience for
                            users.
                          </p>
                          <p>
                            Enter React, the framework that brings our space
                            kitties to life on the client side. Each component
                            is carefully crafted to encapsulate the logic and
                            appearance of a specific feature, fostering
                            modularity and maintainability. The virtual DOM
                            ensures efficient updates, providing a responsive
                            and interactive experience for users exploring the
                            cosmic adventures of our feline friends.
                          </p>
                          <p>
                            Apollo Client, the state management library, acts as
                            our spacecraft&apos;s control center, orchestrating
                            data flow between our React components and the
                            GraphQL server. With features like caching and local
                            state management, Apollo ensures that our space
                            kitties&apos; adventures are both smooth and
                            engaging. It seamlessly integrates with React,
                            enabling real-time updates and minimizing the
                            complexities of data handling.
                          </p>
                          <ul className="list-style">
                            <li>React</li>
                            <li>GraphQL</li>
                            <li>Fullstack</li>
                          </ul>
                          <p>
                            &quot;Kitties in Space&quot; is more than just a website;
                            it&apos;s a testament to the powerful synergy of
                            GraphQL, React, and Apollo. The ease of data
                            management, the responsiveness of the user
                            interface, and the real-time updates make this
                            project a stellar example of modern web development.
                          </p>
                        </div>
                        <a
                          href="https://catstronaut-bylindseyk.netlify.app/"
                          className="button pt-4"
                        >
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Kitties in Space
                </a>
                <div className="category">content</div>
              </div>
            </div>
          </div>
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/work6.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="gallery-1" className="mfp-hide">
                  <a href="images/works/work5.png" />
                  <a href="images/works/work1.png" />
                  <a href="images/works/work6.png" />
                </div>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup-image">
                  Profile Concept
                </a>
                <div className="category">frontend</div>
              </div>
            </div>
          </div>
          {/* work item music */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://github.com/CodeLikeAGirl29/dictionarium"
                  className="has-popup-image"
                >
                  <img src="images/works/work7.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="http://dictionarium.vercel.app/"
                  className="name has-popup"
                >
                  Dictionarium
                  <div className="category">frontend</div>
                </a>
              </div>
            </div>
          </div>
          {/* work item video */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item image border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://github.com/codelikeagirl29/my-blog"
                  className="has-popup-image"
                >
                  <img src="images/works/work3.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://codelikeagirl29.github.io/my-blog/"
                  className="name has-popup-image"
                >
                  BMW Blog
                </a>
                <div className="category">design</div>
              </div>
            </div>
          </div>
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-2" className="has-popup-media">
                  <img src="images/works/work8.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/work8.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h2>Florida Dream Blog</h2>
                        <div className="blog-detail">design</div>
                        <div className="blog-content">
                          <p className="text-slate-700">
                            Welcome to our vibrant corner of the web, where we&apos;re bringing the warmth of the Sunshine State to your screen. Our new blog design, &quot;Living the Florida Dream,&quot; is more than just a template—it&apos;s an invitation to immerse yourself in the laid-back lifestyle, coastal charm, and tropical vibes of Florida. Join us as we take a virtual stroll through the palm-lined beaches and vibrant communities of the Sunshine State right from the comfort of your digital space.
                          </p>
                          <p className="text-slate-700">
                            The design of our blog template captures the essence of Florida living with its coastal-inspired aesthetics. Picture a palette of serene blues, sandy neutrals, and pops of vibrant coral, reminiscent of the ocean and sunsets that paint the Florida sky. The layout is clean, inviting, and easy to navigate, mirroring the relaxed atmosphere that defines life in Florida.
                          </p>
                          <blockquote>
                            <p className="text-sky-400"> Living in Florida is like having a permanent vacation — every day is a chance to make a splash in the sunshine.</p>
                          </blockquote>
                          <p className="text-slate-700">
                            Florida is a visual paradise, and our blog template accentuates this with a focus on captivating imagery. From breathtaking sunsets over the Gulf of Mexico to the lively street scenes of Miami, the template provides ample space for high-quality visuals that bring your content to life. Whether you&apos;re a travel blogger, a local enthusiast, or someone looking to share their Florida experiences, our template is your canvas to paint the beauty of the Sunshine State.
                          </p>
                          <p className="text-neutral-700">Reasons why I love living in Florida:</p>
                          <ul className="list-style">
                            <li>Year-Round Sunshine ☀️ Enjoy a warm and sunny climate throughout the year, making outdoor activities and a beach lifestyle possible regardless of the season.</li>
                            <li>
                              World-Class Beaches 🏖️ With over 1,300 miles of coastline, Florida boasts some of the most beautiful beaches in the world, providing endless opportunities for relaxation, water sports, and stunning sunsets.
                            </li>
                            <li>
                              Thriving Cities 🏙️ From the vibrant nightlife of Miami to the historic charm of St. Augustine, Florida is home to diverse and dynamic cities, each with its own unique personality and attractions.
                            </li>
                            <li>Theme Park Capital 🎢 Orlando is known as the theme park capital of the world, hosting world-famous attractions like Walt Disney World, Universal Studios, and SeaWorld, providing entertainment for all ages.</li>
                            <li>No State Income Tax 💸 Enjoy the financial perk of living in a state with no personal income tax, making it an attractive destination for those looking to save on taxes.</li>
                          </ul>
                          <p>
                            Embark on a digital journey through the sun-soaked landscapes and vibrant culture of Florida with our &quot;Living the Florida Dream&quot; blog template. Whether you&apos;re a seasoned Floridian or an armchair traveler dreaming of coastal living, this template is your passport to the ultimate Sunshine State experience. Dive in, explore, and start sharing your Florida dream today!
                          </p>
                        </div>
                        <a href="https://codelikeagirl29.github.io/my-blog/" className="button pt-4">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-2" className="name has-popup-media">
                  Florida Dreaming Blog
                </a>
                <div className="category">frontend</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
