import "./Anasayfa.css";
import axios from "axios";
import image2 from "./png.png"
import slide1 from "./saganakyagıs.jpg"
import slide2 from "./ruzgar.jpg"
import slide3 from "./fırtına.jpg"
import slide4 from "./meteo.jpg"
import slide5 from "./toztasınımı.jpg"
import slide6 from "./seluyarısı.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; 
import React, { useEffect, useRef, useState } from 'react';
import SwiperCore, { Autoplay , Navigation } from 'swiper';

SwiperCore.use([Navigation]); 
SwiperCore.use([Autoplay]);

    function Anasayfa() {
    const [weather,setWeather] = useState([])
    const [weatherDays,setWeatherDays] = useState([])
    
    const swiperRef = useRef(null);
        const params = {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
            delay:2000,
        };

        useEffect(() => {
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Antalya&lang=tr&units=metric&appid=75132a70d4fbcad58d350d963d3e6a41`)
          .then(res => {
          console.log(res);
          console.log(res.data);
          weatherDays.push(res.data);
          console.log(weather);
          })
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Antalya&lang=tr&units=metric&appid=75132a70d4fbcad58d350d963d3e6a41`)
          .then(res => {
          console.log(res);
          console.log(res.data);
          weather.push(res.data);
          console.log(weather);
          })
    
        },[]);

    return(
    <div>
        <div className="hava-durumu-paneli">
                
            <div className="hava-durumu">
                    <div className="hava-lokasyon-bilgi">
                        <div className="sehirler">

                        <select name="sehirler">
                            <option>Sehirler</option>
                        </select>
                        </div>
                        {/* <h1>Antalya</h1>
                        <h4>5 Mayıs Cuma</h4>
                            <div className="hava-durum-detay">
                                <div className="degerler">
                                <a>Nem</a>
                                <a>20</a>
                                </div>
                                <div className="degerler">
                                <a>Rüzgar</a>
                                <a>30</a>
                                </div>
                                <div className="degerler">
                                <a>UV Endeksi</a>
                                <a>40</a>
                                </div>
                            </div> */}
                            {
                            weather.map((item)=>{
                              return(
                          <h1>{item.city}</h1>
                          )
                          })}

                    </div>

                    <div className="hava-durumu-veri">
                        <div className="hava-nasıl">
                            <a>Bugün</a>
                            <img src= {image2} width={120}/>
                            <a>23</a>
                            <a>Güneşli</a>
                        </div>
                    
                    </div>
            </div>
            
        </div>
        <div className="haftalık-tahmin-paneli">
                <div className="haftalık-hava-durum">
                    <div className="gunler">
                        <img src= {image2} width={120} />
                        <span>Pazartesi</span>
                        <span>30°</span>
                    </div>
                    <div className="gunler">
                        <img src= {image2} width={120} />
                        <span>Salı</span>
                        <span>30°</span>
                    </div>
                    <div className="gunler">
                        <img src= {image2} width={120} />
                        <span>Çarşamba</span>
                        <span>30°</span>
                    </div>
                    <div className="gunler">
                        <img src= {image2} width={120} />
                        <span>Perşembe</span>
                        <span>30°</span>
                    </div>
                    <div className="gunler">
                        <img src= {image2} width={120} />
                        <span>Cuma</span>
                        <span>30°</span>
                    </div>
                </div>
            </div>
            <div className="baslikk">

            <h1>Hava Durumu Haberleri</h1>
            </div>
            <div className="hava-durumu-haberler">
                <div className="anahaber">
                <img src= {slide1} width={600} height={500}/>
                <h2>Selin Vurduğu Kastamonu'da Heyelanlar Durdurulamıyor.</h2>
                </div>

                <div className="yanhaber">
                    <div className="haberler">
                        <div className="haber-resim">
                            <img src= {slide1}/>
                        </div>
                        <div className="haber-icerik">
                            <h4>-Antalya</h4>
                            <h4>Antalya'da sel felaketinin yaşandığı Kumluca ve Finike ilçelerinde temizlik çalışmaları devam ediyor.</h4>
                            <p>30 Nisan 2023</p>
                        </div>
                    </div>
                    <div className="haberler">
                        <div className="haber-resim">
                            <img src= {slide1}/>
                        </div>
                        <div className="haber-icerik">
                            <h4>-Denizli</h4>
                            <h4>Denizli'de sağanak yağışın etkisiyle ormanlık alanda heyelan meydana geldi.</h4>
                            <p>22 Nisan 2023</p>
                        </div>
                    </div>
                    <div className="haberler">
                        <div className="haber-resim">
                            <img src= {slide1}/>
                        </div>
                        <div className="haber-icerik">
                            <h4>-Sivas</h4>
                            <h4>Sivas'ta aşırı kar yağışı sonucu köy yolları kapandı. Vatandaş zor durumda kaldı.</h4>
                            <p>10 Nisan 2023</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="Slider">
                <h1>SON DAKİKA</h1>
       
      <Swiper {...params} ref={swiperRef}>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide1} alt="Slide 1" />
            <h5>8 mayıs 2023</h5>
            <h3>ŞİDDETLİ YAĞIŞA DİKKAT</h3>
            <p>Meteoroloji'nden yapılan açıklamaya göre bugün Karadeniz,
            Akdeniz ve iç bölgelerde olmak üzere 4 bölgede kuvvetli yağış bekleniyor.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide2} alt="Slide 2" />
            <h5>8 mayıs 2023</h5>
            <h3>KUVVETLİ RÜZGAR UYARISI</h3>
            <p>Bugün Doğu Karadeniz’in doğusu ile Doğu Anadolu’nun doğusunda güney ve güneybatı yönlerden kuvvetli
 rüzgar esmesi beklendiğinden yaşanabilecek olumsuzluklara karşı dikkatli olunması istendi.
