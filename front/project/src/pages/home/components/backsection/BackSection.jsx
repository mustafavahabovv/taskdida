import React, { useEffect, useState } from 'react'
import style from './BackSection.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk } from '../../../../redux/reducer/ProductSlice';

function BackSection() {

    const { aranoz, loading, error } = useSelector((state) => state.aranoz);

    const [sortedProducts, setSortedProducts] = useState("Default");
    const [filteredProducts, setFilteredProducts] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductThunk());
    }, [dispatch]);

    const addToCard = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        let existingProduct = cart.find(item => item._id === product._id);

        if (existingProduct) {
            existingProduct.count += 1;
        } else {
            cart.push({ ...product, count: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const addToWishlist = (product) => {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        let existingProduct = wishlist.find(item => item._id === product._id);

        if (existingProduct) {
            alert('Product already added to wishlist');
        } else {
            wishlist.push({ ...product });
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    }

    const filteredAranoz = aranoz
        ? aranoz
            .filter((item) => item.title.toLowerCase().includes(filteredProducts.toLowerCase()))
            .sort((a, b) => {
                if (sortedProducts === 'default') return 0;
                if (sortedProducts === 'asc') return a.price - b.price;
                if (sortedProducts === 'desc') return b.price - a.price;
                return 0;
            })
        : [];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;







    return (
        <div className={style.product}>
            <div className={style.productup}>
                <h1>Products</h1>
                <input type="text" placeholder='Search' onChange={(e) => setFilteredProducts(e.target.value)} />
                <select onChange={(e) => setSortedProducts(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            <div className={style.productdown}>
                {filteredAranoz && filteredAranoz.slice(0, 8).map((item) => (
                    <div className={style.productitem} key={item._id}>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>$ {item.price.toFixed(2)}</p>
                        <div className={style.btn}>
                            <button onClick={() => addToCard(item)} className={style.cartbtn}>+ Add to cart</button>
                            <button onClick={() => addToWishlist(item)} className={style.wishlistbtn}> <i className="fa-regular fa-heart"></i> </button>
                        </div>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default BackSection