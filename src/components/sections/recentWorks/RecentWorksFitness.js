import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksFitness = () => {
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
        <div className="title">Recent Works</div>
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
            className={`f_btn ${activeBtn("gallery")}`}
            onClick={handleFilterKeyChange("gallery")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="gallery" />
              Gallery
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("video")}`}
            onClick={handleFilterKeyChange("video")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="video" />
              Video
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/twork1.jpg" className="has-popup-image">
                  <img src="images/twork1.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-image" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/works/work1.jpg"
                  className="name has-popup-image"
                >
                  Fitness Item 1
                </a>
                <div className="category">Image</div>
              </div>
            </div>
          </div>
          {/* work item video */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://vimeo.com/97102654"
                  className="has-popup-video"
                >
                  <img src="images/twork2.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://vimeo.com/97102654"
                  className="name has-popup-video"
                >
                  Fitness Item 2
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div>
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/twork3.jpg" className="has-popup-image">
                  <img src="images/twork3.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-image" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/works/work1.jpg"
                  className="name has-popup-image"
                >
                  Fitness Item 3
                </a>
                <div className="category">Image</div>
              </div>
            </div>
          </div>
          {/* work item video */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://vimeo.com/97102654"
                  className="has-popup-video"
                >
                  <img src="images/twork4.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://vimeo.com/97102654"
                  className="name has-popup-video"
                >
                  Fitness Item 4
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div>
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery">
                  <img src="images/twork5.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                  <div id="gallery-1" className="mfp-hide">
                    <a href="images/twork3.jpg" />
                    <a href="images/twork4.jpg" />
                    <a href="images/twork5.jpg" />
                  </div>
                </a>
              </div>
              <div className="desc">
                <a href="#gallery-1" className="has-popup-gallery">
                  Fitness Item 5
                </a>
                <div className="category">Gallery</div>
              </div>
            </div>
          </div>
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-2" className="has-popup-gallery">
                  <img src="images/twork6.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>{" "}
                  <div id="gallery-2" className="mfp-hide">
                    <a href="images/twork3.jpg" />
                    <a href="images/twork4.jpg" />
                    <a href="images/twork6.jpg" />
                  </div>
                </a>
              </div>
              <div className="desc">
                <a href="#gallery-2" className="has-popup-gallery">
                  Fitness Item 6
                </a>
                <div className="category">Gallery</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksFitness;
