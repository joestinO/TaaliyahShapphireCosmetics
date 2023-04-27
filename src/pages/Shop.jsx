import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import ProductList from "../components/UI/ProductList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const { data: products } = useGetData("products");

  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item);
    setProductsData(filteredTrendingProducts);
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "concealer") {
      const filterProducts = products.filter(
        (item) => item.category === "concealer"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "foundation") {
      const filterProducts = products.filter(
        (item) => item.category === "foundation"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "lips-Product") {
      const filterProducts = products.filter(
        (item) => item.category === "lips-Product"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "skincare") {
      const filterProducts = products.filter(
        (item) => item.category === "skincare"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "blush-on") {
      const filterProducts = products.filter(
        (item) => item.category === "blush-on"
      );
      setProductsData(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="concealer">Concealer</option>
                  <option value="foundation">Foundation</option>
                  <option value="lips-Product">Lips Product</option>
                  <option value="skincare">Skincare</option>
                  <option value="blush-on">Blush-on</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4"> No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
