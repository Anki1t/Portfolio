import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Contributed as Software Engineer in Cybage Softwares,where I have Developed and maintained web applications using ASP.NET.  Developed responsive web applications using Angular, resulting in improved user experience and a 25% increase in user engagement metrics."
    },
    {
      img: profilePic2,
      review:
        "As a Software Engineer Designed and developed Database,Created and cofigured API's,Resolved client's Issues and queries,Implemented features including audit trails and logs for application tracing, generating log reports"
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span> Work </span>
        <span>Experience </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
