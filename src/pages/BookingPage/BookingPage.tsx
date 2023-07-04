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
            setErrorFirstNameStep1("Please enter a first name that contains only letters, underscores, hyphens, full stops, brackets, apostrophes, and spaces.");
        } else setErrorFirstNameStep1("");
        setFirstNameStep1(value);
    }

    const handleFirstNameStep2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z._()' -]*$/;
        if (!regex.test(value)) {
            setErrorFirstNameStep2("Please enter a first name that contains only letters, underscores, hyphens, full stops, brackets, apostrophes, and spaces.");
        } else setErrorFirstNameStep2("");
        setFirstNameStep2(value);
    }

    const handleLastNameStep1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z._()' -]*$/;
        if (!regex.test(value)) {
            setErrorLastNameStep1("Please enter a surname that contains only letters, underscores, hyphens, full stops, brackets, apostrophes, and spaces.");
        } else setErrorLastNameStep1("");
        setLastNameStep1(value);
    }

    const handleLastNameStep2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z._()' -]*$/;
        if (!regex.test(value)) {
            setErrorLastNameStep2("Please enter a surname that contains only letters, underscores, hyphens, full stops, brackets, apostrophes, and spaces.");
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
            setErrorEmail("Please enter a value email, that contains letters, numbers, include dot and @ symbol")
        } else {
            setErrorEmail("");
        }
        if (!email) setErrorEmail("");
    }

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/[a-zA-Z]/.test(value)) {
            setErrorPhoneNumber("Please remove any letters from your mobile number.");
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
            setErrorExpireDate("Enter a valid number to represent the month and year of the expiry date or Your card seems to be expired.")
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
        if (value && value.length < 3) setErrorSecurityCode("Please re-enter your three-digit card security code.")
        else setErrorSecurityCode("");
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let count = 0;

        if (!firstNameStep1) {
            setErrorFirstNameStep1("Please enter your first name.");
            count++;
        } else if (errorFirstNameStep1) {
            count++; 
        } else setErrorFirstNameStep1("");

        if (!lastNameStep1) {
            setErrorLastNameStep1("Please enter your surname.");
            count++;
        } else if (errorLastNameStep1) {
            count++; 
        } else setErrorLastNameStep1("");

        if (!email) {
            setErrorEmail("Please enter your email.");
            count++;
        } else if (email.length < 5) {
            setErrorEmail("Please enter an email address that contains at least five characters.")
            count++; 
        } else if (errorEmail) {
            count++
        } else setErrorEmail("");

        if (!phoneNumber) {
            setErrorPhoneNumber("Please enter your mobile number.");
            count++;
        } else if (phoneNumber.length < 6) {
            setErrorPhoneNumber("Please enter a mobile number that contains at least six digits.")
            count++; 
        } else if (errorPhoneNumber) {
            count++
        } else setErrorPhoneNumber("");

        if (!firstNameStep2) {
            setErrorFirstNameStep2("Please enter your first name.");
            count++;
        } else if (errorFirstNameStep2) {
            count++; 
        } else setErrorFirstNameStep2("");

        if (!lastNameStep2) {
            setErrorLastNameStep2("Please enter your surname.");
            count++;
        } else if (errorLastNameStep2) {
            count++; 
        } else setErrorLastNameStep2("");

        if (!typeCard) {
            setErrorTypeCard("Please select your card type.");
            count++;
        } else setErrorTypeCard("");

        if (!numberCard) {
            setErrorNumberCard("Please enter your card number.");
            count++;
        } else setErrorNumberCard("");

        if (!expireDate.month || !expireDate.year) {
            setErrorExpireDate("Please enter the expired month and the expired year.");
            count++;
        } else if (errorExprireDate) {
            count++;
        } else setErrorExpireDate("");

        if (!securityCode) {
            setErrorSecurityCode("Please enter the security code.");
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
                                <span>Step 1: Your details</span>
                            </div>
                            <div className="contact-details-body">
                                <p className="identification-warning">
                                    Please tell us the name of the guest staying at the hotel as it appears on the ID that they'll present at check-in. If the guest has more than one last name, please enter them all.
                                </p>
                                <div className="required-field-label">
                                    <span className="span-require">*</span>
                                    <span className="span-note">required fields</span>
                                </div>
                                <form onSubmit={handleSubmit} id="booking-form">
                                    <div className="field-container">
                                        <label>
                                            <span className="field-name">First name</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span className="note">Please give us the name of one of the people staying in this room.</span>
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
                                            <span className="field-name">Last name</span>
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
                                            <span className="field-name">Email address</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span className="note">Your confirmation email goes here</span>
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
                                            <span className="field-name">Mobile number</span>
                                            <span className="span-require">*</span>
                                            <br/>
                                            <span className="note">We'll only contact you in an emergency</span>
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
                                <span>Step 2: Payment details</span>
                                <span className="secure-payment-message">Your booking is safe and secure</span>
                            </div>
                            <div className="payment-details-body">
                                <div className="using-card-message">
                                    <FontAwesomeIcon className="tick-icon" icon={faCheck} />
                                    <span>We <b>never</b> charge any card fees</span>
                                </div>
                                <div className="required-field-label">
                                    <span className="span-require">*</span>
                                    <span className="span-note">require fields</span>
                                </div>
                                <div className="payment-details-panel">
                                    <div className="payment-details-info">
                                        <div className="field-container">
                                            <label>
                                                <span className="field-name">First name</span>
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
                                                <span className="field-name">Last name</span>
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
                                                <span className="field-name">Card type</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                            </label>
                                            <select 
                                                form="booking-form"
                                                value={typeCard}
                                                onChange={handleTypeCardChange}
                                            >
                                                <option value="">Card type</option>
                                                <option value="jcb">JCB</option>
                                                <option value="mastercard">Mastercard</option>
                                                <option value="visa">Visa</option>
                                            </select>
                                            {errorTypeCard && <div className="error-message"><p>{errorTypeCard}</p></div>}
                                        </div>
                                        <div className="field-container">
                                            <label>
                                                <span className="field-name">Card number</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                                <span className="note">It should be 16 digits.</span>
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
                                                <span className="field-name">Expiry date</span>
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
                                                <span className="field-name">Security code</span>
                                                <span className="span-require">*</span>
                                                <br/>
                                                <span className="note">This is the last three digits on the signature strip on the back of your card.</span>
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
                                        <h3>We accept the following payment methods</h3>
                                        <ul className="payment-method-list">
                                            <li><img src="/src/assets/images/jcb-card-icon.png" width={35} /></li>
                                            <li><img src="/src/assets/images/master-card.png" width={35} /></li>
                                            <li><img className="visa" src="/src/assets/images/visa.png" width={40} /></li>
                                        </ul>
                                        <div className="payment-details-security-assurance">
                                            <h3>You can count on us</h3>
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon className="icon" icon={faCheck} />
                                                    <span>We use secure transmission</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className="icon" icon={faCheck} />
                                                    <span>We protect your personal information</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>
                        <div className="final-review-section">
                            <table className="booking-details-travel">
                                <tr><td style={{width: "100px", textAlign: "left"}}>Check-in</td><td style={{textAlign: "right"}}><b>Thursday, July 6, 2023</b> (2 PM)</td></tr>
                                <tr><td style={{width: "100px", textAlign: "left"}}>Check-out</td><td style={{textAlign: "right"}}><b>Thursday, July 6, 2023 (2 PM)</b> (noon)</td></tr>
                                <tr style={{height: "40px", textAlign: "right"}}><td colSpan={2}><span className="num">1 night, 1 room</span></td></tr>
                            </table>
                            <hr style={{clear: "right"}}/>
                            <div className="terms-of-booking">
                                <h2>Terms of Booking</h2>
                                <p>
                                    By clicking "Book", you agree you have read and accept our Terms and Conditions, Privacy Policy and Government Travel Advice
                                </p>
                                <p>
                                    We will never sell your personal information and we use secure transmission to protect your personal information.
                                </p>
                            </div>
                            <div className="book-button-area">
                                <button type="submit" form="booking-form">Book</button>
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
                                    <h4>4 star hotel</h4>
                                    <p>76 Yen Phu Street,Tay Ho District, Hanoi, 10000, Vietnam</p>
                                </div>
                                <div className="rating-score">
                                    <div className="rating-score-icon">8,4</div>
                                    <div className="rating-score-word">Very good</div>
                                </div>
                            </div>
                            <table className="travel-details">
                                <tr><td style={{textAlign: "left", height: "60px"}}>Check-in</td><td style={{textAlign: "right"}}><b>Thursday, July 6, 2023</b> (2PM)</td></tr>
                                <tr><td style={{textAlign: "left", height: "60px"}}>Trả phòng</td><td style={{textAlign: "right"}}><b>Friday, July 7, 2023</b> (noon)</td></tr>
                                <tr style={{textAlign: "right", height: "30px"}}><td colSpan={2}><span className="num">1 night, 1 room</span></td></tr>
                            </table>
                        </div>
                        <div className="finance-details">
                            <div className="room-type-name">Studio, 1 King Bed (City View)</div>
                            <hr />
                            <table className="price-breakdown">
                                <tr>
                                    <td style={{textAlign: "left", width: "70%"}}>Thursday, July 6, 2023</td>
                                    <td style={{textAlign: "right"}}>1.547.164 ₫</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: "left", width: "70%"}}>Taxes and fees</td>
                                    <td style={{textAlign: "right"}}>239.810 ₫</td>
                                </tr>
                            </table>
                            <div className="total-price">
                                <div className="promotion">
                                    <div><FontAwesomeIcon className="tag-icon" icon={faTag} /></div>
                                    <div><b>Saving:</b> You're saving 31%</div>
                                </div>
                                <hr/>
                                <table className="details-total-price">
                                    <tr>
                                        <td><strong>Total price</strong></td>
                                        <td className="price"><strong>1.786.974 ₫</strong></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="price-increase-container">
                                <div><FiArrowUpRight className="tag-icon" /></div>
                                <div><strong>This price may increase if you book later.</strong></div>
                            </div>
                            <div className="pre-pay-notice">
                                <p>We'll confirm your booking and take payment today.</p>
                            </div>
                        </div>
                    </div>  
                </div>
                {errorForm && <div className="error-message-form">Please fill in all the fields</div>}
            </div>
            <Footer />
        </>
    );
};

export default BookingPage;