import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import Spinner from "./../spinner/Spinner";
import styles from "./featuredProducts.module.css";
import { addToCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  let product = useSelector(state => state.product);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(product);
  }, []);

  return (
    <section className={styles.featuredProducts}>
      <article>
        <h1>Featured Products</h1>
        <div className={styles.cardContainer}>
          {product.productList.length === 0 ? (
            <Spinner />
          ) : (
            product.productList.map(product => {
              let {
                id,
                title,
                price,
                thumbnail_URL,

                rating,
                brand,
              } = product;

              return (
                <div
                  onClick={() => navigate(`/products_page/${id}`)}
                  className={styles.productCard}
                  key={id}
                >
                  <div className={styles.cardBody}>
                    <img src={thumbnail_URL} alt={title} />
                  </div>
                  <div className={styles.cardHeader}>
                    <span>{rating}⭐</span>
                    {rating > 4.6 ? <span>Featured</span> : null}
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.footerLeft}>
                      <span>{brand}</span>
                      <span>{title.slice(0, 15) + `...`}</span>
                      <span>₹{price}</span>
                    </div>
                    <div className={styles.footerRight}>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          dispatch(addToCart(product));
                        }}
                      >
                        Add to cart{" "}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </article>
    </section>
  );
};

export default FeaturedProducts;
