// Importing Modules/Packages
import { Link } from "react-router-dom";
window.addEventListener('scroll', function() {
    console.log('hey')
    const header = document.querySelector('header');
    header.classList.toggle('sticky', this.window.scrollY > 0)
})
const toggle = (e) => {
    e.target.classList.toggle('bx-x')
    const navmenu = e.target.parentElement.previousElementSibling;
    navmenu.classList.toggle('open');
    // console.log(e.target.parent.previousElementSibling)
}

export default function NavigationComponent() {
    return (
        <header>
            <Link to='#' className="logo"><img src="" alt="logo" /></Link>
            <ul className="navmenu">
                <li><Link to='#'>Home</Link></li>
                <li><Link to='#'>Shop</Link></li>
                <li><Link to='#'>Products</Link></li>
                <li><Link to='#'>Blog</Link></li>
                <li><Link to='#'>Services</Link></li>
            </ul>
            <div className="nav-icon">
                <Link to='#'><i className='bx bx-search'></i></Link>
                <Link to='#'><i className='bx bx-user' ></i></Link>
                <Link to='#'><i className='bx bx-cart' ></i></Link>
                <div onClick={toggle} className="bx bx-menu" id="menu-icon"></div>
            </div>
        </header>
    );
}