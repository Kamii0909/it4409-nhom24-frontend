import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleCheck, faLock, faTag, faUpLong, faUser } from "@fortawesome/free-solid-svg-icons";
import "./BookingPage.css"
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const BookingPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="booking-page">
                <h2 className="hotel-name">The Hanoi Club Hotel & Residences</h2>
                <div className="booking-page-content">
                    <div className="main-col">
                        <div className="contact-details">
                            <div className="contact-details-header">
                                <FontAwesomeIcon className="contact-icon" icon={faUser} />
                                <span>Bước 1: Thông tin về bạn</span>
                            </div>
                            <div className="contact-details-body">
                                <p className="identification-warning">
                                    Vui lòng cho chúng tôi biết tên khách sẽ lưu trú tại phòng này chính xác 
                                    như trên giấy tờ tùy thân sẽ sử dụng khi nhận phòng. 
                                    Vui lòng nhập đầy đủ nếu khách mang họ kép (như Nguyễn Phước, Tôn Nữ, v.v.).
                                </p>
                                <div className="required-field-label">
                                    <span className="span-require">*</span>
                                    <span className="span-note">Trường bắt buộc</span>
                                </div>
                                <form id="booking-form">
                                    <div className="field-container">
                                        <label>
                                            <span>Họ</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span>Vui lòng cho biết tên của một trong những khách sẽ ở phòng này.</span>
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={40} 
                                        />
                                    </div>
                                    <div className="field-container">
                                        <label>
                                            <span>Tên</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={25} 
                                        />
                                    </div>
                                    <div className="field-container">
                                        <label>
                                            <span>Địa chỉ email</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span>Địa chỉ sẽ nhận email xác nhận đặt phòng</span>
                                        </label>
                                        <input
                                            type="text"
                                        />
                                    </div>
                                    <div className="field-container">
                                        <label>
                                            <span>Số điện thoại di động</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span>Chúng tôi sẽ chỉ liên hệ trong trường hợp khẩn cấp</span>
                                        </label>
                                        <input
                                            type="tel"
                                            maxLength={17}
                                        />
                                    </div>
                                    <div className="field-container">
                                        <input type="checkbox" />
                                        <span>Gửi tôi email về ưu đãi hấp dẫn, khuyến mãi phút chót và thông tin về nơi lưu trú</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="payment-details">
                            <div className="payment-details-header">
                                <FontAwesomeIcon className="payment-icon" icon={faLock} />
                                <span>Bước 2: Chi tiết thanh toán</span>
                                <span className="secure-payment-message">Đặt phòng an toàn</span>
                            </div>
                            <div className="payment-details-body">
                                <FontAwesomeIcon className="tick-icon" icon={faCircleCheck} />
                                <span>Chúng tôi <b>không bao giờ</b> thu phí sử dụng thẻ</span>
                                <div className="required-field-label">
                                    <span className="span-require">*</span>
                                    <span className="span-note">Trường bắt buộc</span>
                                </div>
                                <div className="payment-details-panel">
                                    <div className="payment-details-info">
                                        <div className="field-container">
                                            <label>
                                                <span>Họ</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <input
                                                type="text"
                                                maxLength={40}
                                                form="booking-form" 
                                            />
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span>Tên</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <input
                                                type="text"
                                                maxLength={25} 
                                                form="booking-form"
                                            />
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span>Loại thẻ</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <select form="booking-form">
                                                <option value="">Loại thẻ</option>
                                                <option value="jcb">JCB</option>
                                                <option value="mastercard">Mastercard</option>
                                                <option value="visa">Visa</option>
                                            </select>
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span>Số thẻ</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <span className="icon-padlock">
                                                <FontAwesomeIcon className="lock-icon" icon={faLock} />
                                            </span>
                                            <input
                                                type="tel"
                                                maxLength={23} 
                                                inputMode="numeric"
                                                placeholder="0000 0000 0000 0000"
                                                form="booking-form"
                                            />
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span>Ngày hết hạn</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <input
                                                type="tel"
                                                maxLength={2}
                                                placeholder="MM"
                                                form="booking-form"
                                            />
                                            <strong>/</strong>
                                            <input
                                                type="tel"
                                                maxLength={2}
                                                placeholder="YY"
                                                form="booking-form"
                                            />
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span>Mã số bảo mật</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <input
                                                type="tel"
                                                maxLength={3} 
                                                placeholder="000"
                                                form="booking-form"
                                            />
                                        </div>
                                    </div>
                                    <div className="payment-details-method">
                                        <h3>Chúng tôi nhận thanh toán bằng các hình thức sau</h3>
                                        <ul className="payment-method-list">
                                            <li><img src="/src/assets/images/jcb-card-icon.png" width={35} /></li>
                                            <li><img src="/src/assets/images/master-card.png" width={35} /></li>
                                            <li><img src="/src/assets/images/visa.png" width={35} /></li>
                                        </ul>
                                        <div className="payment-details-security-assurance">
                                            <h3>Hãy tin tưởng chúng tôi</h3>
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon className="icon" icon={faCheck} />
                                                    <span>Chúng tôi sử dụng phương thức truyền tải an toàn</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className="icon" icon={faCheck} />
                                                    <span>Chúng tôi bảo vệ thông tin cá nhân của bạn</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>
                        <div className="final-review-section">
                            <div className="booking-details-travel">
                                <p><span>Nhận phòng</span><b>Thứ sáu, ngày 23 tháng 06 năm 2023</b> (14:00)</p>
                                <p><span>Nhận phòng</span><b>Thứ sáu, ngày 23 tháng 06 năm 2023</b> (14:00)</p>
                                <p className="num">1 đêm, 1 phòng</p>
                            </div>
                            <div className="terms-of-booking">
                                <h2>Điều khoản đặt phòng</h2>
                                <p className="terms-privacy-message">
                                    Bằng việc bấm "Đặt phòng", bạn xác nhận đã đồng ý Điều khoản & Điều kiện, 
                                    Chính sách bảo mật và Hướng dẫn du lịch của chính phủ của chúng tôi.
                                </p>
                                <p>
                                    Chúng tôi sẽ không bao giờ bán thông tin cá nhân của bạn 
                                    và chúng tôi sử dụng phương thức truyền tải an toàn để bảo vệ thông tin cá nhân của bạn.
                                </p>
                            </div>
                            <div className="book-button-area">
                                <button type="submit" form="booking-form">Đặt phòng</button>
                            </div>
                        </div>
                    </div>
                    <div className="aside-col">
                        <div className="booking-details">
                            <div className="widget-carousel">
                                <ImageSlider />
                            </div>
                            <div className="hotel-info">
                                <h3>The Hanoi Club Hotel & Residences</h3>
                                <h4>Khách sạn 4 sao</h4>
                                <p>76 Yên Phụ, Tây Hồ, Hà Nội, Việt Nam</p>
                                <div className="rating-score">
                                    <div className="rating-score-icon">8.4</div>
                                    <div className="rating-score-word">Rất tốt</div>
                                </div>
                            </div>
                            <div className="booking-details-travel">
                                <p><span>Nhận phòng</span><b>Thứ sáu, ngày 23 tháng 06 năm 2023</b> (14:00)</p>
                                <p><span>Nhận phòng</span><b>Thứ sáu, ngày 23 tháng 06 năm 2023</b> (14:00)</p>
                                <p className="num">1 đêm, 1 phòng</p>
                            </div>
                        </div>
                        <div className="finance-details">
                            <div className="room-type-name">Phòng đôi Superior, 1 giường cỡ king (City View)</div>
                            <hr />
                            <div className="price-breakdown">
                                <div className="description-value-row">
                                    <div className="col-description">Thứ sáu, ngày 23 tháng 06 năm 2023</div>
                                    <div className="col-value">1.547.164 ₫</div>
                                </div>
                                <div className="tax-fee-row">
                                    <div className="col-description">Thuế & phí</div>
                                    <div className="col-value">239.810 ₫</div>
                                </div>
                            </div>
                            <div className="total-price">
                                <div className="promotion">
                                    <FontAwesomeIcon className="tag-icon" icon={faTag} />
                                    <p><span>Tiết kiệm:</span> Bạn đang tiết kiệm 31%</p>
                                </div>
                                <hr />
                                <div className="details-total-price">
                                    <div className="col-description"><strong>Tổng giá</strong></div>
                                    <div className="col-value"><strong>1.786.974 ₫</strong></div>
                                </div>
                            </div>
                            <div className="price-increase-container">
                                <FontAwesomeIcon className="tag-icon" icon={faUpLong} />
                                <span>Giá có thể tăng nếu bạn đặt về sau.</span>
                            </div>
                            <div className="pre-pay-notice">
                                <p>Sẽ xác nhận đặt phòng và thu khoản thanh toán trong hôm nay.</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BookingPage;