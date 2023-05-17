import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiArrowLeft} from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBanSmoking, faBed, faBellConcierge, faBorderTopLeft, faBriefcase, faCar, faCheck, faChild, faCity, faDumbbell, faPersonSwimming, faSnowflake, faTicket, faUserGroup, faUtensils, faWheelchair, faWifi } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const DetailHotelPage: React.FC = () => {
    const stars = [];
    for (let i = 0; i < 4; i++) {
        stars.push(<span key={i} className="star-icon">&#9733;</span>);
    }

    useEffect(() => {
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navbarLinks = document.querySelectorAll('.tab-items');
          
            sections.forEach(function(section, index) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
          
              if (window.pageYOffset >= sectionTop - 1 && window.pageYOffset < sectionTop + sectionHeight) {
                navbarLinks[index].classList.add('tab-selected');
              } else {
                navbarLinks[index].classList.remove('tab-selected');
              }
            });
          });
    }, [])

    return (
      <>  
        <Header />
        <main>
            <div className="detail-hotel-page">
                <section id="overview" className="overview">
                    <div className="back-list-page">
                        <Link className="link-back-list-page" to="/">
                            <FiArrowLeft /><span>Xem tất cả nơi lưu trú</span>
                        </Link>
                    </div>
                    <div className="images-hotel">
                        <div className="big-img"><img src="/src/assets/images/image1.jpg" /></div>
                        <div className="small-img">
                            <div  className="small-img-col">
                                <img src="/src/assets/images/image2.jpg"  alt="hotelImg" />
                                <img src="/src/assets/images/image3.jpg"  alt="hotelImg" />
                            </div>
                            <div className="small-img-col">
                                <img src="/src/assets/images/image4.jpg"  alt="hotelImg" />
                                <img src="/src/assets/images/image5.jpg"  alt="hotelImg" />
                            </div>
                        </div>    
                    </div>
                </section>
                <div className="tabs-container">
                        <ul>
                            <a className="tab-items tab-selected" href="#overview"><li>Tổng quan</li></a>
                            <a className="tab-items" href="#select-room"><li>Phòng</li></a>
                            <a className="tab-items" href="#location"><li>Địa điểm</li></a>
                            <a className="tab-items" href="#service"><li>Tiện nghi, dịch vụ</li></a>
                        </ul>
                </div>
                <div className="info-hotel">
                    <div className="name-rate">
                        <h1>The Hanoi Club Hotel & Residences</h1>
                        <div className="star-rate">{stars}</div>
                        <p style={{fontSize: '15px'}}>Khách sạn bên hồ tại khu vực Tây Hồ với sòng bạc và hồ bơi ngoài trời</p>
                        <h2>8,4/10 - Rất tốt</h2>
                    </div>
                    <div className="service-outstanding">
                        <h2>Tiện nghi, dịch vụ nổi bật</h2>
                        <ul className="list-service">
                            <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faCar} />  <span>Đậu xe miễn phí</span></li>
                            <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faWifi} />  <span>Wifi miễn phí</span></li>
                            <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faBanSmoking} />  <span>Không hút thuốc</span></li>
                            <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faPersonSwimming} />  <span>Hồ bơi</span></li>
                            <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faDumbbell} />  <span>Gym</span></li>
                            <li className="service-item"><FontAwesomeIcon className="service-item-icon" icon={faSnowflake} />  <span>Máy điều hòa nhiệt độ</span></li>
                        </ul>
                    </div>
                    <div className="address">
                        <h2 style={{display: 'inline-block', marginRight: '10px'}}>Địa chỉ:</h2> <span style={{fontSize: '15px'}}>76 Yên Phụ, Tây Hồ, Hà Nội, 10000</span>
                    </div>
                </div>
                <section id="select-room" className="select-room">
                    <h1>Chọn phòng</h1>
                    {/* < SearchBox /> */}
                    <div className="list-room">
                        <div className="room-items">
                            <img src="/src/assets/images/room1.png" alt="roomImg" />
                            <div className="info-room">
                                <h3>Phòng đôi Superior, 1 giường cỡ king (City View)</h3>
                                <ul className="conv-room">
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faWifi} />  <span>Wifi miễn phí</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCar} />  <span>Bãi đậu xe tự phục vụ miễn phí</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBorderTopLeft} />  <span>23 mét vuông</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faUserGroup} />  <span>3 khách</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCheck} />  <span>Đặt ngay, thanh toán sau</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBed} />  <span>1 giường cỡ king</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCity} />  <span>Quang cảnh thành phố</span></li>
                                    <li className="service-room-item"><svg className="service-room-icon moon-icon" width="22" height="22"><image width="22" height="22" href="/src/assets/images/loyalty.svg" /></svg>  <span>Tích lũy tem</span></li>
                                </ul>
                                <div className="refund">
                                    <p>Hoàn tiền toàn bộ</p>
                                    <p>Trước Chủ nhật, 21 tháng 5, 2023</p>
                                </div>
                                <div className="cost-book">
                                    <div className="price-room">
                                        <span className="discount">Giảm 31%</span>
                                        <div className="price"><span className="discounted-price">1.547.164 ₫</span> <span className="origin-price">2.242.267 ₫</span></div>
                                        <p>Tổng 1.786.974 ₫ bao gồm thuế & phí</p>
                                    </div>
                                    <div className="number-left-rooms">
                                        <p>Còn 5 phòng</p>
                                        <button className="book-btn">Đặt</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="room-items">
                            <img src="/src/assets/images/room1.png" alt="roomImg" />
                            <div className="info-room">
                                <h3>Phòng đôi Superior, 1 giường cỡ king (City View)</h3>
                                <ul className="conv-room">
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faWifi} />  <span>Wifi miễn phí</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCar} />  <span>Bãi đậu xe tự phục vụ miễn phí</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBorderTopLeft} />  <span>23 mét vuông</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faUserGroup} />  <span>3 khách</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCheck} />  <span>Đặt ngay, thanh toán sau</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBed} />  <span>1 giường cỡ king</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCity} />  <span>Quang cảnh thành phố</span></li>
                                    <li className="service-room-item"><svg className="service-room-icon moon-icon" width="22" height="22"><image width="22" height="22" href="/src/assets/images/loyalty.svg" /></svg>  <span>Tích lũy tem</span></li>
                                </ul>
                                <div className="refund">
                                    <p>Hoàn tiền toàn bộ</p>
                                    <p>Trước Chủ nhật, 21 tháng 5, 2023</p>
                                </div>
                                <div className="cost-book">
                                    <div className="price-room">
                                        <span className="discount">Giảm 31%</span>
                                        <div className="price"><span className="discounted-price">1.547.164 ₫</span> <span className="origin-price">2.242.267 ₫</span></div>
                                        <p>Tổng 1.786.974 ₫ bao gồm thuế & phí</p>
                                    </div>
                                    <div className="number-left-rooms">
                                        <p>Còn 5 phòng</p>
                                        <button className="book-btn">Đặt</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="room-items">
                            <img src="/src/assets/images/room1.png" alt="roomImg" />
                            <div className="info-room">
                                <h3>Phòng đôi Superior, 1 giường cỡ king (City View)</h3>
                                <ul className="conv-room">
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faWifi} />  <span>Wifi miễn phí</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCar} />  <span>Bãi đậu xe tự phục vụ miễn phí</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBorderTopLeft} />  <span>23 mét vuông</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faUserGroup} />  <span>3 khách</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCheck} />  <span>Đặt ngay, thanh toán sau</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faBed} />  <span>1 giường cỡ king</span></li>
                                    <li className="service-room-item"><FontAwesomeIcon className="service-room-icon" icon={faCity} />  <span>Quang cảnh thành phố</span></li>
                                    <li className="service-room-item"><svg className="service-room-icon moon-icon" width="22" height="22"><image width="22" height="22" href="/src/assets/images/loyalty.svg" /></svg>  <span>Tích lũy tem</span></li>
                                </ul>
                                <div className="refund">
                                    <p>Hoàn tiền toàn bộ</p>
                                    <p>Trước Chủ nhật, 21 tháng 5, 2023</p>
                                </div>
                                <div className="cost-book">
                                    <div className="price-room">
                                        <span className="discount">Giảm 31%</span>
                                        <div className="price"><span className="discounted-price">1.547.164 ₫</span> <span className="origin-price">2.242.267 ₫</span></div>
                                        <p>Tổng 1.786.974 ₫ bao gồm thuế & phí</p>
                                    </div>
                                    <div className="number-left-rooms">
                                        <p>Còn 5 phòng</p>
                                        <button className="book-btn">Đặt</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="location" className="location">
                    <div className="location-info">
                        <div className="title-info">
                            <h2>Thông tin về nơi lưu trú này</h2>
                        </div>
                        <div className="content-info">
                            <div className="description-hotel">
                                <h3>The Hanoi Club Hotel & Residences</h3>
                                <p>The Hanoi Club Hotel & Residences có sòng bạc và bạn chỉ cần lái xe 5 phút là đến được Hồ Hoàn Kiếm. Sau khi vui chơi thỏa thích ở hồ bơi ngoài trời, bạn có thể lấp đầy chiếc bụng đói tại quán cà phê. Các tiện nghi nổi bật khác tại khách sạn cao cấp này bao gồm 2 sân quần vợt ngoài trời, trung tâm thể dục và hồ bơi dành cho trẻ em. Du khách đánh giá cao nhân viên nhiệt tình và địa điểm.</p>
                            </div>
                            <div className="language">
                                <h3>Ngôn ngữ</h3>
                                <p>Tiếng Trung Phổ thông, Tiếng Anh, Tiếng Việt</p>
                            </div>
                        </div>
                    </div>
                    <div className="location-overview">
                        <div className="title-info">
                            <h2>Tổng quan</h2>
                        </div>
                        <div className="content-info grid-location-service">
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Quy mô khách sạn</h3>
                                    <ul>
                                        <li>140 phòng</li>
                                        <li>Gồm 7 tầng</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Trẻ em</h3>
                                    <ul>
                                        <li>1 trẻ 6 tuổi trở xuống lưu trú miễn phí cùng cha mẹ hoặc người giám hộ nếu sử dụng giường có sẵn</li>
                                        <li>Không có nôi (giường cũi cho trẻ sơ sinh)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Nhận phòng/Trả phòng</h3>
                                    <ul>
                                        <li>Nhận phòng từ 14:00 đến nửa đêm</li>
                                        <li>Việc nhận phòng sớm tùy tình hình phòng thực tế</li>
                                        <li>Tuổi tối thiểu để nhận phòng: 18</li>
                                        <li>Giờ trả phòng là 12:00</li>
                                        <li>Việc trả phòng muộn tùy tình hình phòng thực tế</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Vật nuôi</h3>
                                    <ul>
                                        <li>Không được mang theo thú cưng lẫn vật nuôi hỗ trợ người khuyết tật</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Giới hạn liên quan đến chuyến đi của bạn</h3>
                                    <ul>
                                        <li>Kiểm tra giới hạn COVID-19</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faWifi} /></div>
                                <div>
                                    <h3>Internet</h3>
                                    <ul>
                                        <li>Truy cập Internet Wifi và có dây miễn phí tại các khu vực chung</li>
                                        <li>Truy cập Wifi và Internet có dây miễn phí tại phòng</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Hướng dẫn nhận phòng đặc biệt</h3>
                                    <ul>
                                        <li>Nhân viên tiếp tân sẽ đón tiếp khách tại nơi lưu trú</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCar} /></div>
                                <div>
                                    <h3>Bãi đậu xe</h3>
                                    <ul>
                                        <li>Có bãi đậu xe tự phục vụ miễn phí trong khuôn viên</li>
                                        <li>Có bãi đậu xe có người phục vụ có mái che miễn phí trong khuôn viên</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Cần cung cấp khi nhận phòng</h3>
                                    <ul>
                                        <li>Cần đặt cọc chi phí phát sinh bằng thẻ tín dụng, ghi nợ hoặc tiền mặt</li>
                                        <li>Có thể cần giấy tờ tùy thân (ID) có ảnh hợp lệ</li>
                                        <li>Tuổi nhận phòng tối thiểu là 18</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location-overview-item">
                                <div><FontAwesomeIcon className="location-overview-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Thông tin khác</h3>
                                    <ul>
                                        <li>Nơi lưu trú không khói thuốc</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="service" className="service">
                    <div className="service-info">
                        <div className="title-info">
                            <h2>Tiện nghi, dịch vụ nơi lưu trú</h2>
                        </div>
                        <div className="content-info grid-location-service">
                            <div className="service-info-item">
                                <div><FontAwesomeIcon className="service-info-icon" icon={faUtensils} /></div>
                                <div>
                                    <h3>Ăn uống</h3>
                                    <ul>
                                        <li>Bữa sáng buffet (áp dụng phụ phí) vào mỗi buổi sáng từ 6:00 - 10:00</li>
                                        <li>Nhà hàng</li>
                                        <li>Quán cà phê</li>
                                        <li>Phục vụ cà phê/trà tại khu vực chung</li>
                                        <li>Dịch vụ phòng (có giới hạn thời gian)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service-info-item">
                                <div><FontAwesomeIcon className="service-info-icon" icon={faBellConcierge} /></div>
                                <div>
                                    <h3>Dịch vụ</h3>
                                    <ul>
                                        <li>Quầy tiếp tân phục vụ 24 giờ/ngày</li>
                                        <li>Dịch vụ tư vấn/hỗ trợ khách</li>
                                        <li>Dịch vụ hỗ trợ tour/vé du lịch</li>
                                        <li>Dịch vụ giặt ủi/giặt khô</li>
                                        <li>Báo miễn phí ở sảnh</li>
                                        <li>Dịch vụ trông giữ/bảo quản hành lý</li>
                                        <li>Dịch vụ cưới</li>
                                        <li>Nhân viên khiêng hành lý/hỗ trợ khách</li>
                                        <li>Gậy đánh golf</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service-info-item">
                                <div><FontAwesomeIcon className="service-info-icon" icon={faChild} /></div>
                                <div>
                                    <h3>Đi cùng trẻ em</h3>
                                    <ul>
                                        <li>Trẻ em lưu trú miễn phí (xem chi tiết)</li>
                                        <li>Hồ bơi trẻ em</li>
                                        <li>Sân chơi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service-info-item">
                                <div><FontAwesomeIcon className="service-info-icon" icon={faCheck} /></div>
                                <div>
                                    <h3>Cơ sở, tiện nghi</h3>
                                    <ul>
                                        <li>1 tòa nhà/tháp</li>
                                        <li>Năm xây dựng 2010</li>
                                        <li>Dịch vụ ATM/ngân hàng</li>
                                        <li>Két an toàn ở quầy tiếp tân</li>
                                        <li>Sân hiên</li>
                                        <li>TV ở khu vực chung</li>
                                        <li>Trung tâm thể thao</li>
                                        <li>Sân tập golf trong khuôn viên</li>
                                        <li>Hồ bơi ngoài trời</li>
                                        <li>Sòng bạc</li>
                                        <li>Cửa hàng dụng cụ golf trong khuôn viên</li>
                                        <li>Máy đánh bạc tự động</li>
                                        <li>2 sân quần vợt ngoài trời</li>
                                        <li>Sảnh tiếp tân</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service-info-item">
                                <div><FontAwesomeIcon className="service-info-icon" icon={faTicket} /></div>
                                <div>
                                    <h3>Vui chơi, giải trí</h3>
                                    <ul>
                                        <li>Quần vợt</li>
                                        <li>Lớp thể dục</li>
                                        <li>Lớp yoga</li>
                                        <li>Lớp golf với người hướng dẫn chuyên nghiệp</li>
                                        <li>Điểm cho thuê xe đạp lân cận</li>
                                        <li>Điểm cho thuê xe gắn máy/xe tay ga lân cận</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service-info-item">
                                <div><FontAwesomeIcon className="service-info-icon" icon={faWheelchair} /></div>
                                <div>
                                    <h3>Hỗ trợ người khuyết tật</h3>
                                    <ul>
                                        <li>Thang máy</li>
                                        <li>Phòng tắm phù hợp cho người khuyến tật (một số phòng)</li>
                                        <li>Bàn hỗ trợ phù hợp cho xe lăn</li>
                                        <li>Có lối đi lại cho xe lăn đến thang máy</li>
                                        <li>Bàn đăng ký phù hợp cho xe lăn</li>
                                        <li>Nhà hàng phù hợp cho xe lăn</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service-info-item">
                                <div><FontAwesomeIcon className="service-info-icon" icon={faBriefcase} /></div>
                                <div>
                                    <h3>Làm việc từ xa</h3>
                                    <ul>
                                        <li>Trung tâm dịch vụ văn phòng</li>
                                        <li>5 phòng họp</li>
                                        <li>Trung tâm hội nghị</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <Footer />
      </>  
    );
};

export default DetailHotelPage;