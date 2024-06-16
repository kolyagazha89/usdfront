import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import CompVisit from "./compVisit";

const SwiperAchiv = () => {
    return (
        <Swiper
            spaceBetween={100}
            slidesPerView={4.32}
            autoplay={{delay: 2500,disableOnInteraction: false}}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            <SwiperSlide> <CompVisit place={1} data={["Этап\n г. Самара","1 место\n SPL Sedan",'155.7 db']}/></SwiperSlide>
            <SwiperSlide> <CompVisit place={3} data={["Этап\n г. Челябинск","3 место\n SPL MadX",'152.9 db']}/></SwiperSlide>
            <SwiperSlide> <CompVisit place={6} data={["Открытие\n г. Волгоград","6 место\n SPL Limited",'142.1 db']}/></SwiperSlide>
            <SwiperSlide> <CompVisit place={2} data={["Финал\n г. Волгоград","2 место\n Gate 1-6",'115.7 db']}/></SwiperSlide>
            <SwiperSlide> <CompVisit place={2} data={["Финал\n г. Волгоград","2 место\n Gate 1-6",'115.7 db']}/></SwiperSlide>
            <SwiperSlide> <CompVisit place={2} data={["Финал\n г. Волгоград","2 место\n Gate 1-6",'115.7 db']}/></SwiperSlide>
            <SwiperSlide> <CompVisit place={2} data={["Финал\n г. Волгоград","2 место\n Gate 1-6",'115.7 db']}/></SwiperSlide>
            <SwiperSlide> <CompVisit place={2} data={["Финал\n г. Волгоград","2 место\n Gate 1-6",'115.7 db']}/></SwiperSlide>
        </Swiper>
    );
};

export default SwiperAchiv;