// Importing Modules/Packages
import { Link } from "react-router-dom";
import { dirs } from "../helpers/helpers";

export default function ContactComponent() {
    return (
        <footer>
            <div className="contact-info">
                <div className="first-info">
                    <img src={`${dirs.ProductsDir}/Batking-Logo.webp`} alt="Batking Logo" />
                    <p>3245 Grant Street Longview, <br /> TX united kingdom 765378</p>
                    <p>024857574848</p>
                    <p>chicken3080@gmail.com</p>
                    <div className="social-icons">
                        <Link to='#'><i className='bx bxl-facebook' ></i></Link>
                        <Link to='#'><i className='bx bxl-twitter' ></i></Link>
                        <Link to='#'><i className='bx bxl-instagram' ></i></Link>
                        <Link to='#'><i className='bx bxl-youtube' ></i></Link>
                        <Link to='#'><i className='bx bxl-linkedin' ></i></Link>
                    </div>
                </div>
                <div className="second-info">
                    <h4>Support</h4>
                    <p>Contact Us</p>
                    <p>About Page</p>
                    <p>Size Guide</p>
                    <p>Shopping & Returns</p>
                    <p>Privacy</p>
                </div>
                <div className="third-info">
                    <h4>Shop</h4>
                    <p>Men's Shopping</p>
                    <p>Women's Shopping</p>
                    <p>Kid's Shopping</p>
                    <p>Furniture</p>
                    <p>Discount</p>
                </div>
                <div className="fourth-info">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Affiliate</p>
                    <p>Login</p>
                </div>
                <div className="five">
                    <h4>Subscribe</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, ad?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, ad?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, ad?</p>
                </div>
            </div>
        </footer>
    );
}