import Logo from '../Base/Logo/Logo';
import searchImg from '/search.svg';
import cartImg from '/cart.svg'
import userImg from '/user.svg'
import favoriteImg from '/favorite.svg'
import './Header.scss';

// import { Routes, Route, Link } from 'react-router-dom';
// import CartPage from '../../Pages/CartPage';
// import CartPage from '../../Pages/CartPage/CartPage';
import { Link } from 'react-router-dom';





const Header = () => {


    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo-wrapper">
                        <Logo/>
                        <Link to= "/AddProduct" className="header-catalog" >
                            <span>Добавить товар</span>
                        </Link>
                    </div>
                    <form className='header-search' action="#">
                        <input className='header-search-input' placeholder='Яндекс плюс' type="text" />
                        <button className="header-search-button"><img src={searchImg} alt="" /></button>
                    </form>
                    <div className="header-buttons">
                        <Link to="/AddProduct"className="header-buttons-item" >
                             <img src={favoriteImg} alt="" />
                            <span>Избранное</span>
                        </Link>
                        <Link to="/CartPage"  className="header-buttons-item">
                        {/* onClick={toggleMenu} */}
                            <img src={cartImg} alt="" />
                            <span>Корзина</span>
                        </Link>
                        <Link to="/LoginPage" className="header-buttons-item">
                            <img src={userImg} alt="" />
                            <span>Имя</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
{/* <Routes>
<Route path="/CartPage" element={<CartPage/>} />
</Routes> */}

export default Header;