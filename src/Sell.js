import Header from './Header';
import './Sell.css';
import Seo from './Seo';

const Sell = () => {
    return (
        <div>
            <Seo
            project = "Sell - The Luxury Abode"
            desc = "The Luxury Abode is an independent real estate information and advisory platform. This website is not the official website of any developer. All project-related details."
            img= "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/g62fxethsjgbay1shszv.jpg"
            link= "sell"
            />
            <Header />
            <div className="coming-soon-container">
                {/* Animated Symbols */}
                <div className="symbols">
                    <span>+</span>
                    <span>-</span>
                    <span>×</span>
                    <span>÷</span>
                    <span>+</span>
                    <span>-</span>
                    <span>×</span>
                    <span>÷</span>
                </div>

                {/* Center Content */}
                <div className="coming-content">
                    <h1>COMING SOON</h1>
                    <p>We will be celebrating the launch of our new site very soon!</p>
                    <button className="notify-btn">Notify Me!</button>
                </div>
            </div>
        </div>
    );
}

export default Sell
