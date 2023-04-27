import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../asset/images/banner-bg.png";

import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

import Clock from "../components/UI/Clock";

import counterImg from "../asset/images/counter-img.png";

import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);
  const [lipsProduct, setLipsProduct] = useState([]);
  const [skinCareProduct, setSkinCareProduct] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "concealer"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "foundation"
    );
    const filteredLipsProducts = products.filter(
      (item) => item.category === "lips-Product"
    );
    const filteredSkinCAreProducts = products.filter(
      (item) => item.category === "skincare"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "blush-on"
    );
    setTrendingProduct(filteredTrendingProducts);
    setBestSalesProduct(filteredBestSalesProducts);
    setLipsProduct(filteredLipsProducts);
    setSkinCareProduct(filteredSkinCAreProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h2>
                  Indulge in Sapphire Luxury, Enhance Your Natural Beauty.
                </h2>
                <p>
                  Welcome to Taaliyah's Sapphire Cosmetics, where beauty meets
                  luxury. Our premium beauty brand offers sapphire-infused
                  products that enhance your natural beauty and empower you to
                  shine bright like a precious gemstone.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Product</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductList data={trendingProduct} />
            )}
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductList data={bestSalesProduct} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className=" fs-6 mb-2">Limited Offer</h4>
                <h3 className=" fs-5 mb-3">Skincare Set</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductList data={lipsProduct} />
            )}
            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductList data={skinCareProduct} />
            )}
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <ProductList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
