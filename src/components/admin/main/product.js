import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProduct } from "../../../redux/reducer/allProduct";
import { fetchProductItem } from "../../../redux/reducer/productItem";

function Product() {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.allProduct.value);
  const [products, setProducts] = useState(allProduct);

  // Load all product
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);
  useEffect(() => {
    setProducts(allProduct);
  }, [allProduct]);
  // Open Modal product detail
  const openModal = (id) => {
    const modal = document.querySelector(".ad-product__modal");
    modal.classList.remove("hide");
    dispatch(fetchProductItem(id));
  };
  const closeModal = () => {
    const modal = document.querySelector(".ad-product__modal");
    modal.classList.add("hide");
  };
  const updateProduct = (productInfo) => {
    const url = process.env.REACT_APP_SV_PRODUCTS + `/${productInfo.id}`;
    fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productInfo),
    }).then(() => dispatch(fetchAllProduct()));
    closeModal();
  };
  const deleteProduct = (id) => {
    const url = process.env.REACT_APP_SV_PRODUCTS + `/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then(() => dispatch(fetchAllProduct()));
  };

  return (
    <main className="ad-main">
      <ProductModal closeModal={closeModal} updateProduct={updateProduct} />
      <div className="ad-product">
        <h3 className="header">Product Management</h3>
        <section className="ad-product__table shadow">
          <div className="ad-product__row title">
            <p>ID</p>
            <p>PRODUCT NAME</p>
            <p>COLOR</p>
            <p>TYPE</p>
            <p>PRICE</p>
            <p>STATUS</p>
            <p>AVG RATING</p>
            <p>DELETE</p>
          </div>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              openModal={openModal}
              deleteProduct={deleteProduct}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

const ProductItem = ({ product, openModal, deleteProduct }) => {
  return (
    <div className="ad-product__row">
      <p>{product.id}</p>
      <p className="name">
        <span>{product.name}</span>
        <button className="edit" onClick={() => openModal(product.id)}>
          Edit
        </button>
      </p>
      <p>{product.color}</p>
      <p>{product.type}</p>
      <p>$ {product.price}</p>
      <p>{product.status}</p>
      <p>{product.avgRating} ★</p>
      <p>
        <button className="delete" onClick={() => deleteProduct(product.id)}>
          ✕
        </button>
      </p>
    </div>
  );
};

const ProductModal = ({ closeModal, updateProduct }) => {
  const productModal = useSelector((state) => state.productItem.value);
  const [productInfo, setProductInfo] = useState(productModal);

  useEffect(() => {
    setProductInfo({ ...productModal });
  }, [productModal]);

  // handle input
  const handleInput = (e) => {
    const target = e.target;
    setProductInfo({ ...productInfo, [target.name]: target.value });
  };

  return (
    <section className="ad-product__modal hide">
      <div className="ad-product__modal-inner">
        <div className="ad-product__modal-content">
          <div>
            <img src={productInfo.img} alt="wine" />
          </div>
          <div className="ad-product__modal-detail">
            <label>
              <span>Tên sản phẩm</span>
              <input
                type="text"
                name="name"
                value={productInfo.name}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Giá ($)</span>
              <input
                type="number"
                name="price"
                value={productInfo.price}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Link sản phẩm</span>
              <input
                type="text"
                name="img"
                value={productInfo.img}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Màu sắc</span>
              <select
                name="color"
                value={productInfo.color}
                onChange={handleInput}
              >
                <option value="White Wine">White Wine</option>
                <option value="Red Wine">Red Wine</option>
              </select>
            </label>
            <label>
              <span>Loại rượu</span>
              <select
                name="type"
                value={productInfo.type}
                onChange={handleInput}
              >
                {productInfo.color === "White Wine" ? (
                  <>
                    <option value="Chardonnay">Chardonnay</option>
                    <option value="Riesling">Riesling</option>
                    <option value="Pinot Grigio">Pinot Grigio</option>
                  </>
                ) : productInfo.color === "Red Wine" ? (
                  <>
                    <option value="Syrah">Syrah</option>
                    <option value="Zinfandel">Zinfandel</option>
                    <option value="Merlot">Merlot</option>
                  </>
                ) : null}
              </select>
            </label>
            <label>
              <span>Status</span>
              <select
                name="status"
                value={productInfo.status}
                onChange={handleInput}
              >
                <option value="">Nothing</option>
                <option value="hot">Hot</option>
                <option value="new">New</option>
                <option value="top">Top Sale</option>
                <option value="sale">Sale off</option>
              </select>
            </label>
            <p>Mô tả sản phẩm</p>
            <textarea
              type="text"
              name="info"
              rows="5"
              value={productInfo.info}
              onChange={handleInput}
            ></textarea>
          </div>
        </div>
        <div className="ad-product__modal-btn">
          <button className="btn" onClick={() => updateProduct(productInfo)}>
            UPDATE
          </button>
          <button className="btn" onClick={closeModal}>
            CANCEL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
