import React from 'react';
import "./home.css";

function Brand({ brand }) {
    return (
                <div className="brand-list-item">
                    <div className="brand-list-name">Name: {brand.brand_name}</div>
                    <div className="brand-list-industry">Industry: {brand.brand_industry}</div>
                    <div className="brand-list-industry">Score: {brand.rank}</div>
                </div>
    );
}

const BrandsList = ({ brands }) => {

    return (
        <section>
            <h2>Trusted Brands</h2>
            <div className="brand-list">
                {brands.map(brand =>
                    <Brand key={brand.id} brand={brand} />
                )}
            </div>
        </section>
    );
};

  export default BrandsList;