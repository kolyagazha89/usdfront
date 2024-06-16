import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PartnerNews from "./partner_news";
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import logodb from "../../img/logoDB.png"
import news from "../../img/news_partner.jpg"
const SwiperPart = () => {
    return (
        <Swiper
            spaceBetween={100}
            slidesPerView={3.15}
            autoplay={{delay: 2500,disableOnInteraction: false}}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
            <SwiperSlide> <PartnerNews data={["Alphard Group", "Генеральный партнер",logodb,news]}/></SwiperSlide>
        </Swiper>
    );
};

export default SwiperPart;