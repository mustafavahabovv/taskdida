import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'

function Header() {

  const [basketCount, setBasketCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const basket = JSON.parse(localStorage.getItem('cart')) || [];
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setBasketCount(basket.length);
      setWishlistCount(wishlist.length);
    };

    updateCounts();

    window.addEventListener('storage', updateCounts);
    return () => window.removeEventListener('storage', updateCounts);
  }, []);


  return (
    <div className={style.header}>
      <div className={style.logo}>
        <h1></h1>
      </div>
      <div className={style.menu}>
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/admin"></Link></li>
          <li><Link to="#"></Link></li>
          <li><Link to="#"></Link></li>
          <li><Link to="#"></Link></li>
        </ul>
      </div>
      <div className={style.icons}>
        <ul>
          <li><Link to="/"><i className="fa-solid fa-magnifying-glass"></i> </Link></li>
          <li><Link to="/card"><i className="fa-solid fa-cart-shopping"></i>
            {basketCount > 0 && <span className={style.count}>{basketCount}</span>}
          </Link></li>
          <li><Link to="/wish"><i className="fa-regular fa-heart"></i>
            {wishlistCount > 0 && <span className={style.count}>{wishlistCount}</span>}
          </Link></li>
        </ul>
      </div>
      <i className={`fa-solid fa-bars ${style.bars}`}></i>
    </div>
  )
}

export default Header