</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide3} alt="Slide 3" />
            <h5>8 mayıs 2023</h5>
            <h3>KARADENİZ'DE FIRTINA UYARISI</h3>
            <p>Meteorolojiden denizler için yapılan uyarıya göre yarın 
Doğu Karadeniz'de rüzgar sabahın ilk saatlerinden itibaren batı ve kuzeybatıdan 
saatte 50-75 kilometre hızda fırtına şeklinde esecek.</p>          
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide4} alt="Slide 4" />
            <h5>8 mayıs 2023</h5>
            <h3>SARI ALARM!</h3>
            <p>Meteoroloji Genel Müdürlüğü 16 kent için sarı ve turuncu kodlu uyarıda bulundu. 
                MGM'nin yaptığı son değerlendirmelere göre ülke genelinde yağışlı hava etkili olacak iç kesimlerde hava sıcaklıkları 2-4 derece düşecek.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide5} alt="Slide 5" />
            <h5>8 mayıs 2023</h5>
            <h3>TOZ TAŞINIMI!</h3>
            <p>Güneydoğu Anadolu’da toz taşınımı beklendiğinden yaşanabilecek olumsuzluklara karşı dikkatli olunmalıdır.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide6} alt="Slide 6" />
            <h5>8 mayıs 2023</h5>
            <h3>SEL UYARISI!</h3>
            <p> Meteorolojiye göre Diyarbakır, Gaziantep ve Şanlıurfa çevrelerinde kuvvetli yağış olması beklendiğinden yaşanabilecek ani sel, 
                su baskını, yıldırım gibi olumsuzluklara karşı dikkatli ve tedbirli olunması gerekmektedir.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide1} alt="Slide 1" />
            <h5>8 mayıs 2023</h5>
            <h3>ŞİDDETLİ YAĞIŞA DİKKAT</h3>
            <p>Meteoroloji'nden yapılan açıklamaya göre bugün Karadeniz,
            Akdeniz ve iç bölgelerde olmak üzere 4 bölgede kuvvetli yağış bekleniyor.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide2} alt="Slide 2" />
            <h5>8 mayıs 2023</h5>
            <h3>KUVVETLİ RÜZGAR UYARISI</h3>
            <p>Bugün Doğu Karadeniz’in doğusu ile Doğu Anadolu’nun doğusunda güney ve güneybatı yönlerden kuvvetli
 rüzgar esmesi beklendiğinden yaşanabilecek olumsuzluklara karşı dikkatli olunması istendi.
</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide3} alt="Slide 3" />
            <h5>8 mayıs 2023</h5>
            <h3>KARADENİZ'DE FIRTINA UYARISI</h3>
            <p>Meteorolojiden denizler için yapılan uyarıya göre yarın 
Doğu Karadeniz'de rüzgar sabahın ilk saatlerinden itibaren batı ve kuzeybatıdan 
saatte 50-75 kilometre hızda fırtına şeklinde esecek.</p>          
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src= {slide4} alt="Slide 4" />
            <h5>8 mayıs 2023</h5>
            <h3>SARI ALARM!</h3>
            <p>Meteoroloji Genel Müdürlüğü 16 kent için sarı ve turuncu kodlu uyarıda bulundu. 
                MGM'nin yaptığı son değerlendirmelere göre ülke genelinde yağışlı hava etkili olacak iç kesimlerde hava sıcaklıkları 2-4 derece düşecek.</p>
          </div>
        </SwiperSlide>
      </Swiper>
            </div>
      
    </div>
  
);
    }
    
export default Anasayfa;
