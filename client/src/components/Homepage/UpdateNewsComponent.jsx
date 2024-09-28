// Importing Modules/Packages

import { dirs } from "../../helpers/helpers";

export default function UpdateNewsComponent() {
    return (
        <section className="Update-News">
            <div className="up-center-text">
                <h2>New Updates</h2>
            </div>
            <div className="update-cart">
                <div className="cart">
                    <img src={`${dirs.ProductsDir}/professional-black-business-woman.webp`} alt="Professional Business Women" />
                    <h5>26 jan 2024</h5>
                    <h4>Let's start bring sale on this summer vacation.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae totam rem enim, qui unde at autem eaque sunt voluptas minima optio ipsa non quos perferendis modi velit ea eos!</p>
                    <h6>Continue Reading..</h6>
                </div>
                <div className="cart">
                    <img src={`${dirs.ProductsDir}/boy-relaxing-beach.webp`} alt="little boy enjoying a swim" />
                    <h5>26 jan 2024</h5>
                    <h4>Let's start bring sale on this summer vacation.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae totam rem enim, qui unde at autem eaque sunt voluptas minima optio ipsa non quos perferendis modi velit ea eos!</p>
                    <h6>Continue Reading..</h6>
                </div>
                <div className="cart">
                    <img src={`${dirs.ProductsDir}/happy-black-couple.webp`} alt="Happy black couple" />
                    <h5>26 jan 2024</h5>
                    <h4>Let's start bring sale on this summer vacation.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae totam rem enim, qui unde at autem eaque sunt voluptas minima optio ipsa non quos perferendis modi velit ea eos!</p>
                    <h6>Continue Reading..</h6>
                </div>
            </div>
        </section>
    )
}