import React from "react";
import s from "./index.module.scss";
import stars from "assets/vectors/featuredProperties/starts.svg";
import arrow from "assets/vectors/featuredProperties/arrow.svg";

import img1 from "assets/img/featuredProperties/01.png";
// import img2 from "assets/img/featuredProperties/02.png";
// import img3 from "assets/img/featuredProperties/03.png";

import bed from "assets/vectors/featuredProperties/bed.svg";
import bath from "assets/vectors/featuredProperties/bath.svg";
import house from "assets/vectors/featuredProperties/house.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination]);

export const FeaturedProperties: React.FC = () => {
  return (
    <section className={s.featuredProperties}>
      <div className="container">
        <img src={stars} alt="stars" />
        <div className={s.info}>
          <h1 className={s.infoTitle}>Featured Properties</h1>
          <div className={s.bottom}>
            <p>
              Explore our handpicked selection of featured properties. Each listing offers a glimpse
              into exceptional homes and investments available through Estatein. Click "View
              Details" for more information.
            </p>
            <button>
              <a href="#">View All Properties</a>
            </button>
          </div>
        </div>
        <div className={s.carousel}>
          <Swiper
            pagination={{
              el: ".custom-pagination-properties",
              type: "custom",
              renderCustom: (swiper, current, total) => {
                return `<span>${current}</span><span class="currentPaginationValue"> of ${total}</span>`;
              },
            }}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              390: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              830: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1441: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1650: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: ".customNext-properties",
              prevEl: ".customPrev-properties",
            }}
            modules={[Navigation, Pagination]}
            className={s.swiperContainer}
          >
            <SwiperSlide>
              <div className={s.cards}>
                <div className={s.card}>
                  <img src={img1} alt="img1" />
                  <h3>Seaside Serenity Villa</h3>
                  <p className={s.description}>
                    A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                    <a href="#">Read More</a>
                  </p>
                  <div className={s.details}>
                    <div className={s.items}>
                      <img src={bed} alt="bed" />
                      <p className={s.detailsText}>4-Bedroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={bath} alt="bath" />
                      <p className={s.detailsText}>3-Bathroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={house} alt="house" />
                      <p className={s.detailsText}>Villa</p>
                    </div>
                  </div>
                  <div className={s.selling}>
                    <div className={s.price}>
                      <p className={s.text}>Price</p>
                      <p className={s.value}>$550,000</p>
                    </div>
                    <button>
                      <a href="">View Property Details</a>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.cards}>
                <div className={s.card}>
                  <img src={img1} alt="img1" />
                  <h3>Seaside Serenity Villa</h3>
                  <p className={s.description}>
                    A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                    <a href="#">Read More</a>
                  </p>
                  <div className={s.details}>
                    <div className={s.items}>
                      <img src={bed} alt="bed" />
                      <p className={s.detailsText}>4-Bedroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={bath} alt="bath" />
                      <p className={s.detailsText}>3-Bathroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={house} alt="house" />
                      <p className={s.detailsText}>Villa</p>
                    </div>
                  </div>
                  <div className={s.selling}>
                    <div className={s.price}>
                      <p className={s.text}>Price</p>
                      <p className={s.value}>$550,000</p>
                    </div>
                    <button>
                      <a href="">View Property Details</a>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.cards}>
                <div className={s.card}>
                  <img src={img1} alt="img1" />
                  <h3>Seaside Serenity Villa</h3>
                  <p className={s.description}>
                    A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                    <a href="#">Read More</a>
                  </p>
                  <div className={s.details}>
                    <div className={s.items}>
                      <img src={bed} alt="bed" />
                      <p className={s.detailsText}>4-Bedroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={bath} alt="bath" />
                      <p className={s.detailsText}>3-Bathroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={house} alt="house" />
                      <p className={s.detailsText}>Villa</p>
                    </div>
                  </div>
                  <div className={s.selling}>
                    <div className={s.price}>
                      <p className={s.text}>Price</p>
                      <p className={s.value}>$550,000</p>
                    </div>
                    <button>
                      <a href="">View Property Details</a>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.cards}>
                <div className={s.card}>
                  <img src={img1} alt="img1" />
                  <h3>Seaside Serenity Villa</h3>
                  <p className={s.description}>
                    A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                    <a href="#">Read More</a>
                  </p>
                  <div className={s.details}>
                    <div className={s.items}>
                      <img src={bed} alt="bed" />
                      <p className={s.detailsText}>4-Bedroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={bath} alt="bath" />
                      <p className={s.detailsText}>3-Bathroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={house} alt="house" />
                      <p className={s.detailsText}>Villa</p>
                    </div>
                  </div>
                  <div className={s.selling}>
                    <div className={s.price}>
                      <p className={s.text}>Price</p>
                      <p className={s.value}>$550,000</p>
                    </div>
                    <button>
                      <a href="">View Property Details</a>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.cards}>
                <div className={s.card}>
                  <img src={img1} alt="img1" />
                  <h3>Seaside Serenity Villa</h3>
                  <p className={s.description}>
                    A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                    <a href="#">Read More</a>
                  </p>
                  <div className={s.details}>
                    <div className={s.items}>
                      <img src={bed} alt="bed" />
                      <p className={s.detailsText}>4-Bedroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={bath} alt="bath" />
                      <p className={s.detailsText}>3-Bathroom</p>
                    </div>
                    <div className={s.items}>
                      <img src={house} alt="house" />
                      <p className={s.detailsText}>Villa</p>
                    </div>
                  </div>
                  <div className={s.selling}>
                    <div className={s.price}>
                      <p className={s.text}>Price</p>
                      <p className={s.value}>$550,000</p>
                    </div>
                    <button>
                      <a href="">View Property Details</a>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={s.pagination}>
          <div className={`custom-pagination-properties ${s.customPagination}`}></div>
          <div className={s.arrows}>
            <div className={`customPrev-properties ${s.customPrev}`}>
              <img src={arrow} alt="arrow" />
            </div>
            <div className={`customNext-properties ${s.customNext}`}>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
