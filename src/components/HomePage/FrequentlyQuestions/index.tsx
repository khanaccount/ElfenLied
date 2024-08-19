import React from "react";
import s from "./index.module.scss";
import stars from "assets/vectors/featuredProperties/starts.svg";
import arrow from "assets/vectors/featuredProperties/arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination]);

export const FrequentlyQuestions: React.FC = () => {
  return (
    <section className={s.frequentlyQuestions}>
      <div className="container">
        <img src={stars} alt="stars" />
        <div className={s.info}>
          <h1 className={s.infoTitle}>Frequently Asked Questions</h1>
          <div className={s.bottom}>
            <p>
              Find answers to common questions about Estatein's services, property listings, and the
              real estate process. We're here to provide clarity and assist you every step of the
              way.
            </p>
            <button>
              <a href="#">View All FAQ’s</a>
            </button>
          </div>
        </div>
        <div className={s.carousel}>
          <Swiper
            pagination={{
              el: ".custom-pagination-frequentlyQuestions",
              type: "custom",
              renderCustom: (swiper, current, total) => {
                return `<span>${current}</span><span class="currentPaginationValue"> of ${total}</span>`;
              },
            }}
            navigation={{
              nextEl: ".customNext-frequentlyQuestions",
              prevEl: ".customPrev-frequentlyQuestions",
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            className={s.swiperContainer}
          >
            <SwiperSlide>
              <div className={s.cards}>
                <div className={s.card}>
                  <h2 className={s.frequentlyQuestionsTitle}>
                    How do I search for properties on Estatein?
                  </h2>
                  <p className={s.frequentlyQuestionsText}>
                    Learn how to use our user-friendly search tools to find properties that match
                    your criteria.
                  </p>
                  <button className={s.frequentlyQuestionsButton}>
                    <a href="#">Read More</a>
                  </button>
                </div>
                <div className={s.card}>
                  <h2 className={s.frequentlyQuestionsTitle}>
                    How do I search for properties on Estatein?
                  </h2>
                  <p className={s.frequentlyQuestionsText}>
                    Learn how to use our user-friendly search tools to find properties that match
                    your criteria.
                  </p>
                  <button className={s.frequentlyQuestionsButton}>
                    <a href="#">Read More</a>
                  </button>
                </div>{" "}
                <div className={s.card}>
                  <h2 className={s.frequentlyQuestionsTitle}>
                    How do I search for properties on Estatein?
                  </h2>
                  <p className={s.frequentlyQuestionsText}>
                    Learn how to use our user-friendly search tools to find properties that match
                    your criteria.
                  </p>
                  <button className={s.frequentlyQuestionsButton}>
                    <a href="#">Read More</a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.cards}>
                <div className={s.card}>
                  <h2 className={s.frequentlyQuestionsTitle}>
                    How do I search for properties on Estatein?
                  </h2>
                  <p className={s.frequentlyQuestionsText}>
                    Learn how to use our user-friendly search tools to find properties that match
                    your criteria.
                  </p>
                  <button className={s.frequentlyQuestionsButton}>
                    <a href="#">Read More</a>
                  </button>
                </div>{" "}
                <div className={s.card}>
                  <h2 className={s.frequentlyQuestionsTitle}>
                    How do I search for properties on Estatein?
                  </h2>
                  <p className={s.frequentlyQuestionsText}>
                    Learn how to use our user-friendly search tools to find properties that match
                    your criteria.
                  </p>
                  <button className={s.frequentlyQuestionsButton}>
                    <a href="#">Read More</a>
                  </button>
                </div>{" "}
                <div className={s.card}>
                  <h2 className={s.frequentlyQuestionsTitle}>
                    How do I search for properties on Estatein?
                  </h2>
                  <p className={s.frequentlyQuestionsText}>
                    Learn how to use our user-friendly search tools to find properties that match
                    your criteria.
                  </p>
                  <button className={s.frequentlyQuestionsButton}>
                    <a href="#">Read More</a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={s.pagination}>
          <div className={`custom-pagination-frequentlyQuestions ${s.customPagination}`}></div>
          <div className={s.arrows}>
            <div className={`customPrev-frequentlyQuestions ${s.customPrev}`}>
              <img src={arrow} alt="arrow" />
            </div>
            <div className={`customNext-frequentlyQuestions ${s.customNext}`}>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
