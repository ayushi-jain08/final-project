import React, { useState } from "react";
import "../Search/Search.scss";
import { CgClose } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import EmptySearch from "./EmptySearch";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const { products } = useProductContext();


  const prod = [...products]
  const searched = prod.filter((val) => {
    if (query === "") {
      return null;
    } else if (val.name.toLowerCase().includes(query)) {
      return val;
    }
  });
  return (
    <> 
      <div className="search-modal">
        <div className="form-field">
          <input
            type="text"
            placeholder="SEARCH HERE..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <CgClose onClick={() => navigate(-1)} />
        </div>
        <div className="search-result-content">
          <div className="search-results">
            <div className="search-result-item">
              {
                searched.length === 0 && (<EmptySearch/>)
              }
              {searched.map((item, index) => {
                const { id, name, image, price, category } = item;
                return (
                  <>
                   <NavLink to={`/singleproduct/${id}`}>
                    <div className="all-filter-product" key={index}>
                    
                      <div className="image-container">
                        <img src={image} alt="" />
                      </div>
                     
                      <div className="prod-details">
                        <span className="name">{name}</span>
                        <span className="desc">{category}</span>
                      </div>
                     
                    </div>
                    </NavLink>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
