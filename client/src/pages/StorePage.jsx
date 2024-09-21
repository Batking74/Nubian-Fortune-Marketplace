// Importing Modules/Packages
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        ProductName: 'Mortal Kombat vs DC - PlayStation 3 (PS3)',
        PromotionType: 'Sale',
        Image: '/images/1.webp',
        MinPrice: 99,
        MaxPrice: 129
    },
    {
        id: 2,
        ProductName: 'Batman Arkham Asylum - PlayStation 3 (PS3)',
        PromotionType: 'New',
        Image: '/images/2.webp',
        MinPrice: 99,
        MaxPrice: 129
    },
    {
        id: 3,
        ProductName: 'Grand Theft Auto IV | GTA4 - PlayStation 3 (PS3)',
        PromotionType: undefined,
        Image: '/images/3.webp',
        MinPrice: 99,
        MaxPrice: 129
    },
    {
        id: 4,
        ProductName: 'Grand Theft Auto V | GTA5 - PlayStation 5 (PS5)',
        PromotionType: 'Hot',
        Image: '/images/4.webp',
        MinPrice: 99,
        MaxPrice: 129
    },
    {
        id: 5,
        ProductName: 'Flix Flox Jeans',
        PromotionType: undefined,
        Image: '/images/5.webp',
        MinPrice: 99,
        MaxPrice: 129
    },
    {
        id: 6,
        ProductName: 'Fancy Salwar Suits',
        PromotionType: 'Hot',
        Image: '/images/6.webp',
        MinPrice: 99,
        MaxPrice: 129
    },
    {
        id: 7,
        ProductName: 'Printed Straight Kurta',
        PromotionType: 'Sale',
        Image: '/images/7.webp',
        MinPrice: 99,
        MaxPrice: 129
    },
    {
        id: 8,
        ProductName: 'Collot Full Dress',
        PromotionType: 'Sale',
        Image: '/images/8.webp',
        MinPrice: 99,
        MaxPrice: 129
    }
];
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
                    products.map(({ ProductName, PromotionType, Image, MinPrice, MaxPrice, id }) => {
                        return (
                            <div key={id} className="row">
                                <Link to={`/Store/:${id}/?${ProductName}`}>
                                    <img src={Image} alt={ProductName} />
                                    {PromotionType ? <div className="product-text"><h5>{PromotionType}</h5></div> : null}
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
                                        <p>${MinPrice} - ${MaxPrice}</p>
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