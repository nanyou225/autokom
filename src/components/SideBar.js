import React from "react";
import { Container } from "./SideBar.elements";
import { Link } from "react-router-dom";
import Categories from "../categories.json";
import CategoryCpy from "../categoryCpy.json";

const SideBar = () => {
  return (
    <Container>
      <ul className="header-cat-text">
        <li>
          <Link to="/catalog" className="catalogue">
            Catalogue
          </Link>
          <ul className="dropdown">
            {Categories &&
              Categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link to="/category_item">{category.title}</Link>
                  </li>
                );
              })}
          </ul>
        </li>
      </ul>
      <ul className="header-catCpy-text">
        {CategoryCpy &&
          CategoryCpy.map((categoryCpy) => {
            return (
              <li key={categoryCpy.id}>
                <Link to="/catalogCpy" className="catalogue">
                  {categoryCpy.image}
                  {categoryCpy.title}
                </Link>
              </li>
            );
          })}
      </ul>
      <ul className="header-cat-text">
        <li>
          <Link to="/garage_partner" className="catalogue">
            Garage Partenaire
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default SideBar;
