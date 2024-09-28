// Importing Modules/Packages
import { dirs, products } from "../helpers/helpers";
import { Link } from "react-router-dom";

const categories = ['Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', 'Category', ]

export default function StorePageComponent() {
    return (
        <section id="Store-Section" className="Store-Section">
            <div className="Category-Filters">
                <select name="Category-Filter" id="Category-Filter">
                    {categories.map((categoryName, i) => <option key={i + 1}>{categoryName}{i}</option>)}
                </select>
            </div>
            <div className="Products-Container">
                {
                    products.map(({ ProductName, PromotionType, SalePercentage, ProductImages, Price, id }) => {
                        return (
                            <div key={id} className="row">
                                <Link to={`/Store/:${id}/?${ProductName}`}>
                                    <img src={`${dirs.ProductsDir}${ProductImages[0]}`} alt={ProductName} />
                                    {SalePercentage || PromotionType ? <div className="product-text"><h5>{PromotionType}</h5></div> : null}
                                </Link>
                                <div className="heart-icon">
                                    <i className='bx bx-heart' ></i>
                                </div>
                                <div className="ratting">
                                    <i className='bx bx-star' ></i>
                                    <i className='bx bx-star' ></i>
                                    <i className='bx bx-star' ></i>
                                    <i className='bx bx-star' ></i>
                                    <i className='bx bxs-star-half' ></i>
                                </div>
                                <Link to={`/Store/:${id}/?${ProductName}`}>
                                    <div className="price">
                                        <h4>{ProductName}</h4>
                                        <p>${Price}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}