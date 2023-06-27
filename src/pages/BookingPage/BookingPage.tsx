import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import "./BookingPage.css"
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingPage: React.FC = () => {
    const navigate = useNavigate();

    const [firstNameStep1, setFirstNameStep1] = useState("");
    const [lastNameStep1, setLastNameStep1] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstNameStep2, setFirstNameStep2] = useState("");
    const [lastNameStep2, setLastNameStep2] = useState("");
    const [typeCard, setTypeCard] = useState("");
    const [numberCard, setNumberCard] = useState("");
    const [expireDate, setExpireDate] = useState({month: "", year: ""});
    const [securityCode, setSecurityCode] = useState("");

    const [errorFirstNameStep1, setErrorFirstNameStep1] = useState("");
    const [errorLastNameStep1, setErrorLastNameStep1] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
    const [errorFirstNameStep2, setErrorFirstNameStep2] = useState("");
    const [errorLastNameStep2, setErrorLastNameStep2] = useState("");
    const [errorTypeCard, setErrorTypeCard] = useState("");
    const [errorNumberCard, setErrorNumberCard] = useState("");
    const [errorExprireDate, setErrorExpireDate] = useState("");
    const [errorSecurityCode, setErrorSecurityCode] = useState("");

    const [errorForm, setErrorForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setErrorForm(false);
        }, 3000); // Đặt thời gian đợi là 3 giây
    
        return () => {
          clearTimeout(timer);
        };
    }, [errorForm]);

    const handleFirstNameStep1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z._()' -]*$/;
        if (!regex.test(value)) {
            setErrorFirstNameStep1("Vui lòng nhập họ chỉ gồm chữ cái không dấu, dấu gạch nối, dấu gạch dưới, dấu chấm, dấu ngoặc, dấu ngoặc đơn và khoảng trắng.");
        } else setErrorFirstNameStep1("");
        setFirstNameStep1(value);
    }

    const handleFirstNameStep2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z._()' -]*$/;
        if (!regex.test(value)) {
            setErrorFirstNameStep2("Vui lòng nhập họ chỉ gồm chữ cái không dấu, dấu gạch nối, dấu gạch dưới, dấu chấm, dấu ngoặc, dấu ngoặc đơn và khoảng trắng.");
        } else setErrorFirstNameStep2("");
        setFirstNameStep2(value);
    }

    const handleLastNameStep1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z._()' -]*$/;
        if (!regex.test(value)) {
            setErrorLastNameStep1("Vui lòng nhập tên chỉ gồm chữ cái không dấu, dấu gạch nối, dấu gạch dưới, dấu chấm, dấu ngoặc, dấu ngoặc đơn và khoảng trắng.");
        } else setErrorLastNameStep1("");
        setLastNameStep1(value);
    }

    const handleLastNameStep2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z._()' -]*$/;
        if (!regex.test(value)) {
            setErrorLastNameStep2("Vui lòng nhập tên chỉ gồm chữ cái không dấu, dấu gạch nối, dấu gạch dưới, dấu chấm, dấu ngoặc, dấu ngoặc đơn và khoảng trắng.");
        } else setErrorLastNameStep2("");
        setLastNameStep2(value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setErrorEmail("");
    }

    const handleEmailError = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
            setErrorEmail("Vui lòng nhập địa chỉ email hợp lệ, ngoài ra chỉ chứa chữ cái không dấu, số, cần dấu chấm và ký hiệu @")
        } else {
            setErrorEmail("");
        }
        if (!email) setErrorEmail("");
    }

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/[a-zA-Z]/.test(value)) {
            setErrorPhoneNumber("Xóa mọi chữ cái khỏi số điện thoại của bạn");
        } else setErrorPhoneNumber("");
        setPhoneNumber(value);
    }

    const handleTypeCardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value) setErrorTypeCard(""); 
        setTypeCard(value);
    }

    const handleNumberCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) setErrorNumberCard("");
        const formattedValue = formatInputNumberCardValue(value);
        setNumberCard(formattedValue);
    }

    const formatInputNumberCardValue = (value: string) => {
        const numericValue = value.replace(/\D/g, '');
        const groups = numericValue.match(/.{1,4}/g);
        if (!groups || groups.length === 1) {
          return numericValue;
        }
        return groups.join(' ');
    };

    const handleExpireMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            if (value && expireDate.year) setErrorExpireDate("");
            if (value === '00') setExpireDate(prevState => ({ ...prevState, month: "01" }));
            else {
                const parsedInput = parseInt(value, 10);
                if (parsedInput > 12) setExpireDate(prevState => ({ ...prevState, month: "12" }));
                else if (parsedInput >= 2 && parsedInput <= 9) setExpireDate(prevState => ({ ...prevState, month: `0${parsedInput}` }));
                else setExpireDate(prevState => ({ ...prevState, month: value }));
            }
        }
    }

    const handleExpireYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {  
            if (value && expireDate.month) setErrorExpireDate("");
            setExpireDate(prevState => ({ ...prevState, year: value }));
        }
    }

    const handleExpiredCard = () => {
        const thisDate = new Date();
        const thisYear = thisDate.getFullYear() - 2000;
        const monthInput = parseInt(expireDate.month, 10);
        const yearInput = parseInt(expireDate.year, 10);
        if (yearInput < thisYear || yearInput > thisYear + 20 || (yearInput === thisYear && monthInput < thisDate.getMonth() + 1)) {
            setErrorExpireDate("Năm hết hạn không hợp lệ hoặc thẻ của bạn đã hết hạn")
        } else setErrorExpireDate("");
    }

    const handleSecurityCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setErrorSecurityCode("");
            setSecurityCode(value);
        }
    }

    const handleNotEnoughNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value && value.length < 3) setErrorSecurityCode("Vui lòng nhập đúng mã bảo mật thẻ gồm 3 chữ số.")
        else setErrorSecurityCode("");
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let count = 0;

        if (!firstNameStep1) {
            setErrorFirstNameStep1("Vui lòng nhập họ của bạn");
            count++;
        } else if (errorFirstNameStep1) {
            count++; 
        } else setErrorFirstNameStep1("");

        if (!lastNameStep1) {
            setErrorLastNameStep1("Vui lòng nhập tên của bạn");
            count++;
        } else if (errorLastNameStep1) {
            count++; 
        } else setErrorLastNameStep1("");

        if (!email) {
            setErrorEmail("Vui lòng nhập địa chỉ email của bạn");
            count++;
        } else if (email.length < 5) {
            setErrorEmail("Vui lòng nhập địa chỉ email chứa ít nhất 5 ký tự")
            count++; 
        } else if (errorEmail) {
            count++
        } else setErrorEmail("");

        if (!phoneNumber) {
            setErrorPhoneNumber("Vui lòng nhập số điện thoại của bạn");
            count++;
        } else if (phoneNumber.length < 5) {
            setErrorPhoneNumber("Vui lòng nhập số điện thoại chứa ít nhất 5 chữ số")
            count++; 
        } else if (errorPhoneNumber) {
            count++
        } else setErrorPhoneNumber("");

        if (!firstNameStep2) {
            setErrorFirstNameStep2("Vui lòng nhập họ của bạn");
            count++;
        } else if (errorFirstNameStep2) {
            count++; 
        } else setErrorFirstNameStep2("");

        if (!lastNameStep2) {
            setErrorLastNameStep2("Vui lòng nhập tên của bạn");
            count++;
        } else if (errorLastNameStep2) {
            count++; 
        } else setErrorLastNameStep2("");

        if (!typeCard) {
            setErrorTypeCard("Vui lòng chọn loại thẻ");
            count++;
        } else setErrorTypeCard("");

        if (!numberCard) {
            setErrorNumberCard("Vui lòng nhập số thẻ của bạn");
            count++;
        } else setErrorNumberCard("");

        if (!expireDate.month || !expireDate.year) {
            setErrorExpireDate("Vui lòng nhập tháng và năm hết hạn thẻ của bạn");
            count++;
        } else if (errorExprireDate) {
            count++;
        } else setErrorExpireDate("");

        if (!securityCode) {
            setErrorSecurityCode("Vui lòng nhập mã số bảo mật thẻ của bạn");
            count++;
        } else if (errorSecurityCode) {
            count++;
        } else setErrorSecurityCode("");
        
        if (count != 0) {
            setErrorForm(true);
            return;
        } else {
            navigate("/");
        } 
    }

    return (
        <>
            <Header />
            <div className="booking-page">
                <h1 className="hotel-name">The Hanoi Club Hotel & Residences</h1>
                <div className="booking-page-content">
                    <div className="main-col">
                        <div className="contact-details">
                            <div className="contact-details-header">
                                <FontAwesomeIcon className="icon" icon={faUser} />
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
                                <form onSubmit={handleSubmit} id="booking-form">
                                    <div className="field-container">
                                        <label>
                                            <span className="field-name">Họ</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span className="note">Vui lòng cho biết tên của một trong những khách sẽ ở phòng này</span>
                                        </label>
                                        <br/>
                                        <input
                                            type="text"
                                            maxLength={40} 
                                            autoComplete="on"
                                            autoCapitalize="words"
                                            value={firstNameStep1}
                                            onChange={handleFirstNameStep1Change}
                                        />
                                        {errorFirstNameStep1 && <div className="error-message"><p>{errorFirstNameStep1}</p></div>}
                                    </div>
                                    <div className="field-container">
                                        <label>
                                            <span className="field-name">Tên</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={25} 
                                            autoComplete="on"
                                            autoCapitalize="words"
                                            value={lastNameStep1}
                                            onChange={handleLastNameStep1Change}
                                        />
                                        {errorLastNameStep1 && <div className="error-message"><p>{errorLastNameStep1}</p></div>}
                                    </div>
                                    <div className="field-container">
                                        <label>
                                            <span className="field-name">Địa chỉ email</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span className="note">Địa chỉ sẽ nhận email xác nhận đặt phòng</span>
                                        </label>
                                        <br/>
                                        <input
                                            type="text"
                                            value={email}
                                            autoComplete="on"
                                            onChange={handleEmailChange}
                                            onBlur={handleEmailError}
                                        />
                                        {errorEmail && <div className="error-message"><p>{errorEmail}</p></div>}
                                    </div>
                                    <div className="field-container">
                                        <label>
                                            <span className="field-name">Số điện thoại di động</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span className="note">Chúng tôi sẽ chỉ liên hệ trong trường hợp khẩn cấp</span>
                                        </label>
                                        <br/>
                                        <input
                                            type="tel"
                                            maxLength={17}
                                            autoComplete="on"
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                        />
                                        {errorPhoneNumber && <div className="error-message"><p>{errorPhoneNumber}</p></div>}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="payment-details">
                            <div className="payment-details-header">
                                <FontAwesomeIcon className="icon" icon={faLock} />
                                <span>Bước 2: Chi tiết thanh toán</span>
                                <span className="secure-payment-message">Đặt phòng an toàn</span>
                            </div>
                            <div className="payment-details-body">
                                <div className="using-card-message">
                                    <FontAwesomeIcon className="tick-icon" icon={faCheck} />
                                    <span>Chúng tôi <b>không bao giờ</b> thu phí sử dụng thẻ</span>
                                </div>
                                <div className="required-field-label">
                                    <span className="span-require">*</span>
                                    <span className="span-note">Trường bắt buộc</span>
                                </div>
                                <div className="payment-details-panel">
                                    <div className="payment-details-info">
                                        <div className="field-container">
                                            <label>
                                                <span className="field-name">Họ</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <input
                                                type="text"
                                                maxLength={40}
                                                autoCapitalize="words"
                                                autoComplete="on"
                                                value={firstNameStep2}
                                                onChange={handleFirstNameStep2Change}
                                                form="booking-form" 
                                            />
                                            {errorFirstNameStep2 && <div className="error-message"><p>{errorFirstNameStep2}</p></div>}
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span className="field-name">Tên</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <input
                                                type="text"
                                                maxLength={25}
                                                autoCapitalize="words"
                                                autoComplete="on" 
                                                value={lastNameStep2}
                                                onChange={handleLastNameStep2Change}
                                                form="booking-form"
                                            />
                                            {errorLastNameStep2 && <div className="error-message"><p>{errorLastNameStep2}</p></div>}
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span className="field-name">Loại thẻ</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <select 
                                                form="booking-form"
                                                value={typeCard}
                                                onChange={handleTypeCardChange}
                                            >
                                                <option value="">Loại thẻ</option>
                                                <option value="jcb">JCB</option>
                                                <option value="mastercard">Mastercard</option>
                                                <option value="visa">Visa</option>
                                            </select>
                                            {errorTypeCard && <div className="error-message"><p>{errorTypeCard}</p></div>}
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span className="field-name">Số thẻ</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                                <span className="note">Số thẻ thường gồm 16 chữ số</span>
                                            </label>
                                            <div className="card-number">
                                                <span className="icon-padlock">
                                                    <FontAwesomeIcon className="lock-icon" icon={faLock} />
                                                </span>
                                                <input
                                                    className="card-number-field"
                                                    type="tel"
                                                    maxLength={23} 
                                                    inputMode="numeric"
                                                    placeholder="0000 0000 0000 0000"
                                                    value={numberCard}
                                                    onChange={handleNumberCardChange}
                                                    form="booking-form"
                                                />
                                                {errorNumberCard && <div className="error-message"><p>{errorNumberCard}</p></div>}
                                            </div>
                                        </div>
                                        <div className="field-container expire-day">
                                            <label>
                                                <span className="field-name">Ngày hết hạn</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <input
                                                type="tel"
                                                maxLength={2}
                                                placeholder="MM"
                                                value={expireDate.month}
                                                onChange={handleExpireMonthChange}
                                                onBlur={handleExpiredCard}
                                                form="booking-form"
                                            />
                                            <strong style={{margin: "0 5px"}}>/</strong>
                                            <input
                                                type="tel"
                                                maxLength={2}
                                                placeholder="YY"
                                                value={expireDate.year}
                                                onChange={handleExpireYearChange}
                                                onBlur={handleExpiredCard}
                                                form="booking-form"
                                            />
                                            {errorExprireDate && <div className="error-message"><p>{errorExprireDate}</p></div>}
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span className="field-name">Mã số bảo mật</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                                <span className="note">3 chữ số cuối cùng trên phần chữ ký ở mặt sau thẻ</span>
                                            </label>
                                            <br/>
                                            <input
                                                className="security-code-field"
                                                type="tel"
                                                maxLength={3} 
                                                placeholder="000"
                                                value={securityCode}
                                                onChange={handleSecurityCodeChange}
                                                onBlur={handleNotEnoughNumber}
                                                form="booking-form"
                                            />
                                            {errorSecurityCode && <div className="error-message"><p>{errorSecurityCode}</p></div>}
                                        </div>
                                    </div>
                                    <div className="payment-details-method">
                                        <h3>Chúng tôi nhận thanh toán bằng các hình thức sau</h3>
                                        <ul className="payment-method-list">
                                            <li><img src="/src/assets/images/jcb-card-icon.png" width={35} /></li>
                                            <li><img src="/src/assets/images/master-card.png" width={35} /></li>
                                            <li><img className="visa" src="/src/assets/images/visa.png" width={40} /></li>
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
                            <table className="booking-details-travel">
                                <tr><td style={{width: "100px", textAlign: "left"}}>Nhận phòng</td><td style={{textAlign: "right"}}><b>Thứ ba, ngày 27 tháng 06 năm 2023</b> (14:00)</td></tr>
                                <tr><td style={{width: "100px", textAlign: "left"}}>Trả phòng</td><td style={{textAlign: "right"}}><b>Thứ tư, ngày 28 tháng 06 năm 2023</b> (12:00)</td></tr>
                                <tr style={{height: "40px", textAlign: "right"}}><td colSpan={2}><span className="num">1 đêm, 1 phòng</span></td></tr>
                            </table>
                            <hr style={{clear: "right"}}/>
                            <div className="terms-of-booking">
                                <h2>Điều khoản đặt phòng</h2>
                                <p>
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
                                <div className="name-address">
                                    <h3>The Hanoi Club Hotel & Residences</h3>
                                    <h4>Khách sạn 4 sao</h4>
                                    <p>76 Yên Phụ, Tây Hồ, Hà Nội, Việt Nam</p>
                                </div>
                                <div className="rating-score">
                                    <div className="rating-score-icon">8,4</div>
                                    <div className="rating-score-word">Rất tốt</div>
                                </div>
                            </div>
                            <table className="travel-details">
                                <tr><td style={{textAlign: "left", height: "60px"}}>Nhận phòng</td><td style={{textAlign: "right"}}><b>Thứ ba, ngày 27 tháng 06 năm 2023</b> (14:00)</td></tr>
                                <tr><td style={{textAlign: "left", height: "60px"}}>Trả phòng</td><td style={{textAlign: "right"}}><b>Thứ tư, ngày 28 tháng 06 năm 2023</b> (12:00)</td></tr>
                                <tr style={{textAlign: "right", height: "30px"}}><td colSpan={2}><span className="num">1 đêm, 1 phòng</span></td></tr>
                            </table>
                        </div>
                        <div className="finance-details">
                            <div className="room-type-name">Phòng đôi Superior, 1 giường cỡ king (City View)</div>
                            <hr />
                            <table className="price-breakdown">
                                <tr>
                                    <td style={{textAlign: "left", width: "70%"}}>Thứ ba, ngày 27 tháng 06 năm 2023</td>
                                    <td style={{textAlign: "right"}}>1.547.164 ₫</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: "left", width: "70%"}}>Thuế & phí</td>
                                    <td style={{textAlign: "right"}}>239.810 ₫</td>
                                </tr>
                            </table>
                            <div className="total-price">
                                <div className="promotion">
                                    <div><FontAwesomeIcon className="tag-icon" icon={faTag} /></div>
                                    <div><b>Tiết kiệm:</b> Bạn đang tiết kiệm 31%</div>
                                </div>
                                <hr/>
                                <table className="details-total-price">
                                    <tr>
                                        <td><strong>Tổng giá</strong></td>
                                        <td className="price"><strong>1.786.974 ₫</strong></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="price-increase-container">
                                <div><FiArrowUpRight className="tag-icon" /></div>
                                <div><strong>Giá có thể tăng nếu bạn đặt về sau.</strong></div>
                            </div>
                            <div className="pre-pay-notice">
                                <p>Sẽ xác nhận đặt phòng và thu khoản thanh toán trong hôm nay.</p>
                            </div>
                        </div>
                    </div>  
                </div>
                {errorForm && <div className="error-message-form">Vui lòng điền đầy đủ và hợp lệ tất cả thông tin</div>}
            </div>
            <Footer />
        </>
    );
};

export default BookingPage;