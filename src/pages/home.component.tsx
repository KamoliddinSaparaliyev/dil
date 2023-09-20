import { Fragment, useEffect, useState } from "react";
import { Container } from "../layouts/container/container.component.tsx";
import { Section } from "../components/section/section.component.tsx";
import { Button } from "../components/button/button.component.tsx";
import { ContactData, serviceData } from "../data/index.ts";
import { ServiceCard } from "../components/service-card/service-card.component.tsx";
import { BiSolidMap } from "react-icons/bi";
import { SiMetrodeparis } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import Slider from "react-slick";
import useModalStore from "../state/modalStore.ts";

//images
import right_bg from "../assets/images/hero-bg.png";
import left_bg from "../assets/images/hero-bg-left.png";
import user from "../assets/images/user.jpg";
import main_bg from "../assets/images/main-bg.png";

//Home styles
import "./home.scss";
import { useTranslation } from "react-i18next";
export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { openModal } = useModalStore();
  const { telefon, emails, location, station, title, message } = ContactData;
  const { t } = useTranslation();
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 703);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <img className="main__bg" src={main_bg} alt="bg" />
      <Section id="development" className="development">
        <Container>
          <div
            className="development__info "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="title">{t("hero_title")}</h1>
            <Button text={t("btn_title")} />
          </div>
        </Container>
        <img className="right_bg" src={right_bg} alt="bg-light" />
        <img className="left_bg" src={left_bg} alt="" />
      </Section>
      <Section id="service" className="service">
        <Container>
          <h1 className="service__title" data-aos="zoom-in">
            {t("xizmatlar")}
          </h1>
          <div
            className="service__card--row"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            {!isMobile ? (
              serviceData.map((_, i) => (
                <ServiceCard key={i} text={t(`services_${i + 1}`)} />
              ))
            ) : (
              <Slider {...settings}>
                {serviceData.map((res, id) => (
                  <ServiceCard key={id} text={res.name} />
                ))}
              </Slider>
            )}
          </div>
        </Container>
      </Section>
      <Section id="work" className="work">
        <Container>
          <h1 className="work__title" data-aos="zoom-in">
            Biz haqimizda
          </h1>
          <div
            className="work__wrapper"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="img__wrapper">
                <img src={user} alt="icon" />
              </div>
              <div className="user__wrapper">
                <h3>Rustamov Xusan Botirovich</h3>
                <p>
                  <span className="">Lavozimi:</span> Bo'lim boshlig'i
                </p>
                <p>
                  <span className="">Telefon:</span> 71-203-00-28
                </p>
                <p>
                  <span className="">E-mail:</span> k.rustamov[@]csec.uz
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section id="contact" className="contact">
        <Container>
          <div className="contact__wrapper">
            <div className="contact__info">
              <h1 data-aos="zoom-in" className="title">
                {title}
              </h1>
              <div data-aos="zoom-in" className="contact__body--item">
                <BiSolidMap />
                <a href={location.href}>{location.name}</a>
              </div>
              <div data-aos="zoom-in" className="contact__body--item">
                <SiMetrodeparis />
                <a data-aos="zoom-in" href={station.href}>
                  {station.name}
                </a>
              </div>
              <div data-aos="zoom-in" className="contact__body--item">
                <BsTelephoneFill />
                {telefon.map((tel) => (
                  <a data-aos="zoom-in" href={`tel:${tel.tel}`}>
                    {tel.text}
                  </a>
                ))}
              </div>
              <div data-aos="zoom-in" className="contact__body--item">
                <MdEmail />
                {emails.map((e) => (
                  <a data-aos="zoom-in" href={`mailto:${e}`}>
                    {e}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact__message" data-aos="zoom-in">
              <h1 data-aos="zoom-in"> {message.title}</h1>
              <p data-aos="zoom-in">{message.sub_title}</p>
              <button
                data-aos="zoom-in"
                onClick={openModal}
                className="contact__message__btn"
              >
                Yuborish
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </Fragment>
  );
};
