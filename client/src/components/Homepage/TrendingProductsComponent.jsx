// Importing Modules/Packages
import { dirs, products } from "../../helpers/helpers";
import { Link } from "react-router-dom";

export default function TrendingProductsComponent() {
    return (
        <section id="Trending-Products" className="Trending-Products">
            <div className="center-text">
                <h2>Our trending <span>Products</span></h2>
            </div>
            <div className="Products-Container">
                {
                    products.map(({ ProductName, PromotionType, SalePercentage, ProductImages, Price, id }, i) => {
                        if (i < 8) {
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
                        }
                    })
                }
            </div>
        </section>
    );
}