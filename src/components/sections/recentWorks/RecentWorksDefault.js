/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksDefault = () => {
  const isotope = useRef(null);
  const containerRef = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Wait for all images to load before Isotope measures heights
    imagesLoaded(containerRef.current, () => {
      isotope.current = new Isotope(containerRef.current, {
        itemSelector: ".grid-item",
        percentPosition: true,
        layoutMode: "fitRows",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    });

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (!isotope.current) return;
    isotope.current.arrange({
      filter: filterKey === "*" ? "*" : `.${filterKey}`,
    });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="title mb-6">Recent Projects</div>

        <div className="filter-menu filter-button-group mb-8 flex flex-wrap gap-3">
          {[
            { key: "*", label: "All" },
            { key: "photo", label: "Image" },
            { key: "frontend", label: "Frontend" },
            { key: "design", label: "Design" },
            { key: "branding", label: "Branding" },
            { key: "content", label: "Content" },
          ].map(({ key, label }) => (
            <div
              key={key}
              className={`f_btn ${activeBtn(key)}`}
              onClick={handleFilterKeyChange(key)}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue={key} />
                {label}
              </label>
            </div>
          ))}
        </div>

        {/* ref added here so imagesLoaded can watch this container */}
        <div ref={containerRef} className="row grid-items border-line-v">
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/works/work1.webp" className="has-popup-image">
                  <img src="images/works/work1.webp" alt="Visit FL" />
                  <span className="info">
                    <span className="ion ion-code" />
                  </span>
                </a>
              </div>
              <div className="desc m-4">
                <a
                  href="images/works/work1.webp"
                  className="name has-popup-image"
                >
                  Visit FL
                </a>
                <div className="category">frontend</div>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://unsplash-collections.vercel.app/"
                  className="has-popup-image"
                >
                  <img
                    src="images/works/work2.webp"
                    alt="Unsplash Image Search"
                  />
                  <span className="info">
                    <span className="ion ion-paintbrush" />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
                <a
                  href="https://www.github.com/codelikeagirl29/unsplash-collections"
                  className="name has-popup-image"
                >
                  Unsplash Image Search
                </a>
                <div className="category">design</div>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://my-gitprofile.vercel.app/"
                  className="has-popup-image"
                >
                  <img src="images/works/work4.png" alt="GitProfile" />
                  <span className="info">
                    <span className="ion ion-paintbrush" />
                  </span>
                </a>
              </div>
              <div className="desc m-4">
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

          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/work4.webp" alt="Aqua Eden" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/work4.webp" alt="Aqua Eden" />
                    </div>
                    <div className="desc p-4">
                      <div className="post-box">
                        <h1>Aqua Eden</h1>
                        <div className="blog-detail">design</div>
                        <div className="blog-content">
                          <p>
                            Welcome to Aqua Eden, an immersive web project that
                            brings the enchanting world of aquariums to your
                            fingertips!
                          </p>
                          <p>
                            &#34;Aqua Eden&#34; is not just a website; it&apos;s
                            a digital voyage into the wonders of the underwater
                            realm.
                          </p>
                          <blockquote>
                            Dive into the wonders of Aqua Eden, where every
                            ripple tells a tale of oceanic enchantment. 🌊✨
                          </blockquote>
                          <ul className="list-style">
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Netlify</li>
                          </ul>
                        </div>
                        <a
                          href="https://aquaeden.netlify.app/"
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
              <div className="desc m-4">
                <a href="#popup-1" className="name has-popup-media">
                  Aqua Eden
                </a>
                <div className="category">design</div>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/work6.webp" alt="Profile Concept" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="gallery-1" className="mfp-hide">
                  <a href="images/works/work5.webp" />
                  <a href="images/works/work1.webp" />
                  <a href="images/works/work6.webp" />
                </div>
              </div>
              <div className="desc p-4">
                <a href="#" className="name has-popup-image">
                  Profile Concept
                </a>
                <div className="category">frontend</div>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://github.com/CodeLikeAGirl29/dictionarium"
                  className="has-popup-image"
                >
                  <img src="images/works/work7.webp" alt="Dictionarium" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
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

          <div className="col col-d-6 col-t-6 col-m-12 grid-item content border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://github.com/CodeLikeAGirl29/harborlight-case-study"
                  className="has-popup-image"
                >
                  <img
                    src="https://res.cloudinary.com/dhw9dl4gm/image/upload/v1764363453/Case-Study-HarborLight-Charters-_-Destin-FL-11-28-2025_02_56_PM_hhabre.png"
                    alt="HarborLight Case Study"
                  />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc m-4">
                <a
                  href="https://harborlight-case-study.vercel.app/"
                  className="name has-popup"
                >
                  Case Study
                  <div className="category">content</div>
                </a>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 grid-item image border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://github.com/codelikeagirl29/my-blog"
                  className="has-popup-image"
                >
                  <img src="images/works/work3.webp" alt="BMW Blog" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
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

          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-2" className="has-popup-media">
                  <img
                    src="images/works/work8.webp"
                    alt="Florida Dreaming Blog"
                  />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img
                        src="images/works/work8.webp"
                        alt="Florida Dreaming Blog"
                      />
                    </div>
                    <div className="desc m-4">
                      <div className="post-box">
                        <h2>Florida Dreamin Blog</h2>
                        <div className="blog-detail">design</div>
                        <div className="blog-content">
                          <p className="text-slate-700">
                            Welcome to our vibrant corner of the web, where
                            we&apos;re bringing the warmth of the Sunshine State
                            to your screen.
                          </p>
                          <blockquote>
                            <p className="text-sky-400">
                              Living in Florida is like having a permanent
                              vacation — every day is a chance to make a splash
                              in the sunshine.
                            </p>
                          </blockquote>
                          <ul className="list-style">
                            <li>Year-Round Sunshine ☀️</li>
                            <li>World-Class Beaches 🏖️</li>
                            <li>Thriving Cities 🏙️</li>
                            <li>Theme Park Capital 🎢</li>
                            <li>No State Income Tax 💸</li>
                          </ul>
                        </div>
                        <a
                          href="https://codelikeagirl29.github.io/my-blog/"
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
              <div className="desc p-4">
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
