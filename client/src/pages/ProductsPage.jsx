// Importing Modules/Packages
import { dirs, products } from "../helpers/helpers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
    const [ID, setID] = useState(null);

    const updateQuantity = () => {

    }
    const test = (e) => {
        e.preventDefault();
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth
        const imgID = e.target.dataset.type;
        document.querySelector('.img-showcase').style.transform = `translateX(${-(imgID - 1) * displayWidth}px)`;
    }
    const setDiscount = (price, wholePercentage) => {
        const decimalPercentage = (wholePercentage / 100).toFixed(2);
        const percentageAmount = price * decimalPercentage;
        const newDiscountedPrice = price - percentageAmount;
        return[newDiscountedPrice.toFixed(2), `${percentageAmount.toFixed(2)} (${wholePercentage}% OFF)`];
    }

    useEffect(() => {
        const productID = parseInt(window.location.pathname.split(':')[1].replace('/', ''));
        setID(productID - 1);
    }, []);

    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="product-imgs">
                    <div className="img-display">
                        <div className="img-showcase">
                        {
                            ID != null ?
                                products[ID].ProductImages.map((img, i) => <img key={i} src={`${dirs.ProductsDir}${img}`} alt={products[ID].ProductName} />) : null
                        }
                            {ID != null ? <img src={`${dirs.ProductsDir}${products[ID].ProductImages[0]}`} alt={products[ID].ProductName} /> : null}
                            {ID != null ? <img src={`${dirs.ProductsDir}${products[ID].ProductImages[0]}`} alt={products[ID].ProductName} /> : null}
                        </div>
                    </div>
                    <div className="img-select">
                        {
                            ID != null ?
                                products[ID].ProductImages.map((img, i) => {
                                    return (
                                        <div key={i + 1} className="img-item">
                                            <a onClick={test} href="#">
                                                <img data-type={i + 1} src={`${dirs.ProductsDir}${img}`} alt={(img.replace('.webp', '')).replace('/', '')} />
                                            </a>
                                        </div>
                                    )
                                }) : <p>Loading...</p>
                        }
                    </div>
                </div>
                {/* Card right */}
                <div className="product-content">
                    <h2 className="product-title">{ID != null ? products[ID].ProductName : null}</h2>
                    <a href="#" className="product-link">Visit Store</a>
                    <div className="product-rating">
                        <i className='bx bx-star' ></i>
                        <i className='bx bx-star' ></i>
                        <i className='bx bx-star' ></i>
                        <i className='bx bx-star' ></i>
                        <i className='bx bx-star' ></i>
                        <span>4.7(21)</span>
                    </div>
                    <div className="product-price">
                        {
                            ID != null ? products[ID].SalePercentage != 0 ?
                                <p className="last-price">Old Price: <span>${products[ID].Price}</span></p> : null : null
                        }
                        {
                            ID != null ? products[ID].SalePercentage != 0 ?
                                <p className="new-price">New Price: <span>${setDiscount(products[ID].Price, products[ID].SalePercentage)[0]}</span></p> :
                                <p className="new-price">Price: <span>${products[ID].Price}</span></p> : null
                        }
                        {
                            ID != null ? products[ID].SalePercentage != 0 ?
                                <p className="new-price">You Save: <span>${setDiscount(products[ID].Price, products[ID].SalePercentage)[1]}</span></p> : null : null
                        }
                    </div>
                    <div className="product-details">
                        <h2>about this item</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae vel sint. Explicabo, fugiat itaque quo illum dolorum tempore repellat, ipsa consequuntur suscipit et magni facilis eos iure aperiam fugit!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora nemo itaque tempore, debitis nihil laudantium inventore esse nesciunt maiores optio, suscipit aspernatur accusantium magnam dolorem quasi quaerat, sapiente hic.</p>
                        <ul>
                            {/* <li><i className='bx bxs-check-circle'></i> Color: <span>Black</span></li> */}
                            <li>
                                <i className='bx bxs-check-circle'></i> Available: <span>{
                                    ID != null ?
                                        products[ID].Quantity != 0 ?
                                            `${products[ID].Quantity} In Stock` : 'Sold Out' : null}</span>
                            </li>
                            <li>
                                <i className='bx bxs-check-circle'></i> Category: <span>{ID != null ? products[ID].Category : null}</span>
                            </li>
                            <li>
                                <i className='bx bxs-check-circle'></i> Ships from: <span>{ID != null ? products[ID].ShipsFrom : null}</span>
                            </li>
                            <li>
                                <i className='bx bxs-check-circle'></i> Sold by: <span>{ID != null ? products[ID].SoldBy : null}</span>
                            </li>
                            <li>
                                <i className='bx bxs-check-circle'></i> Shipping: <span>{
                                    ID != null ? products[ID].ShippingFee != 0 ? `$${products[ID].ShippingFee}` : 'Free' : null}</span>
                            </li>
                            <li>
                                <i className='bx bxs-check-circle'></i> Product ID: {ID != null ? products[ID].id : null}
                            </li>
                            <li>
                                <i className='bx bxs-check-circle'></i> Returns: <span>
                                    {
                                        ID != null ? products[ID].IsReturnable ?
                                            'Return this item for free within 30 days of receipt and receive a full refund.'
                                            : 'No returns for this item.' : null
                                    }
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="purchase-info">
                        <input onChange={updateQuantity} type="number" min={0} value={1} />
                        <button type="button" className="btn">Add to Cart <i className='fas fa-shopping-cart'></i></button>
                        <button type="button" className="btn">Add to Wishlist</button>
                    </div>
                    <div className="social-links">
                        <p>Share At: </p>
                        <Link to='#'><i className='bx bxl-facebook' ></i></Link>
                        <Link to='#'><i className='bx bxl-twitter' ></i></Link>
                        <Link to='#'><i className='bx bxl-instagram' ></i></Link>
                        <Link to='#'><i className='bx bxl-youtube' ></i></Link>
                        <Link to='#'><i className='bx bxl-linkedin' ></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}