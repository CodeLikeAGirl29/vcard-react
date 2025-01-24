import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <div className="content testimonials">
      {/* title */}
      <div className="title">Testimonials</div>
      {/* content */}
      <div className="row testimonials-items">
        {/* client item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-carousel default-revs">
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Lindsey is always participating in class and problem solves
                    well. She is a team player, always ready to help her
                    classmates in whatever way she can. She even took the
                    initiative to reach out to me personally regarding a
                    question I had in class for my teacher. I&apos;m confident
                    she will be a good addition to any team!
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/testi1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Precious Gartrell</div>
                      <div className="company">Tech Support</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    I mentored Lindsey through her online training program. I
                    found her intelligent and eager to learn. I would highly
                    recommend her for any web development opportunity.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/testi2.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Anne Racel</div>
                      <div className="company">
                        Branch Chief at US Air Force
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>

              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Testimonials;
