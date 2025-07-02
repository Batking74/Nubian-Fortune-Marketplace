// Importing Modules/Packages
import { dirs, cartItems } from "../helpers/helpers";
import { Link } from "react-router-dom";

export default function NavigationComponent() {
    const showCartItems = (e) => {
        const body = document.querySelector('body');
        body.classList.toggle('showCart');
    }
    const toggle = (e) => {
        e.target.classList.toggle('bx-x')
        const navmenu = e.target.parentElement.previousElementSibling;
        navmenu.classList.toggle('open');
    }
    window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        nav.classList.toggle('sticky', this.window.scrollY > 0);
    });

    return (
        <nav>
            <Link to='/' className="logo"><img src={`${dirs.ProductsDir}/Nubian-Fortune-Logo.webp`} alt="Nubian Fortune Logo" /></Link>
            <ul className="navmenu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Store'>Shop</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>Services</Link></li>
            </ul>
            <div className="nav-icon">
                <Link to='#'><i className='bx bx-search'></i></Link>
                <div className="icon-cart">
                    <i onClick={showCartItems} className='bx bx-cart' ></i>
                    <span className="item-counter">{cartItems.length}</span>
                </div>
                <Link to='#'><i className='bx bx-bookmark' ></i></Link>
                <div onClick={toggle} className="bx bx-menu" id="menu-icon"></div>
            </div>
        </nav>
    );
}