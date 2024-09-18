// Importing Modules/Packages
import { Link } from "react-router-dom";

export default function HomeComponent() {
    return (
        <section className="main-home">
            <div className="main-text">
                <h5>Nubian Collection</h5>
                <h1>Nubian Fortune <br /> Collection 2024</h1>
                <p>There's Nothing like Trend Marketplace</p>
                <Link to='#' className="main-btn">Shop Now <i className='bx bx-right-arrow-alt'></i></Link>
            </div>
            <div className="down-arrow">
                <a href='#trending' className="down"><i className='bx bx-down-arrow-alt' ></i></a>
            </div>
        </section>
    )
}