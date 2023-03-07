import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, EffectFade } from "swiper";

function App() {
  const [data, setData] = useState([]);
  const nopic = [{
    "id": 1,
    "url": "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png"
  }]
  function callApi() {
    axios.get("http://localhost:9000/imgbanner").then((response) => {
      setData(response.data);
    })
      .catch((error) => {
        setData(nopic);
        alert("connect api server");
      });
  }
  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#f27025',
        }}
        slidesPerView={1}
        spaceBetween={1}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >{data.map(data => (<SwiperSlide key={data.id}><img className="w-full h-[400px] lg:h-full" src={data.url} alt="" /></SwiperSlide>))}
      </Swiper>
    </>
  )
}

export default App;