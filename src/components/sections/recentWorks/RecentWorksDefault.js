/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { Fragment, useEffect, useRef, useState } from "react";
// Import modern Ionicons from react-icons
import {
  IoCodeSharp,
  IoBrushSharp,
  IoImageSharp,
  IoImagesSharp,
} from "react-icons/io5";

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
        <div className="title mb-6 text-2xl font-bold">Recent Projects</div>

        <div className="filter-menu filter-button-group mb-8 flex flex-wrap gap-3">
          {[
            { key: "*", label: "All" },
            { key: "image", label: "Image" },
            { key: "frontend", label: "Frontend" },
            { key: "design", label: "Design" },
            { key: "branding", label: "Branding" },
            { key: "content", label: "Content" },
          ].map(({ key, label }) => (
            <div
              key={key}
              className={`f_btn ${activeBtn(key)} cursor-pointer`}
              onClick={handleFilterKeyChange(key)}
            >
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="fl_radio"
                  defaultValue={key}
                  className="sr-only"
                />
                {label}
              </label>
            </div>
          ))}
        </div>

        {/* Isotope Container */}
        <div ref={containerRef} className="row grid-items border-line-v">
          {/* FRONTEND ITEM */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a href="images/works/work1.webp" className="has-popup-image">
                  <img src="images/works/work1.webp" alt="Visit FL" />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoCodeSharp />
                  </span>
                </a>
              </div>
              <div className="desc m-4">
                <a
                  href="images/works/work1.webp"
                  className="name has-popup-image font-semibold"
                >
                  Visit FL
                </a>
                <div className="category text-sm text-gray-500">frontend</div>
              </div>
            </div>
          </div>

          {/* DESIGN ITEM */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a
                  href="https://unsplash-collections.vercel.app/"
                  className="has-popup-image"
                >
                  <img
                    src="images/works/work2.webp"
                    alt="Unsplash Image Search"
                  />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoBrushSharp />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
                <a
                  href="https://www.github.com/codelikeagirl29/unsplash-collections"
                  className="name has-popup-image font-semibold"
                >
                  Unsplash Image Search
                </a>
                <div className="category text-sm text-gray-gray-500">
                  design
                </div>
              </div>
            </div>
          </div>

          {/* BRANDING ITEM (Ski Barn Showcase) */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item branding border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a href="https://ski-barn.com/" className="has-popup-image">
                  <img src="images/works/work11.png" alt="Ski Barn Branding" />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoBrushSharp />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
                <a
                  href="https://www.github.com/codelikeagirl29/the-ski-barn"
                  className="name has-popup-image font-semibold"
                >
                  Ski Barn Identity & Branding
                </a>
                <div className="category text-sm text-gray-500">branding</div>
              </div>
            </div>
          </div>

          {/* IMAGE ITEM (Nova Goods Store Showcase) */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item image border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a
                  href="https://github.com/codelikeagirl29/nova-goods"
                  className="has-popup-image"
                >
                  <img
                    src="images/works/work4.png"
                    alt="Nova Goods Store Portfolio"
                  />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoImageSharp />
                  </span>
                </a>
              </div>
              <div className="desc m-4">
                <a
                  href="https://github.com/codelikeagirl29/nova-goods"
                  className="name has-popup font-semibold"
                >
                  Nova Goods Product Photography
                </a>
                <div className="category text-sm text-gray-500">image</div>
              </div>
            </div>
          </div>

          {/* POPUP DESIGN ITEM (Aqua Eden) */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/work4.webp" alt="Aqua Eden" />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoImagesSharp />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/work4.webp" alt="Aqua Eden" />
                    </div>
                    <div className="desc p-4">
                      <div className="post-box">
                        <h1 className="text-xl font-bold mb-2">Aqua Eden</h1>
                        <div className="blog-detail text-sm text-gray-500 mb-4">
                          design
                        </div>
                        <div className="blog-content space-y-2">
                          <p>
                            Welcome to Aqua Eden, an immersive web project that
                            brings the enchanting world of aquariums to your
                            fingertips!
                          </p>
                          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-2">
                            Dive into the wonders of Aqua Eden, where every
                            ripple tells a tale of oceanic enchantment. 🌊✨
                          </blockquote>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Netlify</li>
                          </ul>
                        </div>
                        <a
                          href="https://aquaeden.netlify.app/"
                          className="button inline-block mt-4 text-blue-500 font-medium"
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
                <a
                  href="#popup-1"
                  className="name has-popup-media font-semibold"
                >
                  Aqua Eden
                </a>
                <div className="category text-sm text-gray-500">design</div>
              </div>
            </div>
          </div>

          {/* GALLERY ITEM */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/work6.webp" alt="Profile Concept" />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoImagesSharp />
                  </span>
                </a>
                <div id="gallery-1" className="mfp-hide">
                  <a href="images/works/work5.webp" />
                  <a href="images/works/work1.webp" />
                  <a href="images/works/work6.webp" />
                </div>
              </div>
              <div className="desc p-4">
                <a href="#" className="name has-popup-image font-semibold">
                  Profile Concept
                </a>
                <div className="category text-sm text-gray-500">frontend</div>
              </div>
            </div>
          </div>

          {/* FRONTEND ITEM */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a
                  href="https://github.com/CodeLikeAGirl29/dictionarium"
                  className="has-popup-image"
                >
                  <img src="images/works/work7.webp" alt="Dictionarium" />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoImagesSharp />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
                <a
                  href="http://dictionarium.vercel.app/"
                  className="name has-popup font-semibold"
                >
                  Dictionarium
                </a>
                <div className="category text-sm text-gray-500">frontend</div>
              </div>
            </div>
          </div>

          {/* CONTENT ITEM */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item content border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a
                  href="https://github.com/CodeLikeAGirl29/harborlight-case-study"
                  className="has-popup-image"
                >
                  <img
                    src="https://res.cloudinary.com/dhw9dl4gm/image/upload/v1764363453/Case-Study-HarborLight-Charters-_-Destin-FL-11-28-2025_02_56_PM_hhabre.png"
                    alt="HarborLight Case Study"
                  />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoImagesSharp />
                  </span>
                </a>
              </div>
              <div className="desc m-4">
                <a
                  href="https://harborlight-case-study.vercel.app/"
                  className="name has-popup font-semibold"
                >
                  Case Study
                </a>
                <div className="category text-sm text-gray-500">content</div>
              </div>
            </div>
          </div>

          {/* BMW BLOG (IMAGE ITEM) */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item image border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a
                  href="https://github.com/codelikeagirl29/my-blog"
                  className="has-popup-image"
                >
                  <img src="images/works/work3.webp" alt="BMW Blog" />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoImagesSharp />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
                <a
                  href="https://codelikeagirl29.github.io/my-blog/"
                  className="name has-popup-image font-semibold"
                >
                  BMW Blog Visual Assets
                </a>
                <div className="category text-sm text-gray-500">image</div>
              </div>
            </div>
          </div>

          {/* FRONTEND ITEM */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image relative group">
                <a href="#popup-2" className="has-popup-media">
                  <img
                    src="images/works/work8.webp"
                    alt="Florida Dreaming Blog"
                  />
                  <span className="info absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-2xl">
                    <IoImagesSharp />
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
                        <h2 className="text-xl font-bold mb-2">
                          Florida Dreamin Blog
                        </h2>
                        <div className="blog-detail text-sm text-gray-500 mb-4">
                          frontend
                        </div>
                        <div className="blog-content space-y-2">
                          <p className="text-slate-700">
                            Welcome to our vibrant corner of the web, where
                            we're bringing the warmth of the Sunshine State to
                            your screen.
                          </p>
                          <blockquote className="border-l-4 border-sky-400 pl-4 italic my-2">
                            <p className="text-sky-600">
                              Living in Florida is like having a permanent
                              vacation — every day is a chance to make a splash
                              in the sunshine.
                            </p>
                          </blockquote>
                          <ul className="list-disc pl-5 space-y-1 text-slate-700">
                            <li>Year-Round Sunshine ☀️</li>
                            <li>World-Class Beaches 🏖️</li>
                            <li>Thriving Cities 🏙️</li>
                            <li>Theme Park Capital 🎢</li>
                            <li>No State Income Tax 💸</li>
                          </ul>
                        </div>
                        <a
                          href="https://codelikeagirl29.github.io/my-blog/"
                          className="button inline-block mt-4 text-blue-500 font-medium"
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
                <a
                  href="#popup-2"
                  className="name has-popup-media font-semibold"
                >
                  Florida Dreaming Blog
                </a>
                <div className="category text-sm text-gray-500">frontend</div>
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
