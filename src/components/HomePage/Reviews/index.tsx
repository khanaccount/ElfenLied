import React from "react";
import s from "./index.module.scss";
import stars from "assets/vectors/featuredProperties/starts.svg";
import arrow from "assets/vectors/featuredProperties/arrow.svg";

import avatar1 from "assets/img/reviews/avatar1.png";
import avatar2 from "assets/img/reviews/avatar2.png";
import avatar3 from "assets/img/reviews/avatar3.png";

import reviewStars from "assets/vectors/reviews/reviewStars.svg";
import reviewInActiveStars from "assets/vectors/reviews/reviewInActiveStars.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination]);

type Review = {
  stars: number;
  title: string;
  text: string;
  avatar: string;
  userName: string;
  userGeo: string;
};

const reviews: Review[][] = [
  [
    {
      stars: 4,
      title: "Exceptional Service!",
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      avatar: avatar1,
      userName: "John Mans",
      userGeo: "USA, California",
    },
    {
      stars: 5,
      title: "Top-Notch Support!",
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended! dream home a breeze.",
      avatar: avatar2,
      userName: "John Mans",
      userGeo: "USA, Florida",
    },
    {
      stars: 3,
      title: "Helpful Team!",
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      avatar: avatar3,
      userName: "John Mans",
      userGeo: "USA, Nevada",
    },
  ],
  [
    {
      stars: 4,
      title: "Exceptional Service!",
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      avatar: avatar1,
      userName: "John Mans",
      userGeo: "USA, California",
    },
    {
      stars: 5,
      title: "Top-Notch Support!",
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended! dream home a breeze.",
      avatar: avatar2,
      userName: "John Mans",
      userGeo: "USA, Florida",
    },
    {
      stars: 3,
      title: "Helpful Team!",
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      avatar: avatar3,
      userName: "John Mans",
      userGeo: "USA, Nevada",
    },
  ],
];

export const Reviews: React.FC = () => {
  return (
    <section className={s.reviews}>
      <div className="container">
        <img src={stars} alt="stars" />
        <div className={s.info}>
          <h1 className={s.infoTitle}>What Our Clients Say</h1>
          <div className={s.bottom}>
            <p>
              Read the success stories and heartfelt testimonials from our valued clients. Discover
              why they chose Estatein for their real estate needs.
            </p>
            <button>
              <a href="#">View All Testimonials</a>
            </button>
          </div>
        </div>
        <div className={s.carousel}>
          <Swiper
            pagination={{
              el: ".custom-pagination-reviews",
              type: "custom",
              renderCustom: (swiper, current, total) => {
                return `<span>${current}</span><span class="currentPaginationValue"> of ${total}</span>`;
              },
            }}
            navigation={{
              nextEl: ".customNext-reviews",
              prevEl: ".customPrev-reviews",
            }}
            spaceBetween={30}
            slidesPerView={1}
            className={s.swiperContainer}
          >
            {reviews.map((reviewGroup, groupIndex) => (
              <SwiperSlide key={groupIndex}>
                <div className={s.cards}>
                  {reviewGroup.map((review, index) => (
                    <div key={index} className={s.card}>
                      <div className={s.reviewsStars}>
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            src={i < review.stars ? reviewStars : reviewInActiveStars}
                            alt="review stars"
                          />
                        ))}
                      </div>
                      <div className={s.reviewInfo}>
                        <h5 className={s.title}>{review.title}</h5>
                        <p className={s.text}>{review.text}</p>
                      </div>
                      <div className={s.userBlock}>
                        <img className={s.userAvatar} src={review.avatar} alt="avatar" />
                        <div className={s.userInfo}>
                          <p className={s.userName}>{review.userName}</p>
                          <p className={s.userGeo}>{review.userGeo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.pagination}>
          <div className={`custom-pagination-reviews ${s.customPagination}`}></div>
          <div className={s.arrows}>
            <div className={`customPrev-reviews ${s.customPrev}`}>
              <img src={arrow} alt="arrow" />
            </div>
            <div className={`customNext-reviews ${s.customNext}`}>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
